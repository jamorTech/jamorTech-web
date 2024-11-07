import Image from "next/image";
import styles from "./page.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Hire A Techie</h1>
      <p>
        Our training programs are designed to not only educate but also empower individuals to achieve their professional goals.
      </p>

      {/* Hero Section */}
      <section className={styles.hero}>
        <Image
          src="/images/Banner.png"
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
            {
              name: "Adelakun Oluwatobi",
              role: "Product Designer",
              cohort: "Cohort 1, 2023",
            },
            {
              name: "Akerele Taiwo",
              role: "Frontend Engineer",
              cohort: "Cohort 2, 2024",
            },
            {
              name: "Ndieze Chidera",
              role: "Fullstack Developer",
              cohort: "Cohort 2, 2024",
            },
            {
              name: "Odidika Somto Anthony",
              role: "Backend Developer",
              cohort: "Cohort 2, 2024",
            },
            {
              name: "Abe John Opeyemi",
              role: "Product Manager",
              cohort: "Cohort 2, 2024",
            },
            {
              name: "Festus Omotayo",
              role: "Product Designer",
              cohort: "Cohort 2, 2024",
            },
            {
              name: "Ogechukwu Aina",
              role: "Frontend Developer",
              cohort: "Cohort 2, 2024",
            },
            {
              name: "Aderonmu Adeniyi Bidemi",
              role: "Data Analyst",
              cohort: "Cohort 2, 2024",
            },
            {
              name: "Ikem Chinedu Wisdom",
              role: "Frontend Developer",
              cohort: "Cohort 2, 2024",
            },
            {
              name: "Nwokorie Victoria",
              role: "Project Manager",
              cohort: "Cohort 2, 2024",
            },
            {
              name: "Usiwo Sonia Uyouyou",
              role: "Frontend Developer",
              cohort: "Cohort 2, 2024",
            },
            {
              name: "Onyebuchi Nneamaka Chisom",
              role: "Product Manager",
              cohort: "Cohort 2, 2024",
            },
          ];

          const { name, role, cohort } = texts[index];

          return (
            <div key={index} className={styles.card}>
              <Image
                src={images[index]}
                alt={`Card ${index + 1}`}
                width={300}
                height={200}
                className={styles.cardImage}
              />
              <p className={styles.cardText}>
                <b>{name}</b>
                <br />
                <span>{role}</span>
                <br />
                <small>{cohort}</small>
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
