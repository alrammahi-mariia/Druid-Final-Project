import { URL } from "../../services/apiService";
import { Col, Container, Image, Row } from "react-bootstrap";
import styles from "./CustomerSection.module.css";

const CustomerSection = ({ title, imageUrls }) => {
  return (
    <div className={styles.customerSection}>
      <Container fluid className={`${styles.container}`}>
        <Row>
          <Col>
            <h1 className={styles.title}>{title}</h1>
          </Col>
        </Row>
        <Row>
          {imageUrls.slice(0, 12).map((imageUrl, index) => (
            <Col md={3} key={index} className={`mb-4 ${styles.imageColumn}`}>
              <Image
                src={`${URL}${imageUrl}`}
                alt={`image-${index}`}
                className={styles.customerImage}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CustomerSection;
