import React from "react";
import { URL } from "../services/apiService";
import { Button, Container, Image, Row, Col } from "react-bootstrap";

const HeroImage = ({ imageUrl, title }) => {
  return (
    imageUrl && (
      <Image
        src={`${URL}${imageUrl}`}
        alt={title}
        fluid
        className="hero-image"
      />
    )
  );
};

const HeroTitle = ({ title }) => {
  return <h1 className="hero-title">{title}</h1>;
};

const HeroDescription = ({ description }) => {
  return <p className="hero-description">{description}</p>;
};

const HeroButton = () => {
  return <Button variant="danger" className="hero-button">Explore more</Button>;
};

const HeroSection = ({ title, description, imageUrl, showButton = true }) => {
  return (
    <section className="hero-section position-relative">
      <Container fluid className="m-0 p-0">
        <Row className="no-gutters">
          <Col className="position-relative">
            <HeroImage imageUrl={imageUrl} title={title} />
            <div className="hero-overlay d-flex flex-column justify-content-center align-items-center text-white vh-100">
              <div className="hero-content text-center">
                <HeroTitle title={title} />
                <HeroDescription description={description} />
                {showButton && (
                  <div className="d-flex justify-content-center mt-3">
                    <HeroButton />
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
