import { Card, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import { URL } from "../../services/apiService";
import styles from "./CardImage.module.css";

const CardImage = ({ title, text, imageUrl }) => {
  return (
    <Card className={styles.card}>
      <div className={styles.imageWrapper}>
        {imageUrl && (
          <Image
            src={`${URL}${imageUrl}`}
            alt={title}
            fluid
            className={styles.image}
          />
        )}
      </div>
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styles.cardTitle}>{title}</Card.Title>
        {text && (
          <Card.Text
            as="div"
            className={styles.cardText}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )}
      </Card.Body>
    </Card>
  );
};

CardImage.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
};

export default CardImage;
