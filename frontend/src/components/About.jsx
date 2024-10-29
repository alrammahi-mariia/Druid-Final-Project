import React from "react";
import { Container, Card } from "react-bootstrap";

const About = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card
        className="p-5 text-center"
        style={{ maxWidth: "600px", border: "1px solid #ddd" }}
      >
        <Card.Body>
          <Card.Title style={{ color: "black", fontSize: "2rem" }}>
            About
          </Card.Title>
          <Card.Text style={{ color: "black", fontSize: "1.2rem" }}>
          About information will be here.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default About;
