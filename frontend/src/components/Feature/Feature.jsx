/* eslint-disable react/prop-types */
import { URL } from "../../services/apiService";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./Feature.css";

const Feature = ({ text, imageUrl }) => {
  return (
    <Container fluid className="my-5">
      <Row className="align-items-center">
        {/* Image Column */}
        <Col md={2} sm={12} className="mb-3 mb-md-0 text-center text-md-start">
          {imageUrl && (
            <Image
              src={`${URL}${imageUrl}`}
              alt={text}
              fluid
              style={{
                maxWidth: "200px",
                height: "auto",
                objectFit: "contain",
              }}
            />
          )}
        </Col>

        {/* Text Column */}
        <Col md={10} sm={12}>
          <div className="text-md-start text-start">
            <p className="feature-text">{text}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Feature;
