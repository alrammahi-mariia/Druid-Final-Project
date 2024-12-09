import styles from "./Testimonial.module.css";

const Testimonial = ({ text, author }) => {
  return (
    <div className={styles.testimonialSection}>
      <blockquote className={styles.blockquote}>
        <h2>{text}</h2>
        <footer className={styles.author}>{author}</footer>
      </blockquote>
    </div>
  );
};

export default Testimonial;
