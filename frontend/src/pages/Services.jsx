import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPageContent } from "../store/contentSlice";
import HeroSection from "../components/HeroSection";
import CardComponent from "../components/CardComponent";
import Testimonial from "../components/Testimonial";
import { Col, Row, Container } from "react-bootstrap";

const Services = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.content);
  const serviceData = data.services || {};

  useEffect(() => {
    dispatch(
      fetchPageContent({
        contentType: "services",
        includedFields:
          "field_services_content,field_services_content.field_image,field_services_content.field_feature_image",
      })
    );
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {/* Hero section */}
      {serviceData.heroData && <HeroSection {...heroData} />}
      {/* Card section */}
      <section className="my-5">
        <Container>
          <Row className="services-container justify-content-center">
            {cardData &&
              serviceData.cardData?.map((card) => (
                <Col lg={6} md={4} sm={12} className="mb-4" key={card.id}>
                  <CardComponent {...card} />
                </Col>
              ))}
          </Row>
        </Container>
      </section>
      {/* Testimonial section */}
      {serviceData.testimonialData && <Testimonial {...testimonialData} />}
      {/* Features section */}
    </div>
  );
};

export default Services;
