import React from "react";
import { URL } from "../services/apiService";
import { Col, Container, Image, Row } from "react-bootstrap";

const TextImageRight = ({ title, text_long, text_short, imageUrl }) => {
  return (
    <div>
      <Container fluid className="my-5 mx-2">
        <Row>
          {/* Text Column */}
          <Col md={6} xs={12} className="d-flex flex-column justify-content-center">
            <div>
              {/* Title */}
              <h1
                className="mb-4" // Adds margin-bottom to separate from the next element
                style={{
                  
                }}
              >
                {title}
              </h1>
              
              {/* Short Text */}
              <p
                className="mb-4" // Adds margin-bottom to separate from the next element
                style={{
                  fontSize: "1.2rem",
                }}
              >
                {text_short}
              </p>
              
              {/* Long Text */}
              <div
                className="my-4" // Adds margin-top and margin-bottom to space it from the above and below elements
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  paddingRight: "10px", // Adds padding to the right for the long text
                }}
                dangerouslySetInnerHTML={{ __html: text_long }}
              />
            </div>
          </Col>

          {/* Image Column */}
          <Col md={6} xs={12} className="d-flex justify-content-center align-items-center">
            {imageUrl && (
              <Image
                src={`${URL}${imageUrl}`}
                alt={title}
                fluid
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  marginTop: "20px", // Adds some margin on top of the image
                }}
              />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TextImageRight;
