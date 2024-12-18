import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPageContent, fetchFullPageContent } from "../store/contentSlice";
import { Container, Row, Col } from "react-bootstrap";
import CardImageBg from "../components/CardImageBg";
import HeroSection from "../components/HeroSection/HeroSection";

const BlogPage = () => {
  const dispatch = useDispatch();
  const { mainData, includedData, data, loading, error } = useSelector(
    (state) => state.content
  );

  // Blog-specific data
  const blogData = data.blog_page || {};

  // Fetch data when component mounts
  useEffect(() => {
    // Fetch both articles and blog data
    dispatch(
      fetchFullPageContent({
        contentType: "article",
        includedFields: ["field_image"],
      })
    );

    dispatch(
      fetchPageContent({
        contentType: "blog_page",
        includedFields: [
          "field_blog_content",
          "field_blog_content.field_image",
        ],
      })
    );
  }, [dispatch]);

  console.log("Data from Redux:");
  console.log("data:", data);
  console.log("mainData:", mainData);
  console.log("includedData:", includedData);

  // Loading and error handling
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!mainData && !blogData) return <p>No data available</p>;

  const { heroData } = blogData;

  return (
    <div>
      {/* Blog Hero Section */}
      {blogData.heroData && (
        <HeroSection {...heroData} variant="dark" textSize="small" />
      )}

      {/* Blog List Section */}
      <section className="my-5">
        <Container>
          <Row className="services-container justify-content-center">
            {mainData &&
              mainData.map((article, index) => {
                const imageUrl = includedData?.imageUrls?.[index] || "";
                return (
                  <Col lg={6} md={4} sm={12} className="mb-4" key={index}>
                    <CardImageBg
                      text={article.attributes.body?.value}
                      title={article.attributes.title}
                      imageUrl={imageUrl}
                    />
                  </Col>
                );
              })}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default BlogPage;
