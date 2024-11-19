import React from "react";
import { Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import HamburgerMenu from "../components/HamburgerMenu";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Container fluid>
        
        {/* Hamburger Menu Component */}
        <Row>
          <HamburgerMenu />
        </Row>

        {/* Content */}
        <Row>
          <Outlet />
        </Row>

        {/* Footer */}
        <Row>
          <Footer />
        </Row>
      </Container>
    </div>
  );
};

export default Layout;
