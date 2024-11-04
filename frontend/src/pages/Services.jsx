import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import CardComponent from "../components/CardComponent";
import { URL } from "../services/api_services";
import { Col, Row, Container } from "react-bootstrap";
import Testimonial from "../components/Testimonial";

const Services = () => {
  const [heroData, setHeroData] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [testimonialData, setTestimonialData] = useState([]);
  const [featureData, setFeatureData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${URL}/jsonapi/node/services?include=field_services_content,field_services_content.field_image,field_services_content.field_feature_image`
        );
        const data = await response.json();
        console.log(data);

        // Filter hero data
        const hero = data.included.find(
          (item) => item.type === "paragraph--hero_paragraph"
        );
        const heroImage = data.included.find(
          (item) =>
            item.type === "file--file" &&
            item.id === hero.relationships.field_image.data.id
        );

        setHeroData({
          title: hero.attributes.field_title,
          description: hero.attributes.field_description.value,
          imageUrl: heroImage.attributes.uri.url,
        });

        // Filter cards data
        const cards = data.included
          .filter((card) => card.type === "paragraph--card")
          .map((card) => {
            return {
              id: card.id,
              title: card.attributes.field_card_title,
              text: card.attributes.field_card_description,
            };
          });

        setCardData(cards);

        // Filter testimonial data
        const testimonial = data.included.find(
          (item) => item.type === "paragraph--testimonial"
        );
        setTestimonialData({
          text: testimonial.attributes.field_testimonial,
          author: testimonial.attributes.field_author,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Hero section */}
      {heroData && <HeroSection {...heroData} />}
      {/* Card section */}
      <section className="my-5">
        <Container>
          <Row className="services-container justify-content-center">
            {cardData &&
              cardData.map((card) => (
                <Col lg={6} md={4} sm={12} className="mb-4" key={card.id}>
                  <CardComponent {...card} />
                </Col>
              ))}
          </Row>
        </Container>
      </section>
      {/* Testimonial section */}
      {testimonialData && <Testimonial {...testimonialData} />}
      {/* Features section */}
    </div>
  );
};

export default Services;
