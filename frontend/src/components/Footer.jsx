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

const Footer = () => {
  return (
    <footer
      className="text-white py-5 position-relative"
      style={{
        backgroundColor: "#000000", // Dark background color
        width: "100%",
        minHeight: "380px",
      }}
    >
      <Container fluid>
        <Container className="px-3 px-md-5">
          {/* Vertical Line Left */}
          <div
            className="d-none d-md-block" // Hide on small screens
            style={{
              position: "absolute",
              top: "10%",
              bottom: "10%",
              left: "33%",
              width: "1px",
              backgroundColor: "white",
              animation: "pulse 3s infinite", // Optional animation
            }}
          ></div>

          {/* Vertical Line Right */}
          <div
            className="d-none d-md-block" // Hide on small screens
            style={{
              position: "absolute",
              top: "10%",
              bottom: "10%",
              left: "66%",
              width: "1px",
              backgroundColor: "white",
              animation: "pulse 3s infinite", // Optional animation
            }}
          ></div>

          <Row className="d-flex justify-content-between align-items-start">
            {/* Left Column */}
            <Col
              md={3}
              sm={12}
              className="mb-4"
              style={{ paddingRight: "50px" }} // Add some padding to avoid overlap with vertical lines
            >
              <h4 className="mb-4" style={{ color: "white", fontSize: "2rem" }}>
                Contact Us
              </h4>
              <p style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <FaMapMarkerAlt /> Pasilankatu 2, 00240 Helsinki, Finland
              </p>
              <p style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <FaEnvelope /> info@druid.fi
              </p>
              <p style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <FaPhone /> +358 20 187 6602
              </p>
            </Col>

            {/* Middle Column */}
            <Col
              md={3}
              sm={12}
              className="text-center text-md-start mb-4"
              style={{ paddingLeft: "50px", paddingRight: "50px" }} // Add padding on both sides to avoid overlap with vertical lines
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <h4
                  className="mb-4"
                  style={{
                    color: "white",
                    fontSize: "2rem",
                    marginBottom: "20px", // Adjust margin to align properly with links
                  }}
                >
                  Follow Us
                </h4>

                {/* Social media links */}
                <p>
                  <a
                    href="https://www.itewiki.fi/druid"
                    className="text-white text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start", // Align text and icon
                      gap: "10px", // Add spacing between icon and text
                    }}
                  >
                    <FaFacebookSquare size={24} /> Facebook
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.itewiki.fi/druid"
                    className="text-white text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start", // Align text and icon
                      gap: "10px", // Add spacing between icon and text
                    }}
                  >
                    <FaLinkedin size={24} /> LinkedIn
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.itewiki.fi/druid"
                    className="text-white text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start", // Align text and icon
                      gap: "10px", // Add spacing between icon and text
                    }}
                  >
                    <FaInstagram size={24} /> Instagram
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.itewiki.fi/druid"
                    className="text-white text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start", // Align text and icon
                      gap: "10px", // Add spacing between icon and text
                    }}
                  >
                    <FaWikipediaW size={24} /> IteWiki
                  </a>
                </p>
              </div>
            </Col>

            {/* Right Column */}
            <Col
              md={2}
              sm={12}
              className="mb-4"
              style={{ paddingLeft: "50px" }} // Add padding to avoid overlap with vertical lines
            >
              <h4
                className="mb-4"
                style={{
                  color: "white",
                  fontSize: "2rem",
                  whiteSpace: "nowrap",
                }}
              >
                Quick Links
              </h4>
              <p>
                <Link to="/about" className="text-white text-decoration-none">
                  About Us
                </Link>
              </p>
              <p>
                <Link
                  to="/services"
                  className="text-white text-decoration-none"
                >
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
