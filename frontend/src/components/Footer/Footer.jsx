import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGlobe,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h2>Contact Us</h2>
            <p>
              <span className={styles.iconWrapper}>
                <FaMapMarkerAlt /> Pasilankatu 2,
              </span>
            </p>
            <p style={{ marginLeft: "1.5em" }}>00240 Helsinki,</p>
            <p style={{ marginLeft: "1.5em" }}>Finland</p>
            <a href="mailto:info@druid.fi">
              <span className={styles.iconWrapper}>
                <FaEnvelope /> info@druid.fi
              </span>
            </a>
            <a href="tel:+358201876602">
              <span className={styles.iconWrapper}>
                <FaPhone /> +358 20 187 6602
              </span>
            </a>
          </div>

          <div className={styles.leftLine} />

          <div className={styles.column}>
            <h2>Follow Us</h2>
            <a
              href="https://www.facebook.com/druidagency"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.iconWrapper}>
                <FaFacebookF /> Facebook
              </span>
            </a>
            <a
              href="https://www.linkedin.com/company/druid-oy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.iconWrapper}>
                <FaLinkedinIn /> LinkedIn
              </span>
            </a>
            <a
              href="https://www.instagram.com/druidagency/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.iconWrapper}>
                <FaInstagram /> Instagram
              </span>
            </a>
            <a
              href="https://www.itewiki.fi/druid"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.iconWrapper}>
                <FaGlobe /> IteWiki
              </span>
            </a>
          </div>

          <div className={styles.rightLine} />

          <div className={styles.column}>
            <h2>Quick Links</h2>
            <Link href="/about">About Us</Link>
            <Link href="/services">Our Services</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
