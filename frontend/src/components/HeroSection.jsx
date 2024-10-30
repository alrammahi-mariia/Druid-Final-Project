
import React from "react";

const HeroSection = ({ title, subtitle, text }) => (
  <section>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <p dangerouslySetInnerHTML={{ __html: text }} />
  </section>
);

export default HeroSection;
