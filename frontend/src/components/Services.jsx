// ServicesPage.js
import React, { useEffect, useState } from "react";
import { fetchServicesData, fetchServiceCards } from "../services/api_services";
import ServiceCard from "./ServiceCard";

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
      {/* Hero Section */}
      <img src={`${API_URL}${imageData[0].attributes.uri.url}`} />
      <h1>{content.attributes.field_hero_title.value}</h1>
      <div
        className="lead text-center"
        dangerouslySetInnerHTML={{
          __html: content.attributes.field_hero_text.value,
        }}
      />

      <section>
        <h2>Our Services</h2>
        <div className="services-container">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.attributes.field_card_title}
              text={service.attributes.body.value}
              image={service.attributes.field_image}
              link={service.attributes.link}
            />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <div
        className="lead text-center"
        dangerouslySetInnerHTML={{
          __html: content.attributes.field_text.value,
        }}
      />
      <p>{content.attributes.field_title}</p>

      {/* Features Section */}
      <img src={`${API_URL}${imageData[1].attributes.uri.url}`} />
      <p></p>
      <div
        className="lead text-center"
        dangerouslySetInnerHTML={{
          __html: content.attributes.field_feature.value,
        }}
      />
      <img src={`${API_URL}${imageData[2].attributes.uri.url}`} />
      <div
        className="lead text-center"
        dangerouslySetInnerHTML={{
          __html: content.attributes.field_feature_2.value,
        }}
      />
      <img src={`${API_URL}${imageData[3].attributes.uri.url}`} />
      <div
        className="lead text-center"
        dangerouslySetInnerHTML={{
          __html: content.attributes.field_feature_3.value,
        }}
      />
    </div>
  );
};

export default Services;
