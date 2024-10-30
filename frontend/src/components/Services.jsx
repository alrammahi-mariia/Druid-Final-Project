// ServicesPage.js
import React, { useEffect, useState } from "react";
import { fetchServicesData, fetchServiceCards } from "../services/api_services";
import ServiceCard from "./ServiceCard";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import "../Services.css"; // Import custom CSS for additional styling

const Services = () => {
  const [content, setContent] = useState(null);
  const [imageData, setImageData] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = "https://localhost:62786";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const serviceData = await fetchServicesData();
        const serviceCards = await fetchServiceCards();

        console.log("Service Data:", serviceData);
        console.log("Service Cards:", serviceCards);

        setImageData(serviceData.included);
        setContent(serviceData.data[0]);
        setServices(serviceCards.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;

  return (
    <div>
      <Container fluid className="p-0">
        {/* Hero Section */}
        <section className="hero-section position-relative">
          <Image
            src={`${API_URL}${imageData[0].attributes.uri.url}`}
            fluid
            className="w-100 hero-image"
          />
          <div className="hero-overlay d-flex flex-column justify-content-center align-items-center text-center text-white">
            <h1>{content.attributes.field_hero_title.value}</h1>
            <div
              className="hero-text"
              dangerouslySetInnerHTML={{
                __html: content.attributes.field_hero_text.value,
              }}
            />
          </div>
        </section>

        {/* Services Section */}
        <section className="my-5">
          <h2 className="text-center mb-4">Our Services</h2>
          <Row className="services-container justify-content-center">
            {services.map((service) => (
              <Col md={4} sm={6} className="mb-4" key={service.id}>
                <ServiceCard
                  title={service.attributes.field_card_title}
                  text={service.attributes.body.value}
                  image={service.attributes.field_image}
                  link={service.attributes.link}
                />
              </Col>
            ))}
          </Row>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section text-center my-5">
          <h2 className="mb-4">Testimonials</h2>
          <blockquote className="blockquote">
            <div
              className="lead"
              dangerouslySetInnerHTML={{
                __html: content.attributes.field_text.value,
              }}
            />
            <footer className="blockquote-footer">
              {content.attributes.field_title}
            </footer>
          </blockquote>
        </section>

        {/* Features Section */}
        <section className="features-section my-5">
          <h2 className="text-center mb-4">
            {content.attributes.field_feature_title}
          </h2>

          <Row className="align-items-center mb-4">
            <Col md={6}>
              <Image
                src={`${API_URL}${imageData[1].attributes.uri.url}`}
                fluid
                className="feature-image"
              />
            </Col>
            <Col md={6}>
              <div
                className="feature-text"
                dangerouslySetInnerHTML={{
                  __html: content.attributes.field_feature.value,
                }}
              />
            </Col>
          </Row>
          <Row className="align-items-center mb-4">
            <Col md={6}>
              <Image
                src={`${API_URL}${imageData[2].attributes.uri.url}`}
                fluid
                className="feature-image"
              />
            </Col>
            <Col md={6}>
              <div
                className="feature-text"
                dangerouslySetInnerHTML={{
                  __html: content.attributes.field_feature_2.value,
                }}
              />
            </Col>
          </Row>
          <Row className="align-items-center mb-4">
            <Col md={6}>
              <Image
                src={`${API_URL}${imageData[3].attributes.uri.url}`}
                fluid
                className="feature-image"
              />
            </Col>
            <Col md={6}>
              <div
                className="feature-text"
                dangerouslySetInnerHTML={{
                  __html: content.attributes.field_feature_3.value,
                }}
              />
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default Services;
