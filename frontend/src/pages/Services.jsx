import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPageContent } from "../store/contentSlice";
import HeroSection from "../components/HeroSection/HeroSection";
import CardImage from "../components/CardImage/CardImage";
import Testimonial from "../components/Testimonial/Testimonial";
import { Row, Container, Col } from "react-bootstrap";
import Feature from "../components/Feature";

const Services = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.content);

  useEffect(() => {
    dispatch(
      fetchPageContent({
        contentType: "services",
        includedFields: [
          "field_services_content",
          "field_services_content.field_feature_image",
          "field_services_content.field_card_image",
        ],
      })
    );
    dispatch(
      fetchPageContent({
        contentType: "servicesingle",
        includedFields: [
          "field_content",
          "field_content.field_card_image",
          "field_content.field_text_image",
        ],
      })
    );
  }, [dispatch]);

  const serviceData = data.services || {};
  const serviceSingleData = data.servicesingle || {};

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log("services data:", serviceData);
  console.log("serviceSingle data:", serviceSingleData);

  const { heroData, testimonialData, textData, featureData } = serviceData;
  const { cardImageData } = serviceSingleData;

  return (
    <div>
      {/* Hero section */}
      {serviceData.heroData && (
        <HeroSection {...heroData[0]} textSize="small" variant="light" />
      )}
      {/* Card section */}
      <section className="my-5">
        <Container fluid style={{ padding: "80px 160px 120px 160px" }}>
          <Row className="justify-content-center">
            {serviceSingleData.cardImageData &&
              serviceSingleData.cardImageData.map((card) => (
                <Col lg={6} md={8} sm={12} className="mb-4" key={card.id}>
                  <CardImage buttonText={"Read More"} {...card} />
                </Col>
              ))}
          </Row>
        </Container>
      </section>
      {/* Testimonial section */}
      {serviceData.testimonialData && <Testimonial {...testimonialData} />}
      {/* Features section */}
      <section className="my-5">
        <Container className="d-flex flex-column justify-content-center align-items-center">
          <Row>
            <h2 className="text-center my-5">
              Druid is al­so your trus­ted part­ner in the fol­lo­wing web
              so­lu­tions
            </h2>
          </Row>
          <Row>
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
