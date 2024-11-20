import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPageContent } from "../store/contentSlice";
import HeroSection from "../components/HeroSection";
import TextImageRight from "../components/TextImageRight";
import { Row, Container } from "react-bootstrap";
import '../style/About.css'; // if you want to keep some additional styling

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

  console.log("Data from Redux", aboutData);

  // Destructure the data from homeData
  const { heroData, textImageData } = aboutData;

  return (
    <div className="about-page">
      {/* Hero section without the button */}
      {aboutData.heroData && <HeroSection {...heroData} showButton={false} />}
      
      {/* Text sections with conditional styling */}
      <Container fluid>
        {/* First Section with Black Background */}
        {aboutData.textImageData &&
          aboutData.textImageData.map((item, index) => (
            <Row
              key={item.id}
              style={{
                backgroundColor: index === 1 ? "black" : "white", // First section will have black bg
                color: index === 1 ? "white" : "black", // Change text color for black bg section
              }}
            >
              <TextImageRight {...item} />
            </Row>
          ))}
      </Container>
    </div>
  );
};

export default About;
