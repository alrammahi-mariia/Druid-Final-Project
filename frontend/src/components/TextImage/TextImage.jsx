import { URL } from "../../services/apiService";
import PropTypes from "prop-types";
import styles from "./TextImage.module.css";

const TextImage = ({
  title,
  text_long,
  text_short,
  imageUrl,
  imagePosition = "right",
  imageSize = "large",
}) => {
  return (
    <section
      className={`${styles.textImageSection} ${
        styles[`image-${imagePosition}`]
      }`}
    >
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.textColumn}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.shortText}>{text_short}</p>
            <div
              className={styles.longText}
              dangerouslySetInnerHTML={{ __html: text_long }}
            />
          </div>

          <div className={styles.imageColumn}>
            {imageUrl && (
              <img
                src={`${URL}${imageUrl}`}
                alt={title}
                className={styles[`image-${imageSize}`]}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

TextImage.propTypes = {
  title: PropTypes.string.isRequired,
  text_long: PropTypes.string.isRequired,
  text_short: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  imagePosition: PropTypes.oneOf(["right", "left"]),
  imageSize: PropTypes.oneOf(["large", "medium"]),
};

export default TextImage;
