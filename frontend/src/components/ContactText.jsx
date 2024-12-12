import React from "react";
import { Container, Row } from "react-bootstrap";

const ContactText = ({ title, text }) => {
  return (
    <Container
      className="text-start pt-5"
      style={{ maxWidth: "700px", marginLeft: "50px", padding: "0 20px" }}
    >
      <Row className="justify-content-start">
        <div>
          <h1
            style={{
              marginBottom: "2rem",
              fontWeight: "300",
              fontSize: "clamp(32px, 5vw, 48px)", // Adjust font size based on screen width clamp(32px, 5vw, 48px)
            }}
          >
            {title}
          </h1>
          <div
            style={{
              fontSize: "1rem",
              lineHeight: "1",
              color: "#555",
            }}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      </Row>
    </Container>
  );
};

export default ContactText;
