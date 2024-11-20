import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchPageContent } from "../store/contentSlice";
import ContactText from "../components/ContactText";
import MauticForm from "../components/MauticForm";

const Contact = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.content);
  const contactData = data?.contact || [];

  // Fetch the page content data when the component mounts
  useEffect(() => {
    dispatch(
      fetchPageContent({
        contentType: "contact",
        includedFields: ["field_contact_us"],
      })
    );
  }, [dispatch]);

  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const textData = contactData?.textData || [];

  return (
    <Container fluid className="my-5">
      <Row>
        {/* Left Column: Text Section */}
        <Col md={6}>
          {Array.isArray(textData) && textData.length > 0 ? (
            textData.map((item, index) => (
              <div key={index}>
                <ContactText title={item.title} text={item.text} />
              </div>
            ))
          ) : (
            <ContactText title="Contact Us" text="Please reach out to us." />
          )}
        </Col>

        {/* Right Column: Contact Form */}
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center px-4"
        >
          <Card
            className="p-4"
            style={{
              maxWidth: "600px",
              border: "1px solid #ddd",
              background: "rgba(255, 255, 255, 0.9)",
              width: "100%",
            }}
          >
            <Card.Body>
              <Card.Title style={{ color: "black", fontSize: "2rem" }}>
                {/* Contact */}
              </Card.Title>
              <div style={{ color: "black", fontSize: "1.2rem" }}>
                <MauticForm />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
