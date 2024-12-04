'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './verify-email-form.module.css'

export default function VerifyEmailForm() {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', ''])
  
  const handleChange = (index, value) => {
    const newCode = [...verificationCode]
    newCode[index] = value
    setVerificationCode(newCode)
    
    // Move focus to the next input
    if (value && index < 5) {
      document.getElementById(`code-${index + 1}`).focus()
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Add your verification logic here
    console.log('Verification code:', verificationCode.join(''))
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Verify E-Mail</h1>
        <p className={styles.subtitle}>A verification code has been sent to you.<br />Please enter code below.</p>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.codeInputs}>
            {verificationCode.map((digit, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                className={styles.codeInput}
                required
              />
            ))}
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

