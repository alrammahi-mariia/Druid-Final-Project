import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./TextSection.module.css";

const TextSection = ({ title, text, link, linkUrl, variant = "light" }) => {
  const sectionClasses = classNames(styles.textSection, styles[variant]);

  return (
    <section className={sectionClasses}>
      <div className={styles.textContent}>
        <h1>{title}</h1>
        <div
          className={styles.textContent}
          dangerouslySetInnerHTML={{ __html: text }}
        />
        {link && linkUrl && (
          <div className={styles.buttonWrapper}>
            <a href={linkUrl}>
              <button className={styles.button}>{link}</button>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

TextSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  linkUrl: PropTypes.string,
  variant: PropTypes.oneOf(["light", "dark", "white"]),
};

export default TextSection;
