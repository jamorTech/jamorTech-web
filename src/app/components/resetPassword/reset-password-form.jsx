'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './reset-password-form.module.css';
import { FiEye } from "react-icons/fi";
import { IoEyeOffOutline } from "react-icons/io5";
import { userStore } from '@/app/store/userStore';
import { useRouter } from 'next/navigation';

export default function ResetPasswordForm() {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const router = useRouter()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validatePassword = (password) => {
    return password.length >= 8;  // Example: password should be at least 8 characters long
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    const { password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!validatePassword(password)) {
      setError(
        'Password must be at least 8 characters long and contain at least one letter and one number'
      );
      return;
    }
    setError('');
    setSuccessMessage('');
    try {
      setIsLoading(true)
      const email = localStorage.getItem('email');
      const otp = localStorage.getItem('otp');
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/reset`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp, password, confirmPassword }),
      });

      if (!response.ok) {
        setIsLoading(false)
        const errorData = await response.json();
        setError(errorData.error || 'Failed to reset password');
        return;
      }

      setSuccessMessage('Password reset successful! You can now log in.');
      setFormData({ password: '', confirmPassword: '' });
      localStorage.removeItem("email")
      localStorage.removeItem("otp")
      localStorage.removeItem("token")
      setTimeout(() => {
        router.push('/login')
      }, 2000)
    } catch (err) {
      setError(`An unexpected error occurred. Please try again. ${err.message}`);
    }finally{
      setIsLoading(false)
    }
  };

    const {openModal, closeModal} = userStore()
  
    useEffect(() => {
      closeModal()
      if (successMessage) openModal(successMessage, "success");
    }, [successMessage, error]);

  return (
    <div className={styles.formContainer}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Choose a New Password</h1>
        <p className={styles.subtitle}>
          Almost done. Enter your new password
          <br />
          and you're all set.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          {isLoading && <div className="loader"></div>}
          {error && <p className={styles.error}>{error}</p>}
          {successMessage && <p className={styles.success}>{successMessage}</p>}

          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              New Password
            </label>
            <div className={styles.inputWrapper}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={styles.input}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={styles.eyeIcon}
              >
                {showPassword ? <IoEyeOffOutline /> : <FiEye />}
              </button>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword" className={styles.label}>
              Confirm New Password
            </label>
            <div className={styles.inputWrapper}>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={styles.input}
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className={styles.eyeIcon}
              >
                {showConfirmPassword ? <IoEyeOffOutline /> : <FiEye />}
              </button>
            </div>
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
