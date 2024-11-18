import React from "react";
import { Card, Image } from "react-bootstrap";
import { URL } from "../services/apiService";

const CardImageBg = ({ title, text, imageUrl }) => {
  return (
    <Card
      className="h-100 text-center overflow-hidden"
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
      <div className="overflow-hidden">
        {imageUrl && (
          <Image
            src={`${URL}${imageUrl}`}
            alt={title}
            fluid
            style={{
              objectFit: "cover",
              width: "100%",
              height: "200px",
            }}
          />
        )}
      </div>
      <Card.Body>
        <Card.Title className="mt-3">{title}</Card.Title>
        <Card.Text as="div" dangerouslySetInnerHTML={{ __html: text }} />
      </Card.Body>
    </Card>
  );
};

export default CardImageBg;
