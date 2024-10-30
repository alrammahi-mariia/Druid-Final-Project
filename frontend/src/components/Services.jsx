// ServicesPage.js
import React, { useEffect, useState } from "react";
import { fetchServicesData, fetchServiceCards } from "../services/api_services";
import ServiceCard from "./ServiceCard";

const ServicesPage = () => {
  const [content, setContent] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const serviceData = await fetchServicesData();
        const serviceCards = await fetchServiceCards();

        setContent(serviceData?.data[0]);
        setServices(serviceCards?.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(content);
  console.log(services);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;

  return (
    <div>
      {/* Hero Section */}
      <section>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p dangerouslySetInnerHTML={{ __html: text }} />
      </section>

      {/* Services Section */}
      <section>
        <h2>Our Services</h2>
        <div className="services-container">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.attributes.title}
              subtitle={service.attributes.subtitle}
              image={service.attributes.field_image}
              link={service.attributes.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
