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
      <Container fluid>
        <Container className="px-3 px-md-5">
          <div className={`${styles.verticalLine} ${styles.leftLine}`}></div>
          <div className={`${styles.verticalLine} ${styles.rightLine}`}></div>

          <Row className="d-flex justify-content-between align-items-start">
            <Col md={3} sm={12} className={styles.column}>
              <h4 className={styles.title}>Contact Us</h4>
              <div className={styles.contactInfo}>
                <p>
                  <FaMapMarkerAlt /> Pasilankatu 2, 00240 Helsinki, Finland
                </p>
                <p>
                  <FaEnvelope /> info@druid.fi
                </p>
                <p>
                  <FaPhone /> +358 20 187 6602
                </p>
              </div>
            </Col>

            <Col md={3} sm={12} className={styles.column}>
              <h4 className={styles.title}>Follow Us</h4>
              <div className={styles.socialLinks}>
                <a
                  href="https://www.itewiki.fi/druid"
                  className="text-white text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookSquare size={24} /> Facebook
                </a>
                <a
                  href="https://www.itewiki.fi/druid"
                  className="text-white text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={24} /> LinkedIn
                </a>
                <a
                  href="https://www.itewiki.fi/druid"
                  className="text-white text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={24} /> Instagram
                </a>
                <a
                  href="https://www.itewiki.fi/druid"
                  className="text-white text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWikipediaW size={24} /> IteWiki
                </a>
              </div>
            </Col>

            <Col md={2} sm={12} className={styles.column}>
              <h4 className={styles.title}>Quick Links</h4>
              <div className={styles.quickLinks}>
                <Link to="/about" className="text-white text-decoration-none">
                  About Us
                </Link>
                <Link
                  to="/services"
                  className="text-white text-decoration-none"
                >
                  Our Services
                </Link>
                <Link to="/career" className="text-white text-decoration-none">
                  Careers
                </Link>
                <Link to="/blog" className="text-white text-decoration-none">
                  Blog
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
};

export default Footer;
