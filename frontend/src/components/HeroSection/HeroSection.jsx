import { Container, Row } from "react-bootstrap";
import styles from "./HeroSection.module.css";

const HeroSection = ({
  title,
  description,
  variant = "light",
  textSize = "large", // 'small' or 'large'
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

export default HeroSection;
