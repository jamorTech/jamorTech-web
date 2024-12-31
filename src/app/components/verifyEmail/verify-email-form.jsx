'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './verify-email-form.module.css'
import { userStore } from '@/app/store/userStore';
import { useRouter } from 'next/navigation';

export default function VerifyEmailForm() {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState(''); // State to handle error messages
  const [success, setSuccess] = useState(''); // State to handle success messages
  const [isLoading, setIsLoading] = useState(false); // State to handle success messages

  const router = useRouter()

  const handleChange = (index, value) => {
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    // Move focus to the next input
    if (value && index < 5) {
      document.getElementById(`code-${index + 1}`).focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    const otp = verificationCode.join(''); // Combine the digits into a single code

    if (otp.length !== 6) {
      setError('Please enter a valid 6-digit verification code.');
      setSuccess('');
      setIsLoading(false)
      return;
    }

    try {
      setError('');
      setSuccess('');
      setIsLoading(true)
      const email = localStorage.getItem('email');
      if(!email) throw new Error("Something went wrong!")
      // Make the POST request
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/verify-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();

      if (!response.ok) {
        setIsLoading(false)
        throw new Error(data.error || 'Verification failed. Please try again.');
      }

      setSuccess('Your Otp have been verified successfully!');
      localStorage.setItem('otp', otp);
      setVerificationCode(['', '', '', '', '', '']); // Clear the inputs
      setIsLoading(false)
      setTimeout(() => {
        router.push('/resetPassword')
      }, 2000)
    } catch (error) {
      setError(error.message || 'An unexpected error occurred. Please try again.');
      setIsLoading(false)
    }
  };

    const {openModal, closeModal} = userStore()
  
    useEffect(() => {
      closeModal()
      if (success) openModal(success, "success");
      if (error) openModal(error, "error");
    }, [success, error]);

  return (
    <div className={styles.formContainer}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Verify E-Mail</h1>
        {isLoading && <div className="loader"></div>}
        <p className={styles.subtitle}>
          A verification code has been sent to you.<br />
          Please enter the code below.
        </p>
        
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
  );
}
