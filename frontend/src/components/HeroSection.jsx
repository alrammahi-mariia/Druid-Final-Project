import React from "react";
import { URL } from "../services/api_services";

const HeroSection = ({ title, description, imageUrl }) => {
  return (
    <section className="hero">
      <h1>{title}</h1>
      <p>{description}</p>
      {imageUrl && <img src={`${URL}${imageUrl}`} alt={title} />}
    </section>
  );
};

export default HeroSection;
