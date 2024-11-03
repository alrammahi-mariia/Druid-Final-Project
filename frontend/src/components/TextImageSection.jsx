import React from "react";
import { URL } from "../services/api_services";

const TextImage = ({ title, text, imageUrl }) => {
  return (
    <section className="hero">
      <h1>{title}</h1>
      <p>{text}</p>
      {imageUrl && <img src={`${URL}${imageUrl}`} alt={title} />}
    </section>
  );
};

export default TextImage;
