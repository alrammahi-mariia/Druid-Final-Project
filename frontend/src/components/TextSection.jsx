import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const TextSection = ({ title, text, bgColor = "bg-light", textColor = "text-dark" }) => {
  return (
    <section className={`text-section text-center ${bgColor} ${textColor} py-5`}>
      <Container fluid>
        <Row className="justify-content-center">
          <Col md={8} lg={10}>
            {/* Title at the top with a margin-bottom for space */}
            <h1 className="mb-4">{title}</h1>
            {/* Description with some margin-top for gap */}
            <div dangerouslySetInnerHTML={{ __html: text }} className="text-content mt-4" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TextSection;
