import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPageContent, fetchFullPageContent } from "../store/contentSlice";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection/HeroSection";
import BlogCardImage from "../components/BlogCardImage/BlogCardImage";
import { fetchUsers } from "../services/apiService";
import slugify from "slugify";

const BlogPage = () => {
  const dispatch = useDispatch();
  const { mainData, includedData, data, loading, error } = useSelector(
    (state) => state.content
  );

  const [users, setUsers] = useState([]);
  const [tags, setTags] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);

  const usersMap = useMemo(() => {
    return users.reduce((acc, user) => {
      acc[user.id] = user.attributes.display_name;
      return acc;
    }, {});
  }, [users]);

  const blogData = data.blog_page || {};

  useEffect(() => {
    // Dispatch actions for fetching content
    dispatch(
      fetchFullPageContent({
        contentType: "article",
        includedFields: ["field_image", "field_tags"],
      })
    );

    dispatch(
      fetchPageContent({
        contentType: "blog_page",
        includedFields: [
          "field_blog_content",
          "field_blog_content.field_image",
          "uid",
        ],
      })
    );

    // Fetch users and set them in state
    const fetchUsersData = async () => {
      try {
        const userData = await fetchUsers();
        setUsers(userData.data);
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };

    fetchUsersData();
  }, [dispatch]);

  console.log("Main data:", mainData);
  console.log("Included data:", includedData);

  useEffect(() => {
    // Process the tags from the includedData using processIncludedData
    if (includedData) {
      const processedTags = includedData.fieldTags || [];
      setTags(processedTags);
    }
  }, [includedData]);

  useEffect(() => {
    // Filter the articles based on the selected tag
    if (selectedTag) {
      const filtered = mainData.filter((article) => {
        return article.relationships?.field_tags?.data.some(
          (tag) => tag.id === selectedTag.id
        );
      });
      setFilteredArticles(filtered);
    } else {
      // Show all articles if no tag is selected
      setFilteredArticles(mainData);
    }
  }, [selectedTag, mainData]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data. Please try again later.</p>;
  if (!mainData && !blogData) return <p>No blog data available</p>;

  const { heroData } = blogData;

  // Ensure image URL is correctly mapped by article ID or some other unique key
  const imageUrlMap = includedData?.imageUrls?.reduce((acc, image, idx) => {
    const articleId = mainData[idx]?.id;
    if (articleId) {
      acc[articleId] = image;
    }
    return acc;
  }, {});

  const renderArticle = (article, index) => {
    const imageUrl = imageUrlMap[article.id] || "";
    const slug = slugify(article.attributes.title || "untitled", {
      lower: true, // Convert to lowercase
      strict: true, // Remove special characters
      trim: true, // Trim whitespace
    });
    const createdDate = new Date(
      article.attributes.created
    ).toLocaleDateString();
    const authorId = article.relationships?.uid?.data?.id;
    const authorName = usersMap[authorId] || "Unknown";

    // Extract tags for the article from field_tags relationships
    const articleTags = article.relationships?.field_tags?.data || [];
    const tagNames = articleTags.map((tag) => {
      const tagObj = tags.find((t) => t.id === tag.id);
      return tagObj?.name || "";
    });

    return (
      <Col lg={4} md={6} sm={12} className="mb-4" key={index}>
        <Link
          to={{
            pathname: `/blog/${slug}`, // Use the slugified title
          }}
          state={{
            article,
            imageUrl,
            authorName,
            createdDate,
          }}
          style={{ textDecoration: "none" }}
        >
          <div>
            <BlogCardImage
              text={`On ${createdDate} | By ${authorName}`}
              title={article.attributes.title}
              imageUrl={imageUrl}
              tags={tagNames}
            />
          </div>
        </Link>
      </Col>
    );
  };

  return (
    <div style={{ width: "100%", margin: "0", padding: "0" }}>
      {heroData && (
        <HeroSection {...heroData[0]} variant="dark" textSize="small" />
      )}

      {/* Render the tags inside the Hero section */}
      <section className="my-5">
        <Container>
          <Row>
            {tags.length > 0 && (
              <div className="tags-container">
                <div>
                  {tags.map((tag) => (
                    <button
                      key={tag.id}
                      onClick={() => setSelectedTag(tag)}
                      style={{
                        margin: "5px",
                        padding: "5px 10px",
                        cursor: "pointer",
                        borderRadius: "10px",
                        color: "#333",
                        border: "none",
                      }}
                    >
                      {tag.name}
                    </button>
                  ))}
                  <button
                    // Reset filter
                    onClick={() => setSelectedTag(null)}
                    style={{
                      margin: "5px",
                      padding: "5px 10px",
                      cursor: "pointer",
                      borderRadius: "4px",
                      backgroundColor: "#ccc",
                      color: "#000",
                      border: "none",
                    }}
                  >
                    All
                  </button>
                </div>
              </div>
            )}
          </Row>
        </Container>
      </section>

      {/* Render the filtered or all articles */}
      <section className="my-5">
        <Container>
          <Row className="services-container justify-content-center">
            {filteredArticles && filteredArticles.map(renderArticle)}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default BlogPage;
