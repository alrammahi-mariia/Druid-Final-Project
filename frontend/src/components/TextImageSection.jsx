import React from "react";

const TextImage = ({ title, text, imageUrl }) => {
  return (
    <section className="hero">
      <h1>{title}</h1>
      <p>{text}</p>
      {imageUrl && <img src={imageUrl} alt={title} />}
    </section>
  );
};

export default TextImage;
