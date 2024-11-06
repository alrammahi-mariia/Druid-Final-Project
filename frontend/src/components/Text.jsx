import React from "react";
import { Container, Row } from "react-bootstrap";

const Text = ({ title, text }) => {
  return (
    <Container className="text-center p-5 my-5">
      <Row>
        <div>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </Row>
    </Container>
  );
};

export default Text;
