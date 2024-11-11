import React from "react";
import { URL } from "../services/apiService";
import { Button, Container, Image, Row } from "react-bootstrap";

const HeroSection = ({ title, description, imageUrl }) => {
  return (
    <div>
      <Container fluid className="m-0 p-0">
        <Row>
          <section className="hero-section position-relative">
            {imageUrl && (
              <Image
                src={`${URL}${imageUrl}`}
                alt={title}
                fluid
                className="w-100 hero-image"
              />
            )}
            <div className="hero-overlay d-flex flex-column justify-content-center align-items-center text-center text-white">
              <h1>{title}</h1>
              {description}
              <Button variant="danger">Explore more</Button>
            </div>
          </section>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
