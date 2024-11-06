import React from "react";
import { URL } from "../services/apiService";
import { Col, Container, Image, Row } from "react-bootstrap";

const TextImage = ({ title, text_long, text_short, imageUrl }) => {
  return (
    <Container fluid className="my-5">
      <Row>
        <Col md={6}>
          <div>
            <h1>{title}</h1>
            <p>{text_short}</p>
            <div dangerouslySetInnerHTML={{ __html: text_long }} />
          </div>
        </Col>
        <Col md={6}>
          {imageUrl && (
            <Image
              src={`${URL}${imageUrl}`}
              alt={title}
              style={{ width: "600px" }}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default TextImage;
