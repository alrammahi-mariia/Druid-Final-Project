import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import mautic from "./services/mautic_services";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ServiceSingle from "./pages/ServiceSingle";
import ServicePage from "./pages/ServiceSingle";
import Career from "./pages/Career";
import BlogPage from "./pages/BlogPage";
import "./App.css";
import segmentService from "./services/segmentService";

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false); // Track loading state

  useEffect(() => {
    // When location changes (i.e., user navigates to a new page)
    setLoading(true); // Start loading screen

    // Set a delay for page transition
    const timer = setTimeout(() => {
      setLoading(false); // After the delay, hide loading screen
    }, 100); // Adjust the delay time by 0.1 second

    // Update page title dynamically based on the path
    const pageTitles = {
      "/": "Homepage",
      "/services": "Our Services",
      "/services/:single": "Service Single Page",
      "/about": "About Us",
      "/contact": "Contact",
      "/blog": "Blog",
      "/career": "Career",
    };
    const title = pageTitles[location.pathname] || "Default Title";
    document.title = title;

    // Track the page view in Mautic
    mautic.pageView({
      path: location.pathname,
      title: document.title,
    });

    // Check/update segments based on service conditions
    segmentService.updateSegments();

    // Clean up the timer when component unmounts
    return () => clearTimeout(timer);
  }, [location]);

  if (loading) {
    // While loading, show a simple loading screen
    return <div className="loading-screen">{/* <h1>Loading...</h1> */}</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route>
          {/* This is where other routes will go to allow Layout to be visible everywhere */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:single" element={<ServiceSingle />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogPage />} />
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
