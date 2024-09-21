import Image from "next/image";
import styles from "./page.module.css";

export default function ResetPasswordPage() {
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
        <Image
          src="/images/greenm.png"
          alt="green"
          className={styles.greenImage}
          width={70} // Adjust width as needed
          height={45} // Adjust height as needed
        />
        <h1 className={styles.heading}>
          Reset Password <b /> Successful
        </h1>

        {/* Text */}
        <p className={styles.message}>Your password has been successfully changed!You can access your account.</p>
      </section>
    </main>
  );
}
