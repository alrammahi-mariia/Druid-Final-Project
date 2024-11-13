import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import mautic from "./services/mautic_services";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ServiceSingle from "./pages/ServiceSingle";
import ServicePage from "./pages/ServiceSingle";
import Blog from "./pages/Blog";
import Career from "./pages/Career";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Update page title dynamically based on the path
    const pageTitles = {
      "/": "Homepage",
      "/services": "Our Services",
      "/services/:single": "Service Single Page",
      "/about": "About Us",
      "/contact": "Contact",
    };
    const title = pageTitles[location.pathname] || "Default Title";
    document.title = title;

    // Track the page view in Mautic
    mautic.pageView({
      path: location.pathname,
      title: document.title,
    });
  }, [location]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route>
          {/* This is where other routes will go to allow Layout to be visible everywhere */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:single" element={<ServiceSingle />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service-single" element={<ServicePage />} />
        </Route>

        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
