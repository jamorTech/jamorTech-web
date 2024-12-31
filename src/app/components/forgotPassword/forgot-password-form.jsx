'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from "./forgot-password-form.module.css"
import { userStore } from '@/app/store/userStore';
import { useRouter } from 'next/navigation';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(''); // State to manage error messages
  const [success, setSuccess] = useState(''); // State to manage success messages

  const router = useRouter()

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setSuccess('');
      setIsLoading(false)
      return;
    }

    setError(''); // Clear any previous error
    setSuccess(''); // Clear any previous success message

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setIsLoading(false)
        throw new Error(data.message || 'Failed to process your request. Please try again.');
      }

      localStorage.setItem('email', email);
      setSuccess('Password reset link has been sent to your email.');
      setTimeout(() => {
        router.push('/verify-token')
      }, 2000)
      setIsLoading(false)
      setEmail(''); // Clear the email input field
    } catch (error) {
      setIsLoading(false)
      setError(error.message || 'An unexpected error occurred. Please try again.');
      setSuccess(''); // Clear success message if there’s an error
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
        <h1 className={styles.title}>Forgot Your Password?</h1>
        <p className={styles.subtitle}>Enter Your Email Address</p>
        {isLoading && <div className="loader"></div>}
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="Enter your email"
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
  );
}
