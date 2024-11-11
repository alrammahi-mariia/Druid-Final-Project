import React from "react";
import { URL } from "../services/apiService";
import { Col, Container, Image, Row } from "react-bootstrap";

const TextImageLeft = ({ title, text_short, text_long, imageUrl }) => {
  return (
    <div>
      <Container fluid className="my-5 mx-2">
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
            <h1>{title}</h1>
            <p>{text_short}</p>
            <div dangerouslySetInnerHTML={{ __html: text_long }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TextImageLeft;
