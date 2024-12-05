
import { BsCheckCircle } from 'react-icons/bs'
import styles from './reset-success.module.css'

export default function ResetSuccess() {
  return (
    <div className={styles.successContainer}>
      <div className={styles.successCard}>
        <BsCheckCircle className={styles.icon} />
        <h2 className={styles.title}>Reset Password Successful</h2>
        <p className={styles.message}>
          Your has successful be changed! You can access your account
        </p>
      </div>
    </div>
  )
}

