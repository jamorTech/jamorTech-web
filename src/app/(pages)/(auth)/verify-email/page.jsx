
import VerifyEmailForm from '@/app/components/verifyEmail/verify-email-form'
import styles from './page.module.css'
import Image from 'next/image'
import img from "../../../components/login-components/login-img/login.svg"

export default function VerifyEmailPage() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.imageContainer}>
          {/* Replace with your actual image */}
          <Image
            className={styles.placeholderImage}
            src={img}
            height={300}
            width={500}
            alt='img'
          />
        </div>
      </div>
      <VerifyEmailForm />
    </div>
  )
}

