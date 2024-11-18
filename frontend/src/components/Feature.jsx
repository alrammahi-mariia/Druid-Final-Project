import React from "react";
import { URL } from "../services/apiService";
import { Col, Container, Image, Row } from "react-bootstrap";

const Feature = ({ title, text, imageUrl }) => {
  return (
    <Container fluid className="my-5">
      <Row className="align-items-center">
        {/* Image Column */}
        <Col md={4} sm={12} className="mb-3 mb-md-0 text-center text-md-start">
          {imageUrl && (
            <Image
              src={`${URL}${imageUrl}`}
              alt={title}
              fluid
              style={{
                maxWidth: "200px", // Adjust max width for responsiveness
                height: "auto", // Maintain aspect ratio
                objectFit: "contain", // Ensure image isn't stretched
              }}
            />
          )}
        </Col>
        
        {/* Text Column */}
        <Col md={8} sm={12}>
          <div className="text-md-start text-center">
            {/* Title with margin for spacing */}
            <h2 className="mb-3">{title}</h2>
            {/* Text content with a little top margin */}
            <p>{text}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Feature;
