import React from "react";
import { Container, Row } from "react-bootstrap";

const Text = ({ title, text }) => {
  return (
    <Container className="text-center p-5 my-5" style={{ maxWidth: "800px" }}>
      <Row className="justify-content-center">
        <div>
          <h1 style={{ marginBottom: "1.5rem", fontWeight: "bold" }}>{title}</h1>
          <div style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#555" }} dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </Row>
    </Container>
  );
};

export default Text;
