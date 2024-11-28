import React from "react";
import { Image } from "react-bootstrap";
import { URL } from "../services/apiService";

const ContactCardImageBg = ({ title, text, imageUrl }) => {
  const finalImageUrl = imageUrl?.startsWith("http")
    ? imageUrl
    : `${URL}${imageUrl}`;

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "240px",
        margin: "2px 2px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "280px",
          overflow: "hidden",
          borderRadius: "8px",
          margin: "10px",
        }}
      >
        <Image
          src={finalImageUrl || "/path-to-placeholder-image.jpg"}
          alt={title || "Placeholder"}
          fluid
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          onError={(e) => {
            e.currentTarget.src = "/path-to-placeholder-image.jpg"; // Fallback image if the original fails to load
          }}
        />
      </div>
      <h5 style={{ fontWeight: "600", fontSize: "18px" }}>{title}</h5>
      <div
        style={{ fontWeight: "300", fontSize: "18px" }}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};

export default ContactCardImageBg;
