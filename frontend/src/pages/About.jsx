import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPageContent } from "../store/contentSlice";
import HeroSection from "../components/HeroSection/HeroSection";
import TextImageRight from "../components/TextImageRight";
import { Row, Container } from "react-bootstrap";

const About = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.content);
  const aboutData = data.about || {};

  useEffect(() => {
    dispatch(
      fetchPageContent({
        contentType: "about",
        includedFields: [
          "field_about_content",
          "field_about_content.field_image",
          "field_about_content.field_text_image",
        ],
      })
    );
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const { heroData, textImageData } = aboutData;

  return (
    <div className="about-page">
      {/* Hero section without the button */}
      {aboutData.heroData && (
        <HeroSection {...heroData} variant="dark" textSize="small" />
      )}

      {/* Text sections with conditional styling */}
      <Container fluid>
        {/* First Section with Black Background */}
        {aboutData.textImageData &&
          aboutData.textImageData.map((item) => (
            <Row key={item.id}>
              <TextImageRight {...item} />
            </Row>
          ))}
      </Container>
    </div>
  );
};

export default About;
