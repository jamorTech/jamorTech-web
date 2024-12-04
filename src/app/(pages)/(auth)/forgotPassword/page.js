import ForgotPasswordForm from '@/app/components/forgotPassword/forgot-password-form'
import styles from './page.module.css'
import Image from 'next/image'
import img from "../../../../../public/assets/svgs/OnboardingAmico.svg"

export default function ForgotPasswordPage() {
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
      <ForgotPasswordForm />
    </div>
  )
}

