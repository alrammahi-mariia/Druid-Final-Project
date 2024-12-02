import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPageContent } from "../store/contentSlice";
import HeroSection from "../components/HeroSection/HeroSection";
import CardComponent from "../components/CardComponent";
import { Row, Container, Col } from "react-bootstrap";
import TextSection from "../components/TextSection";
import CardImageBg from "../components/CardImageBg";
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
  console.log("This is textImageData", homeData.textImageData);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const { heroData, cardData, textData, cardImageData, textImageData } =
    homeData;

  return (
    <div className="home-page">
      {/* Hero section */}
      {homeData.heroData && (
        <section>
          <HeroSection {...heroData} variant="white" textSize="large" />
        </section>
      )}
      {/* First Text Section */}
      {homeData.textData && (
        <section className="text-section py-1">
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
      {/* {homeData.textData && (
        <section>
          <TextSection
            {...textData[3]}
            bgColor="bg-dark"
            textColor="text-white"
          />
        </section>
      )} */}
      {/* TextImageLeft Section: Pass only title and all imageUrls */}
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
      {/* Horizontal Line just to define main content and footer */}
      <hr style={{ border: "1px solid white", margin: "5px 0" }} />
    </div>
  );
};

export default Home;
