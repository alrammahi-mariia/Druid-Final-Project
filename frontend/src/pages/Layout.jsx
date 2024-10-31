import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar bg="dark" variant="dark" expand={false} fixed="top">
        {" "}
        {/* Setting expand={false} */}
        <Container>
          {/* Left-aligned Logo */}
          <Navbar.Brand as={Link} to="/" className="logo me-auto">
            <img
              src="/logo.svg"
              alt="Druid Logo"
              style={{ width: "50px", height: "auto" }}
            />
          </Navbar.Brand>

          {/* Hamburger Menu Toggle */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Collapsible Navbar Menu */}
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link as={Link} to="/" className="text-light">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-light">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/services" className="text-light">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-light">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="my-5" fluid>
        {/* Add margin to avoid overlapping with the navbar */}
        <main>{children}</main>
      </Container>
      {/* Footer */}
      <div className="custom-margin">
        <footer className="text-center bg-dark text-light py-3 fixed-bottom">
          <p>&copy; {new Date().getFullYear()} Druid. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
