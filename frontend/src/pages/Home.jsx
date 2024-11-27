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

  const { heroData, cardData, textData, cardImageData } = homeData;

  return (
    <div>
      {/* Hero section */}
      {homeData.heroData && (
        <section>
          <HeroSection {...heroData} />
        </section>
      )}

      {/* First Text Section */}
      {homeData.textData && (
        <section className="text-section text-section-1 bg-light py-1">
          <Container fluid>
            <Row className="justify-content-center">
              <Col md={1} lg={12} className="text-center ">
                <TextSection {...textData[0]} />
              </Col>
            </Row>
          </Container>
        </section>
      )}

      {/* Cards Section */}
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

      {/* Second Text Section */}
      {homeData.textData && (
        <section className="text-section text-section-2">
          <TextSection {...textData[1]} />
        </section>
      )}

      {/* Cards with Images Section */}
      <section className="card-image-section my-5">
        <Container fluid>
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

      {homeData.textData && (
        <section>
          <TextSection
            {...textData[3]}
            bgColor="bg-dark"
            textColor="text-white"
          />
        </section>
      )}
    </div>
  );
};

export default Home;
