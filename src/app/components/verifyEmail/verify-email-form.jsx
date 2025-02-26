'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './verify-email-form.module.css'
import { useRouter } from 'next/navigation';
import axios from '@/app/api/axios';
import { useUserStore } from '@/app/store/useUserStore';

export default function VerifyEmailForm() {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleChange = (index, value) => {
    const newCode = [...verificationCode];
    newCode[index] = value.slice(0, 1); // Ensure only one character is stored
    setVerificationCode(newCode);

    // Automatically move focus to the next input if value is entered
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').slice(0, 6);
    if (/^\d+$/.test(pasteData)) {
      const newCode = pasteData.split('');
      setVerificationCode(newCode.concat(Array(6 - newCode.length).fill('')));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    const otp = verificationCode.join('');

    if (otp.length !== 6) {
      setError('Please enter a valid 6-digit verification code.');
      setIsLoading(false);
      return;
    }

    try {
      const email = JSON.parse(sessionStorage.getItem('email'));
      if (!email) throw new Error('Something went wrong!');

      const response = await axios.post(`/users/verify-otp`, {
        email,
        otp,
      });

      setSuccess('Your OTP has been verified successfully. Redirecting to reset password page...');
      sessionStorage.setItem("otp", JSON.stringify(otp));
      setVerificationCode(['', '', '', '', '', '']);

      setTimeout(() => {
        router.push('/resetPassword');
      }, 2000);
    } catch (error) {
      if (error.request) {
        setError("No response from server");
      }
      const errorMessage =
        error.response?.data?.error || error.message || 'An unexpected error occurred. Please try again.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const { openModal, closeModal } = useUserStore();

  useEffect(() => {
    closeModal();
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
          <div className={styles.codeInputs} onPaste={handlePaste}>
            {verificationCode.map((digit, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
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
