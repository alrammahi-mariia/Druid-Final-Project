// ServicesPage.js
import React, { useEffect, useState } from "react";
import { fetchServicesData, fetchServiceCards } from "../services/api_services";
// import ServiceCard from "./ServiceCard";

const Services = () => {
  const [content, setContent] = useState(null);
  const [services, setServices] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const serviceData = await fetchServicesData();

        const serviceCards = await fetchServiceCards();

        setContent(serviceData);
        setServices(serviceCards);
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
      <p>Service page</p>
    </div>
  );
};

export default Services;
