import React from "react";
import { Container, Row } from "react-bootstrap";

const ContactText = ({ title, text }) => {
  return (
    <Container className="text-center pt-5 my-4" style={{ maxWidth: "500px" }}>
      <Row className="justify-content-center">
        <div>
          <h1 style={{ marginBottom: "1rem", fontWeight: "bold" }}>{title}</h1>
          <div
            style={{ fontSize: "1rem", lineHeight: "1.6", color: "#555" }}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      </Row>
    </Container>
  );
};

export default ContactText;
