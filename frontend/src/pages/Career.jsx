import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchPageContent } from "../store/contentSlice";
import CareerVacancySection from "../components/CareerVacancySection";
import CareerText from "../components/CareerText";
import MauticEmailForm from "../components/MauticEmailForm";
import HeroSection from "../components/HeroSection/HeroSection";

const Career = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.content);
  const careerData = data?.career || {};

  useEffect(() => {
    dispatch(
      fetchPageContent({
        contentType: "career",
        includedFields: ["field_career"],
      })
    );
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const { heroData, textData } = careerData;

  // Ensure heroData is properly extracted
  const hero =
    Array.isArray(heroData) && heroData.length > 0 ? heroData[0] : {};

  return (
    <div style={{ width: "100%", margin: "0", padding: "0" }}>
      {hero.title && (
        <HeroSection
          title={hero.title || "Default Title"}
          description={hero.description || "Default Description"}
          variant="dark"
          textSize="small"
        />
      )}
      <Container fluid className="my-3">
        <Row className="g-0" style={{ marginTop: "0px" }}>
          {Array.isArray(textData) &&
            textData.slice(0, 3).map((item, index) => (
              <Col xs={12} className="mb-0" key={index}>
                {/* Render CareerVacancySection with title and text */}
                <CareerVacancySection
                  title={item.title || "Default Title"}
                  text={item.text || "Default Text"}
                />
                {/* Add horizontal line after each section */}
                <hr
                  style={{
                    border: "0",
                    borderTop: "1px solid #ddd",
                    width: "50%",
                    margin: "auto",
                  }}
                />
              </Col>
            ))}
        </Row>

        {/* Add only the fourth element*/}
        <Row
          className="g-0"
          style={{ marginTop: "50px", backgroundColor: "#F8F8F8" }}
        >
          {Array.isArray(textData) && textData[3] && (
            <Col xs={12} className="mb-0">
              <CareerText
                title={textData[3].title || "Default Card Title"}
                text={textData[3].text || "Default Card Text"}
              />
            </Col>
          )}
        </Row>

        {/* Add the last element of the array */}
        <Row className="g-0" style={{ marginTop: "50px" }}>
          {Array.isArray(textData) && textData.length > 0 && (
            <Col xs={12} className="mb-0">
              <CareerText
                title={
                  textData[textData.length - 1].title || "Default Card Title"
                }
                text={textData[textData.length - 1].text || "Default Card Text"}
              />
            </Col>
          )}
        </Row>

        {/* Contact Form Section */}
        <Row className="justify-content-center align-items-center">
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center mb-5 px-5"
          >
            <div
              style={{
                maxWidth: "750px",
                height: "auto",
                background: "#fafafa",
                width: "100%",
                padding: "20px",
                borderRadius: "8px",
              }}
            >
              <div>
                <h3 className="text-center mt-2">Send us a message</h3>
              </div>
              <MauticEmailForm />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Career;
