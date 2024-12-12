import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

const CareerVacancySection = ({ title, text }) => {
  return (
    <Container fluid className="text-start py-3 px-4">
      {/* Adjusted for full-width responsiveness */}
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <div
            className="p-3 rounded bg-white shadow-sm"
            style={{
              borderRadius: "8px",
            }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <h1
                style={{
                  fontWeight: "350",
                  fontSize: "22px",
                }}
              >
                {title}
              </h1>
              {/* Arrow icon */}
              <MdOutlineSubdirectoryArrowRight
                style={{
                  fontSize: "24px",
                  color: "#555",
                }}
              />
            </div>
            <div
              style={{
                fontSize: "18px",
                color: "#555",
              }}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CareerVacancySection;
