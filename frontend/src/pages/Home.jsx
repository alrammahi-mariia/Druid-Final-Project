import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPageContent } from "../store/contentSlice";
import HeroSection from "../components/HeroSection";
import CardComponent from "../components/CardComponent";
import { Row, Container, Col } from "react-bootstrap";
import TextSection from "../components/TextSection";
import CardImageBg from "../components/CardImageBg";

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
        ],
      })
    );
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log("Data from Redux", homeData);

  // Destructure the data from homeData
  const { heroData, cardData, textData, cardImageData } = homeData;

  return (
    <div>
      {/* Hero section */}
      {homeData.heroData && <HeroSection {...heroData} />}
      {/* Text section */}
      {homeData.textData && <TextSection {...textData[0]} />}
      {/* Cards section */}
      <section className="my-5">
        <Container>
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
      {homeData.textData && <TextSection {...textData[1]} />}
      <section className="my-5">
        <Container>
          <Row className="services-container justify-content-center">
            {homeData.cardImageData &&
              homeData.cardImageData.map((card) => (
                <Col lg={6} md={4} sm={12} className="mb-4" key={card.id}>
                  <CardImageBg {...card} />
                </Col>
              ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
