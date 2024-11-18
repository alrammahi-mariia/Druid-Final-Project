import React from "react";
import { Container, Row } from "react-bootstrap";

const Testimonial = ({ text, author }) => {
  return (
    <Container fluid className="p-0 m-0">
      <Row>
        <section className="testimonials-section text-center my-5 p-5 bg-dark text-white">
          <blockquote className="blockquote">
            <h2>{text}</h2>
            <footer className="blockquote-footer">{author}</footer>
          </blockquote>
        </section>
      </Row>
    </Container>
  );
};

export default Testimonial;
