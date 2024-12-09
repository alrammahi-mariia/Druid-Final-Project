import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BlogHeroSection from "../components/BlogHeroSection";

const BlogSingle = () => {
  const location = useLocation();
  const {
    article: stateArticle,
    imageUrl: stateImageUrl,
    authorName: stateAuthorName,
    createdDate: stateCreatedDate,
  } = location.state || {};

  // Set the state using the location state data
  const [article, setArticle] = useState(stateArticle);
  const [imageUrl, setImageUrl] = useState(stateImageUrl);
  const [authorName, setAuthorName] = useState(stateAuthorName);
  const [createdDate, setCreatedDate] = useState(stateCreatedDate);

  // Ensure the article data is available in the state
  useEffect(() => {
    if (stateArticle) {
      setArticle(stateArticle);
      setImageUrl(stateImageUrl);
      setAuthorName(stateAuthorName);
      setCreatedDate(stateCreatedDate);
    }
  }, [stateArticle, stateImageUrl, stateAuthorName, stateCreatedDate]);

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <BlogHeroSection
        title={article.attributes.title}
        imageUrl={imageUrl}
        variant="dark"
        textSize="large"
        textAlign="center"
      />
      <div className="content-container my-5 mx-5">
        <p style={{ fontSize: "1rem", color: "#666" }}>
          On {createdDate} | By {authorName}
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html: article.attributes.body?.value,
          }}
        />
      </div>
    </div>
  );
};

export default BlogSingle;
