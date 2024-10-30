// ServicesPage.js
import React, { useEffect, useState } from "react";
import { fetchHeroSectionData, fetchServiceCards } from "./api"; // Adjust path as needed
import HeroSection from "./HeroSection";
import ServiceCard from "./ServiceCard";

const ServicesPage = () => {
  const [heroSection, setHeroSection] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const heroData = await fetchHeroSectionData();
        const serviceCards = await fetchServiceCards();

        setHeroSection(heroData?.data?.attributes);
        setServices(serviceCards?.data);
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
      {/* Render Hero Section */}
      {heroSection && (
        <HeroSection
          title={heroSection.field_hero_title}
          subtitle={heroSection.field_hero_subtitle}
          text={heroSection.field_hero_text.processed}
        />
      )}

      {/* Render Services Section */}
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
