import React from "react";
import { Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import HamburgerMenu from "../components/HamburgerMenu";

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Container fluid>
        <Row>
          {/* Hamburger Menu Component */}
          <HamburgerMenu />
        </Row>

        {/* Content */}
        <Row>
          <Outlet />
        </Row>
      </Container>
    </div>
  );
};

export default Layout;
