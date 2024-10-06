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
      <h1 className={styles.heading}>Hire A Techie</h1>
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
          <b>Techies</b>
        </p>
      </div>

      <section className={styles.cardsSection}>
        {/* Different Cards */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, index) => {
          const images = [
            "/images/imageL.png",
            "/images/imageB.png",
            "/images/imageC.png",
            "/images/imageD.png",
            "/images/imageH.png",
            "/images/imageA.png",
            "/images/imageE.png",
            "/images/imageF.png",
            "/images/imageG.png",
            "/images/imageJ.png",
            "/images/imageK.png",
            "/images/imageM.png",
          ];

          const texts = [
            "Adelakun Oluwatobi Product Designer Cohort 1, 2024",
            "Akerele Taiwo Frontend Engineer Cohort 2, 2024",
            "Ndieze Chidera Fullstack Developer Cohort 2, 2024",
            "Odidika Somto Anthony Backend Developer Cohort 2, 2024",
            "Abe John Opeyemi Product Manager Cohort 2, 2024",
            "Festus Omotayo Product Designer Cohort 2, 2024",
            "Ogechukwu Aina Frontend Developer Cohort 2, 2024",
            "Aderonmu Adeniyi Bidemi Data Analyst Cohort 2, 2024",
            "Ikem Chinedu Wisdom Frontend Developer Cohort 2, 2024",
            "Nwokorie Victoria Project Manager Cohort 2, 2024",
            "Usiwo Sonia Uyouyou Frontend Developer Cohort 2, 2024",
            "Onyebuchi Nneamaka Chisom Product Manager Cohort 2, 2024",
          ];

          return (
            <div key={index} className={styles.card}>
              <Image
                src={images[index]} // Different image for each card
                alt={`Card ${index + 1}`}
                width={300}
                height={200}
                className={styles.cardImage}
              />
              <p className={styles.cardText}>
                {texts[index]} {/* Different text for each card */}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "center",
                }}
              >
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF size={12} />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={12} />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={12} />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn size={12} />
                </a>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
