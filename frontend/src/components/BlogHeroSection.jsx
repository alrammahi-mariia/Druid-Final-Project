import { Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import styles from "./HeroSection/HeroSection.module.css";
import { URL } from "../services/apiService";

const BlogHeroSection = ({
  title,
  //   description,
  imageUrl,
  variant = "light",
  textSize = "large",
  textAlign = "start",
}) => {
  return (
    <div>
      {/* Background Image Section */}
      <div
        className={`${styles.heroSection} ${styles[variant]}`}
        style={{
          backgroundImage: imageUrl ? `url('${URL}${imageUrl}')` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "400px",
        }}
      ></div>

      {/* Text Content Section */}
      <Container className="text-center mt-4">
        <Row className="justify-content-center">
          <h1 className={`${styles[textSize + "Text"]} ${styles[textAlign]}`}>
            {title}
          </h1>
        </Row>
        {/* {description && (
          <Row className="justify-content-center mt-2">
            <p className={`${styles[textAlign]}`}>{description}</p>
          </Row>
        )} */}
      </Container>
    </div>
  );
};

BlogHeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  //   description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  variant: PropTypes.oneOf(["light", "dark"]),
  textSize: PropTypes.oneOf(["small", "medium", "large"]),
  textAlign: PropTypes.oneOf(["start", "center"]),
};

export default BlogHeroSection;
