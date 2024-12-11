import React from "react";
import { Container, Row } from "react-bootstrap";

const ContactText = ({ title, text }) => {
  console.log(title, text);
  return (
    <Container
      className="text-start pt-5 "
      style={{ maxWidth: "700px", marginLeft: "100px" }}
    >
      <Row
        className="justify-content-start"
        style={{ maxWidth: "700px", marginLeft: "50px" }}
      >
        <div>
          <h1
            style={{
              marginBottom: "1rem",
              fontWeight: "300",
              fontSize: "48px",
            }}
          >
            {title}
          </h1>
          <div
            style={{ fontSize: "1.1rem", lineHeight: "1", color: "#555" }}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      </Row>
    </Container>
  );
};

export default ContactText;
