import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import styles from "./CardsSection.module.css";
import CardComponent from "../CardComponent";

const CardsSection = ({ title, subtitle, cardData, link, linkUrl }) => {
  if (!cardData || cardData.length === 0) {
    return null;
  }

  return (
    <section className={styles.cardsSection}>
      <div className={styles.headerWrapper}>
        <div className={styles.titleGroup}>
          <h1>{title}</h1>
          <h3>{subtitle}</h3>
        </div>
        <a href={linkUrl}>
          <button className={styles.button}>{link}</button>
        </a>
      </div>
      <Container fluid className="mt-5">
        <Row className="justify-content-center">
          {cardData.map((card) => (
            <Col lg={6} md={4} sm={12} className="mb-4" key={card.id}>
              <CardComponent {...card} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

CardsSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  cardData: PropTypes.array.isRequired,
  link: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
};

export default CardsSection;
