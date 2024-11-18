import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "../css/hamburgerMenu.css";

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleClose = () => setMenuOpen(false);

  return (
    <Navbar
      bg="light"
      variant="light"
      expand={false}
      fixed="top"
      className="px-2 px-md-4"
    >
      <Navbar.Brand as={Link} to="/" className="logo me-auto">
        <img
          src="/logo.svg"
          alt="Druid Logo"
          style={{ width: "50px", height: "auto" }}
        />
      </Navbar.Brand>

      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={handleToggle}
        aria-expanded={menuOpen}
      />

      <Navbar.Collapse
        id="basic-navbar-nav"
        className={`justify-content-center full-screen-menu ${
          menuOpen ? "show" : ""
        }`}
        in={menuOpen}
      >
        <button
          className="close-menu-button"
          aria-label="Close menu"
          onClick={handleClose}
        >
          &times;
        </button>

        <Nav>
          <Nav.Link
            as={Link}
            to="/"
            className="text-dark"
            onClick={handleClose}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/about"
            className="text-dark"
            onClick={handleClose}
          >
            About Us
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/services"
            className="text-dark"
            onClick={handleClose}
          >
            Services
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/career"
            className="text-dark"
            onClick={handleClose}
          >
            Career
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/blog"
            className="text-dark"
            onClick={handleClose}
          >
            Blog
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/contact"
            className="text-dark"
            onClick={handleClose}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HamburgerMenu;
