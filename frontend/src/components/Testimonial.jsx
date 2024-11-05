import React from "react";
import { Container, Row } from "react-bootstrap";

const Testimonial = ({ text, author }) => {
  return (
    <Container fluid className="p-0 m-0">
      <Row>
        <section className="testimonials-section text-center my-5 p-5">
          <blockquote className="blockquote">
            <p>{text}</p>
            <footer className="blockquote-footer">{author}</footer>
          </blockquote>
        </section>
      </Row>
    </Container>
  );
};

export default Testimonial;
