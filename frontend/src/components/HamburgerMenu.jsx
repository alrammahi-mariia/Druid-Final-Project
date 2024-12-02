import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "../style/HamburgerMenu.css";

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
      <Navbar.Brand
        as={Link}
        to="/"
        className="logo me-auto d-flex align-items-center"
        style={{ display: "flex", alignItems: "center" }}
      >
        <img
          src="/logo.svg"
          alt="Druid Logo"
          style={{
            width: "50px",
            height: "50px",
            display: "block",
            marginBottom: "10px",
          }}
        />
        <span
          style={{
            marginLeft: "0px",
            fontSize: "1.5rem",
            fontWeight: "bold",
            lineHeight: "1.5",
            // color: "#E11000",
          }}
        >
          Druid
        </span>
      </Navbar.Brand>

      {/* Render the Hamburger Toggle Button only when menu is closed */}
      {!menuOpen && (
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle}
          aria-expanded={menuOpen}
          className="navbar-toggler"
        />
      )}

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
            className="text-light"
            onClick={handleClose}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/about"
            className="text-light"
            onClick={handleClose}
          >
            About Us
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/services"
            className="text-light"
            onClick={handleClose}
          >
            Services
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/career"
            className="text-light"
            onClick={handleClose}
          >
            Career
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/blog"
            className="text-light"
            onClick={handleClose}
          >
            Blog
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/contact"
            className="text-light"
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
