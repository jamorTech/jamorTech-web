import Image from "next/image";
import styles from "./page.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"; // Using react-icons

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Graduate Success Stories</h1>
      <p>
        At Jamor Tech, we take immense pride in the accomplishments of our
        graduates. <br />
        Our training programs are designed not only to educate but also to
        empower <br /> individuals to achieve their professional goals.
      </p>

      {/* Hero Section */}
      <section className={styles.hero}>
        <Image
          src="/images/Banner.png" // Image path in the public folder
          alt="Hero Image"
          layout="responsive" // Make the image responsive
          width={400}
          height={200}
          className={styles.heroImage}
        />
      </section>

      {/* Gray Horizontal Line */}
      <hr className={styles.purpleLine} />

      {/* Cards Section */}
      <div>
        <p className={styles.textLine}>
          <b>Success Stories</b>
        </p>
      </div>

      <section className={styles.cardsSection}>
        {/* Repeated Cards */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, index) => (
          <div key={index} className={styles.card}>
            <Image
              src="/images/phot.png" // Image for the cards
              alt={`Card ${index + 1}`}
              layout="responsive"
              width={50}
              height={25}
              className={styles.cardImage}
            />
            <p className={styles.cardText}>
              Card {index + 1} brief description
            </p>

            <div
              style={{ display: "flex", gap: "10px", justifyContent: "center" }}
            >
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
