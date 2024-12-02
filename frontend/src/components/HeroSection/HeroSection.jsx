import { Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import styles from "./HeroSection.module.css";

const HeroSection = ({
  title,
  description,
  variant = "light",
  textSize = "large",
}) => {
  return (
    <div
      className={`${styles.heroSection} ${styles[variant]} ${
        styles[textSize + "Text"]
      }`}
    >
      <Container>
        <Row className={`justify-content-center ${styles.heroContent}`}>
          <h1>{title}</h1>
          <p>{description}</p>
        </Row>
      </Container>
    </div>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["light", "dark"]),
  textSize: PropTypes.oneOf(["small", "medium", "large"]),
};

export default HeroSection;
