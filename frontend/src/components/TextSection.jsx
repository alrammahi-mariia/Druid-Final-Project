import React from "react";
import { Container, Row } from "react-bootstrap";

const TextSection = ({ title, text }) => {
  return (
    <Container className="text-section bg-light p-5 my-5">
      <Row>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </Row>
    </Container>
  );
};

export default TextSection;
