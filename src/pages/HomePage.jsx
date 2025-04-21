import { Link } from "react-router-dom";
import styles from "./styles/HomePage.module.css";
import welcomeImage from "../assets/images/cosmic-pic.png";

export default function HomePage() {
  return (
    <section className={styles.hero}>
      <img
        src={welcomeImage}
        alt="Welcome to ContactBook"
        className={styles.bgImage}
      />
      <div className={styles.overlay}>
        <h1 className={styles.title}>Welcome to ContactBook</h1>
        <p className={styles.subtitle}>
          Your digital address book. Add, manage, and access your contacts
          anytime, anywhere.
        </p>
        <Link to="/contacts" className={styles.cta}>
          View My Contacts
        </Link>
      </div>
    </section>
  );
}
