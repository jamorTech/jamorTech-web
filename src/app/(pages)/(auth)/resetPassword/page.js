import ResetPasswordForm from '@/app/components/resetPassword/reset-password-form'
import styles from './page.module.css'
import ResetSuccess from '@/app/components/resetPassword/reset-success'
import Image from 'next/image'
import img from "../../../../../public/assets/svgs/OnboardingAmico.svg"

export default function ResetPasswordPage() {
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
      <ResetPasswordForm />
      {/* <ResetSuccess /> */}
    </div>
  )
}

