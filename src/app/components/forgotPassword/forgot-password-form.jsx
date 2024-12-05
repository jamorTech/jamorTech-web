'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from "./forgot-password-form.module.css"

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    // Add your password reset logic here
    console.log('Password reset requested for:', email)
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Forgot Your Password?</h1>
        <p className={styles.subtitle}>Enter Your Email Address</p>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          
          <div className={styles.buttons}>
            <Link href="/login" className={styles.backButton}>
              Back To Login
            </Link>
            <button type="submit" className={styles.sendButton}>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

