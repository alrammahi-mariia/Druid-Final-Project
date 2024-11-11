import React from "react";
import { URL } from "../services/apiService";
import { Col, Container, Image, Row } from "react-bootstrap";

const Feature = ({ title, text, imageUrl }) => {
  return (
    <Container fluid className="my-5">
      <Row>
        <Col md={2}>
          {imageUrl && (
            <Image
              src={`${URL}${imageUrl}`}
              alt={title}
              style={{ width: "5em" }}
            />
          )}
        </Col>
        <Col md={10}>
          <div>
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Feature;
