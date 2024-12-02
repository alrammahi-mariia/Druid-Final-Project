import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
  FaWikipediaW,
} from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className="justify-content-between">
          <Col md={3} sm={12} className={styles.column}>
            <h4 className={styles.title}>Contact Us</h4>
            <div className={styles.contactInfo}>
              <p>
                <FaMapMarkerAlt />
                <span>
                  Pasilankatu 2,
                  <br />
                  00240 Helsinki,
                  <br />
                  Finland
                </span>
              </p>
              <p>
                <FaEnvelope />
                <span>info@druid.fi</span>
              </p>
              <p>
                <FaPhone />
                <span>+358 20 187 6602</span>
              </p>
            </div>
          </Col>

          <div className={`${styles.verticalLine} ${styles.leftLine}`}></div>

          <Col md={3} sm={12} className={styles.column}>
            <h4 className={styles.title}>Follow Us</h4>
            <div className={styles.socialLinks}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare /> Facebook
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram /> Instagram
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaWikipediaW /> IteWiki
              </a>
            </div>
          </Col>

          <div className={`${styles.verticalLine} ${styles.rightLine}`}></div>

          <Col md={3} sm={12} className={styles.column}>
            <h4 className={styles.title}>Quick Links</h4>
            <div className={styles.quickLinks}>
              <Link to="/about">About us</Link>
              <Link to="/services">Services</Link>
              <Link to="/career">Careers</Link>
              <Link to="/blog">Blog</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
