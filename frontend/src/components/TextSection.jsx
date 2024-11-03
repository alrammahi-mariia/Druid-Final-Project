import React from "react";
import { Container, Row } from "react-bootstrap";

const TextSection = ({ title, text }) => {
  return (
    <Container fluid>
      <Row>
        <div>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </Row>
    </Container>
  );
};

export default TextSection;
