import React from "react";
import { URL } from "../services/api_services";
import { Col, Container, Image, Row } from "react-bootstrap";

const TextImage = ({ title, text, imageUrl }) => {
  return (
    <Container fluid className="my-5">
      <Row>
        <Col md={6}>
          {imageUrl && (
            <Image
              src={`${URL}${imageUrl}`}
              alt={title}
              style={{ width: "600px" }}
            />
          )}
        </Col>
        <Col md={6}>
          <div>
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TextImage;
