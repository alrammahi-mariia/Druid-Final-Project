import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPageContent } from "../store/contentSlice";
import HeroSection from "../components/HeroSection/HeroSection";
import TextSection from "../components/TextSection/TextSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import { Container, Row, Col } from "react-bootstrap";
import CardComponent from "../components/CardComponent";
import TextImageHome from "../components/TextImageHome";

const Home = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.content);
  const homeData = data.home || {};

  useEffect(() => {
    dispatch(
      fetchPageContent({
        contentType: "home",
        includedFields: [
          "field_home_content",
          "field_home_content.field_image",
          "field_home_content.field_card_image",
          "field_home_content.field_text_image",
        ],
      })
    );
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const { heroData, cardData, textData, cardImageData, textImageData } =
    homeData;

  return (
    <div className="home-page">
      {/* Hero section */}
      {homeData.heroData && (
        <HeroSection {...heroData} variant="white" textSize="large" />
      )}

      {/* Career Text Section for Professionals segment*/}
      {homeData.textData && <TextSection variant="white" {...textData[0]} />}

      {/* Services Section */}
      <ServicesSection
        title="Services"
        subtitle="We offer a wide variety of services"
        cardImageData={cardImageData}
        link="See all"
        linkUrl="/services"
      />

      {/* Customers Sections (Pass only title and all imageUrls) */}
      {homeData.textImageData?.length ? (
        <section className="partner-section">
          <TextImageHome
            title={homeData.textImageData[0]?.title}
            imageUrls={homeData.textImageData.map((item) => item.imageUrl)}
          />
        </section>
      ) : (
        <section className="partner-section">
          <p>No partner data available</p>
        </section>
      )}

      {/* Services FeaturesSection */}
      <section className="card-section my-5">
        <Container fluid>
          <Row className="services-container justify-content-center">
            {homeData.cardData &&
              homeData.cardData.map((card) => (
                <Col lg={6} md={4} sm={12} className="mb-4" key={card.id}>
                  <CardComponent {...card} />
                </Col>
              ))}
          </Row>
        </Container>
      </section>

      {/* Text Section*/}
      {homeData.textData && (
        <section className="text-section text-section-2">
          <TextSection {...textData[1]} />
        </section>
      )}
    </div>
  );
};

export default Home;
