import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import styles from "./ServicesSection.module.css";
import CardImage from "../CardImage/CardImage";

const ServicesSection = ({ title, subtitle, cardImageData, link, linkUrl }) => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.headerWrapper}>
        <div className={styles.titleGroup}>
          <h1>{title}</h1>
          <h3>{subtitle}</h3>
        </div>
        <a href={linkUrl}>
          <button className={styles.button}>{link}</button>
        </a>
      </div>
      <Container fluid>
        <Row className="justify-content-center">
          {cardImageData &&
            cardImageData.map((card) => (
              <Col lg={6} md={4} sm={12} className="mb-4" key={card.id}>
                <CardImage {...card} />
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

ServicesSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  cardImageData: PropTypes.array.isRequired,
  link: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
};

export default ServicesSection;
