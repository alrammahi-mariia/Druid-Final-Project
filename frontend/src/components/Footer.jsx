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
import { AiOutlineClose } from "react-icons/ai";

const Footer = () => {
  return (
    <footer
      className="text-white py-5 position-relative"
      style={{
        backgroundColor: "#2c3e50", // Dark background color
        width: "100%",
      }}
    >
      <Container fluid>
        <Container className="px-3 px-md-5 position-relative">
          {/* Vertical Line Left */}
          <div
            style={{
              position: "absolute",
              top: "10%",
              bottom: "10%",
              left: "33%",
              width: "3px",
              backgroundColor: "#E11000", // Red color
              animation: "pulse 3s infinite", // Animation for glowing effect
            }}
          ></div>
          {/* Vertical Line Right */}
          <div
            style={{
              position: "absolute",
              top: "10%",
              bottom: "10%",
              left: "66%",
              width: "3px",
              backgroundColor: "#E11000", // Red color
              animation: "pulse 3s infinite", // Animation for glowing effect
            }}
          ></div>

          <Row className="d-flex justify-content-between align-items-start position-relative">
            {/* Left Column */}
            <Col md={3} sm={12} className="text-start">
              <h4 className="mb-4" style={{ color: "#E11000" }}> {/* Red Heading */}
                Contact Us
              </h4>
              <p>
                <FaMapMarkerAlt className="me-2" /> Pasilankatu 2, 00240
                Helsinki, Finland
              </p>
              <p>
                <FaEnvelope className="me-2" /> info@druid.fi
              </p>
              <p>
                <FaPhone className="me-2" /> +358 20 187 6602
              </p>
            </Col>

            {/* Middle Column - Social Links */}
            <Col md={3} sm={12} className="text-center">
              <h4 className="mb-4" style={{ color: "#E11000" }}>
                Follow Us
              </h4>
              <p>
                <a
                  href="https://www.facebook.com/druidfi/"
                  className="text-white text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <FaFacebookSquare size={24} className="me-2" /> Facebook
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/company/druid-oy/"
                  className="text-white text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <FaLinkedin size={24} className="me-2" /> LinkedIn
                </a>
              </p>
              <p>
                <a
                  href="https://www.instagram.com/druidfi/"
                  className="text-white text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <FaInstagram size={24} className="me-2" /> Instagram
                </a>
              </p>
              <p>
                <a
                  href="https://www.itewiki.fi/druid"
                  className="text-white text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <FaWikipediaW size={24} className="me-2" /> IteWiki
                </a>
              </p>
            </Col>

            {/* Right Column - Navigation Links */}
            <Col md={2} sm={12} className="text-end">
              <h4 className="mb-4" style={{ color: "#E11000" }}>
                Quick Links
              </h4>
              <p>
                <Link to="/about" className="text-white text-decoration-none">
                  About Us
                </Link>
              </p>
              <p>
                <Link to="/services" className="text-white text-decoration-none">
                  Our Services
                </Link>
              </p>
              <p>
                <Link to="/career" className="text-white text-decoration-none">
                  Careers
                </Link>
              </p>
              <p>
                <Link to="/blog" className="text-white text-decoration-none">
                  Blog
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
};

export default Footer;
