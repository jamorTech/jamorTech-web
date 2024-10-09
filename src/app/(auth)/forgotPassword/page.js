import Image from "next/image";
import styles from "./page.module.css";

export default function ForgetPasswordPage() {
  return (
    <main className={styles.container}>
      {/* Background Image */}
      <Image
        src="/images/bckgrnd.png"
        alt="background"
        layout="fill"
        objectFit="cover"
        className={styles.backgroundImage}
      />

      {/* Popup Section */}
      <section className={styles.popupContainer}>
        {/* Centered Heading */}
        <h1 className={styles.heading}>Reset Password Successful</h1>
        <p className={styles.message}>Check your email for the reset link!</p>
        {/* Envelope Image Positioned Left */}
        <div className={styles.imageAndTextContainer}>
          <Image
            src="/images/env.png"
            alt="Envelope"
            className={styles.envImage}
            width={30} // Set the desired width
            height={30} // Set the desired height
          />
          {/* Left Positioned Text */}
        </div>

        {/* Horizontal Line and Text */}
        <div className={styles.lineContainer}>
          <div className={styles.grayLine}></div>
        </div>

        {/* Buttons Positioned Left and Right */}
        <div className={styles.buttonContainer}>
          <button className={styles.buttonBlue}>Back to login</button>
          <button className={styles.buttonWhite}>Send</button>
        </div>
      </section>
    </main>
  );
}
