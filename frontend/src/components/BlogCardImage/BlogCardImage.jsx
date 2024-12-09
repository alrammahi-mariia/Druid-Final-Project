import { Card, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import { URL } from "../../services/apiService";
import styles from "./BlogCardImage.module.css";

const BlogCardImage = ({ title, text, imageUrl, tags }) => {
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
            dangerouslySetInnerHTML={{ __html: text }}
            className={styles.cardText}
          />
        )}

        {/* Render Tags inside the Card */}
        {tags && tags.length > 0 && (
          <div className={styles.tagsContainer}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

BlogCardImage.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default BlogCardImage;
