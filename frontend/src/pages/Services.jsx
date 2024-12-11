import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPageContent } from "../store/contentSlice";
import HeroSection from "../components/HeroSection/HeroSection";
import CardImage from "../components/CardImage/CardImage";
import Testimonial from "../components/Testimonial/Testimonial";
import { Row, Container, Col } from "react-bootstrap";
import Feature from "../components/Feature";
import { Link } from "react-router-dom";

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

  const groupContentByParentId = () => {
    const grouped = {};

    // Function to group paragraphs by parentId
    const initializeGroup = (parentId) => {
      if (!grouped[parentId]) {
        grouped[parentId] = {
          hero: null,
          card: null,
          textData: [],
          textImageData: [],
          cardImageData: [],
        };
      }
    };

    // Group heroData
    if (serviceSingleData?.heroData) {
      serviceSingleData.heroData.forEach((hero) => {
        if (hero.parentId) {
          initializeGroup(hero.parentId);
          grouped[hero.parentId].hero = {
            title: hero.title,
            description: hero.description,
            parentId: hero.parentId,
            textSize: "small",
            variant: "light",
          };
        }
      });
    }

    // Group cardImageData
    if (serviceSingleData?.cardImageData) {
      serviceSingleData.cardImageData.forEach((card) => {
        initializeGroup(card.parentId);
        grouped[card.parentId].card = card;
        grouped[card.parentId].cardImageData.push(card);
      });
    }

    // Group textData
    if (serviceSingleData?.textData) {
      serviceSingleData.textData.forEach((text) => {
        if (text.parentId) {
          initializeGroup(text.parentId);
          grouped[text.parentId].textData.push(text);
        }
      });
    }

    // Group textImageData
    if (serviceSingleData?.textImageData) {
      serviceSingleData.textImageData.forEach((textImage) => {
        if (textImage.parentId) {
          initializeGroup(textImage.parentId);
          grouped[textImage.parentId].textImageData.push(textImage);
        }
      });
    }

    return grouped;
  };

  const groupedContent = groupContentByParentId();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const { heroData, testimonialData, textData, featureData } = serviceData;

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
            {Object.entries(groupedContent).map(([parentId, content]) => (
              <Col lg={6} md={8} sm={12} className="mb-4" key={parentId}>
                <Link
                  to={`/service/${parentId}`}
                  state={{
                    serviceData: content,
                    heroData: content.hero,
                    textData: content.textData,
                    textImageData: content.textImageData,
                    cardImageData: content.cardImageData,
                  }}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <CardImage
                    buttonText={"Read More"}
                    {...content.card}
                    heroTitle={content.hero?.title}
                    heroDescription={content.hero?.description}
                  />
                </Link>
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
