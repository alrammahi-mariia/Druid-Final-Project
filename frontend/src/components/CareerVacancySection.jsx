import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

const CareerVacancySection = ({ title, text }) => {
  return (
    <Container
      className="text-start pt-1"
      style={{
        maxWidth: "700px",
      }}
    >
      <Row className="justify-content-center">
        <Col xs={12}>
          <div
            style={{
              padding: "10px 0 0 10px",
              borderRadius: "8px",
              backgroundColor: "#fff",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginRight: "20px",
              }}
            >
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
