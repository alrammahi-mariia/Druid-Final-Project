import React from "react";
import { URL } from "../services/apiService";
import { Col, Container, Image, Row } from "react-bootstrap";

const TextImageHome = ({ title, imageUrls }) => {
  return (
    <div
      style={{
        backgroundColor: "#020204",
        color: "#FFFFFF",
        minHeight: "60vh",
      }}
    >
      <Container
        fluid
        className="my-5"
        style={{ paddingLeft: "20px", paddingRight: "20px" }}
      >
        <Row className="mb-4">
          <Col>
            <h1 style={{ textAlign: "center", marginTop: "30px" }}>{title}</h1>
          </Col>
        </Row>
        <Row>
          {imageUrls.slice(0, 12).map((imageUrl, index) => (
            <Col
              md={3}
              key={index}
              className="mb-4"
              style={{ textAlign: "center" }}
            >
              <Image
                src={`${URL}${imageUrl}`}
                alt={`image-${index}`}
                style={{
                  width: "170px", 
                  height: "75px", 
                  display: "block",
                  margin: "0 auto", // Center the image in the column
                }}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TextImageHome;
