import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchPageContent } from "../store/contentSlice";
import ContactText from "../components/ContactText";
import ContactCardImageBg from "../components/ContactCardImageBg";
import MauticEmailForm from "../components/MauticEmailForm";
import HeroSection from "../components/HeroSection/HeroSection";

const Contact = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.content);
  const contactData = data?.contact || [];

  useEffect(() => {
    dispatch(
      fetchPageContent({
        contentType: "contact",
        includedFields: [
          "field_contact_us",
          "field_contact_us.field_card_image",
        ],
      })
    );
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const { heroData, textData } = contactData || [];

  return (
    <div style={{ overflowX: "hidden" }}>
      {contactData.heroData && (
        <HeroSection {...heroData[0]} variant="light" textSize="small" />
      )}
      <Container fluid className="my-5 px-5">
        {" "}
        {/* Remove padding on the sides */}
        <Row className="mb-5">
          {/* Left Column: Text Section */}
          <Col md={6}>
            {Array.isArray(textData) && textData.length > 1 ? (
              // Render all except the last element
              textData
                .slice(0, textData.length - 1)
                .map((item, index) => (
                  <ContactText
                    key={index}
                    title={item.title}
                    text={item.text}
                    textSize="small"
                  />
                ))
            ) : (
              <ContactText title="Contact Us" text="Please reach out to us." />
            )}
          </Col>

          {/* Right Column: Contact Form */}
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center mb-5"
          >
            <div
              style={{
                maxWidth: "750px",
                height: "auto",
                background: "#fafafa",
                width: "100%",
                padding: "20px",
                borderRadius: "8px",
                transform: "translateX(0)",
              }}
            >
              <h3 className="text-center mt-2">Send us a message</h3>
              <MauticEmailForm />
            </div>
          </Col>
        </Row>
        {/* Our Team / Cards Section */}
        <Row className="g-0" style={{ marginTop: "50px" }}>
          {/* Render the last item of ContactText component before the card images */}
          {Array.isArray(textData) && textData.length > 0 && (
            <Col xs={12} className="mb-4">
              <ContactText
                title={textData[textData.length - 1].title}
                text={textData[textData.length - 1].text}
              />
            </Col>
          )}

          {/* Rendering the card images */}
          {contactData?.cardImageData &&
            contactData.cardImageData.length > 0 &&
            contactData.cardImageData.map((item, index) => (
              <Col
                key={index}
                xs={12}
                sm={6}
                md={3}
                className="d-flex mt-0 justify-content-center"
              >
                <ContactCardImageBg
                  title={item.title}
                  text={item.text}
                  imageUrl={item.imageUrl}
                />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
