import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./pages/Layout";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./pages/Services";
import ServiceSingle from "./pages/ServiceSingle";
import ServicePage from "./pages/ServiceSingle";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:single" element={<ServiceSingle />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/service-single" element={<ServicePage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
