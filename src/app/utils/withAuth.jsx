"use client";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import { userStore } from '../store/userStore';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const { updateError, updateLoading } = userStore();

    useEffect(() => {
      const authenticate = () => {
        updateLoading(true)
        updateError(''); // Reset error state
        const token = localStorage.getItem("token");

        if (token) {
          try {
            const decodedToken = jwtDecode(token);
            const currentTime = Date.now() / 1000;

            if (decodedToken.exp < currentTime) {
              // Token expired
              localStorage.removeItem('user');
              updateError('Session expired. Please log in again.');
              setTimeout(() => {
                router.push('/login');
              }, 1000)
            } else {
              updateLoading(false); // Valid token, proceed to render WrappedComponent
            }
          } catch (error) {
            updateError('Invalid Credentials: ' + error.message);
            setTimeout(() => {
              router.push('/login');
            }, 1000)
            updateLoading(false)
          }finally{
            updateLoading(false)
          }
        } else {
          updateError('Invalid Credentials. Please log in.');
          setTimeout(() => {
            router.push('/login');
          }, 1000)
          updateLoading(false)
        }
      };

      authenticate();
    }, [router, updateError]);

    // if (error) {
    //   return (
    //     <div className="error-container">
    //       <p>{error}</p>
    //     </div>
    //   );
    // }

    // Show loading indicator until authentication check is complete
    // if (loading) {
    //   return <div className='loader'></div>;
    // }

    // Render the wrapped component once authenticated
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
