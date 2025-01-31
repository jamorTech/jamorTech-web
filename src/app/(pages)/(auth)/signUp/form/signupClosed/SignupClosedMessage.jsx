import styles from "./SignupClosedMessage.module.css"

const SignupClosedMessage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Signups are currently closed</h2>
      <p className={styles.message}>
        We're sorry, but we're not accepting new users at this time. Please check back later for updates.
      </p>
    </div>
  )
}

export default SignupClosedMessage

