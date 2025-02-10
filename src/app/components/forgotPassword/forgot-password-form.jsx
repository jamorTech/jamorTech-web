'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from "./forgot-password-form.module.css"
import { useRouter } from 'next/navigation';
import axios from '@/app/api/axios';
import { storeData } from '@/app/utils/localStorage';
import { useUserStore } from '@/app/store/useUserStore';

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
  setIsLoading(true);

  if (!validateEmail(email)) {
    setError("Please enter a valid email address.");
    setSuccess('');
    setIsLoading(false);
    return;
  }

  // Clear any previous messages
  setError('');
  setSuccess('');

  try {
    // Axios POST request
    const response = await axios.post(
      `/users/forgot-password`,
      { email },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true, // Include credentials if needed
      }
    );

    // Handle success
    storeData('email', email);
    setSuccess('OTP reset token has been sent to your email. Redirecting...');
    setTimeout(() => {
      router.push('/verify-token');
    }, 2000);

    setEmail(''); // Clear the email input field
  } catch (error) {
    // Handle errors
    if (error.response) {
      // Server responded with an error
      setError(error.response.data?.message || 'Failed to process your request. Please try again.');
    } else if (error.request) {
      // No response received
      setError('No response from the server. Please try again later.');
    } else {
      // Unexpected error
      setError('An unexpected error occurred. Please try again.');
    }
    setSuccess(''); // Clear success message on error
  } finally {
    setIsLoading(false); // Stop loading spinner
  }
};


  const {openModal, closeModal} = useUserStore()

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
