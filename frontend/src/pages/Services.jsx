import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPageContent } from "../store/contentSlice";
import HeroSection from "../components/HeroSection/HeroSection";
import CardComponent from "../components/CardComponent";
import Testimonial from "../components/Testimonial";
import { Row, Container, Col } from "react-bootstrap";
import TextSection from "../components/TextSection";
import Feature from "../components/Feature";

const Services = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.content);
  const serviceData = data.services || {};

  useEffect(() => {
    dispatch(
      fetchPageContent({
        contentType: "services",
        includedFields: [
          "field_services_content",
          "field_services_content.field_feature_image",
          "field_services_content.field_image",
        ],
      })
    );
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log("Data from Redux", serviceData);

  const { heroData, cardData, testimonialData, textData, featureData } =
    serviceData;

  return (
    <div>
      {/* Hero section */}
      {serviceData.heroData && <HeroSection {...heroData} />}
      {/* Card section */}
      <section className="my-5">
        <Container>
          <Row className="services-container justify-content-center">
            {serviceData.cardData &&
              serviceData.cardData.map((card) => (
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
      {serviceData.textData && <TextSection {...textData[0]} />}
      <section className="my-5">
        <Container>
          <Row className="services-container justify-content-center">
            {serviceData.featureData &&
              serviceData.featureData.map((feature) => (
                <Feature {...feature} key={feature.id} />
              ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Services;
