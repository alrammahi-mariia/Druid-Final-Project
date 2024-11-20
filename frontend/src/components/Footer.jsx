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

const Footer=()=> {
  return (
    <footer className="bg-light text-dark py-5" style={{ width: "100%" }}>
      <Container fluid>
        <Container className="px-2 px-md-1">
          <Row
            className="d-flex justify-content-between align-items-start"
            style={{ gap: "30px" }}
          >
            {/* Left Column */}
            <Col md={3} sm={12} className="text-start">
              <h4>Call or send us a message</h4>
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
              <h4>Social</h4>
              <p>
                <a
                  href="https://www.facebook.com/druidfi/"
                  className="text-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookSquare size={24} className="me-2" /> Facebook
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/company/druid-oy/"
                  className="text-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={24} className="me-2" /> LinkedIn
                </a>
              </p>
              <p>
                <a
                  href="https://www.instagram.com/druidfi/"
                  className="text-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={24} className="me-2" /> Instagram
                </a>
              </p>
              <p>
                <a
                  href="https://x.com/druidfi"
                  className="text-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineClose size={24} className="me-2" /> X
                </a>
              </p>
              <p>
                <a
                  href="https://www.itewiki.fi/druid"
                  className="text-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWikipediaW size={24} className="me-2" /> IteWiki
                </a>
              </p>
            </Col>

            {/* Right Column - Navigation Links */}
            <Col md={2} sm={12} className="text-end">
              <h4>Links</h4>
              <p>
                <Link to="/about" className="text-dark">
                  About Us
                </Link>
              </p>
              <p>
                <Link to="/services" className="text-dark">
                  Our Services
                </Link>
              </p>
              <p>
                <Link to="/career" className="text-dark">
                  Working with us
                </Link>
              </p>
              <p>
                <Link to="/blog" className="text-dark">
                  Blog
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
}

export default Footer;
