import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import HamburgerMenu from "../components/HamburgerMenu";
import Footer from "../components/Footer";

const Layout = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    // Delay the display of the Footer by 0.5 second
    const timer = setTimeout(() => {
      setShowFooter(true);
    }, 500); // Adjust the delay time as needed (e.g., 500ms = 0.5 second)

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, []);

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

        {/* Footer with delayed display */}
        <Row>{showFooter && <Footer />}</Row>
      </Container>
    </div>
  );
};

export default Layout;
