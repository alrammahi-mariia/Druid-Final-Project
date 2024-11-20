import React from "react";
import { Button, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CardComponent = ({ title, text }) => {
  return (
    <Card 
      className="h-100 text-center d-flex flex-column justify-content-between"
      style={{
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <Card.Body className="d-flex flex-column">
        {/* Card Title */}
        <Card.Title className="mb-3">{title}</Card.Title>

        {/* Card Text (description) */}
        <Card.Text className="flex-grow-1">{text}</Card.Text>

        {/* Centered Button */}
        <LinkContainer to="/services/service-single">
          <Button variant="danger" className="mt-auto align-self-center">
            Learn more
          </Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
