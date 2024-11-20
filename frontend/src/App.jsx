import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ServiceSingle from "./pages/ServiceSingle";
import ServicePage from "./pages/ServiceSingle";
import BlogPage from "./pages/BlogPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route>
            {/* This is where other routes will go to allow Layout to be visible everywhere */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:single" element={<ServiceSingle />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<BlogPage />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="/service-single" element={<ServicePage />} />
          </Route>

          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
