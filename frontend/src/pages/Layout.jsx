import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar, Nav, Container, Row } from "react-bootstrap";

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Container fluid>
        <Row>
          <Navbar
            bg="light"
            variant="light"
            expand={false}
            fixed="top"
            className="px-2 px-md-4"
          >
            {" "}
            {/* Setting expand={false} */}
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
                <Nav.Link as={Link} to="/" className="text-dark">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about" className="text-dark">
                  About Us
                </Nav.Link>
                <Nav.Link as={Link} to="/services" className="text-dark">
                  Services
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" className="text-dark">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
        {/* Content */}
        <Row>
          <Outlet />
        </Row>
        {/* Footer */}
        <Row>
          <div className="custom-margin">
            <footer className="text-center bg-light text-dark py-3 fixed-bottom">
              <p>
                &copy; {new Date().getFullYear()} Druid. All rights reserved.
              </p>
            </footer>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Layout;
