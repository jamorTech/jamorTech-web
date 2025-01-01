"use client";
import { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode';
import { userStore } from '../store/userStore';
import { useRouter } from 'next/navigation';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { updateLoading } = userStore();
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    useEffect(() => {
      const authenticate = () => {
        updateLoading(true);
        const token = localStorage.getItem('token');

        if (!token) {
          setErrorMessage('You are not logged in. Please log in to continue.');
          updateLoading(false);
          setTimeout(() => router.push('/login'), 3000); // Redirect after 3 seconds
          return;
        }

        try {
          const decodedToken = jwtDecode(token);
          const currentTime = Date.now() / 1000;

          if (decodedToken.exp < currentTime) {
            localStorage.removeItem('user');
            setErrorMessage('Your session has expired. Please log in again.');
            updateLoading(false);
            setTimeout(() => router.push('/login'), 3000);
            return;
          }

          // Valid token
          updateLoading(false);
        } catch (error) {
          setErrorMessage('Invalid credentials. Please log in again.');
          updateLoading(false);
          setTimeout(() => router.push('/login'), 3000);
        }
      };

      authenticate();
    }, []);

    const {openModal, closeModal} = userStore()

    useEffect(() => {
      closeModal()
      if (errorMessage) openModal(errorMessage, "error");
    }, [errorMessage]);

    // Render the wrapped component once authenticated
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;