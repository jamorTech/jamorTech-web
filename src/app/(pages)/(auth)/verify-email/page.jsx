'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { userStore } from '@/app/store/userStore'
import Link from 'next/link'
import axios from '@/app/api/axios'
import { storeData } from '@/app/utils/localStorage'

const VerifyEmailPage = ()=> {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [status, setStatus] = useState('verifying') // verifying, success, error
  const [error, setError] = useState('')


  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const userId = searchParams.get('userId');
        const token = searchParams.get('token');
  
        if (!userId || !token) {
          setStatus('error');
          setError('Click on the verification link sent to your email to get verified');
          return;
        }
  
        // Axios POST request with credentials
        const response = await axios.post(
          `/users/verify-email`,
          { userId, token },
          { withCredentials: true } // Include credentials in the request
        );
  
        const data = response.data;

        // Check if the response is successful
        setStatus('success');
        storeData('user', JSON.stringify(data));
        setTimeout(() => {
          router.push('/profile');
        }, 2000);
      } catch (err) {
        setStatus('error');
        setError(
          err.response?.data?.error || 'An error occurred during verification'
        );
      }
    };
  
    verifyEmail();
  }, []);

  
  const {openModal, closeModal} = userStore()

    useEffect(() => {
      closeModal()
      if (error) openModal(error, "warning");
    }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Email Verification</h2>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          {status === 'verifying' && (
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="loader"></div>
              <p className="text-gray-600">Verifying your email address...</p>
            </div>
          )}

          {status === 'success' && (
            <div className="text-center space-y-4">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-lg font-medium text-gray-900">Email verified successfully!</p>
              <p className="text-sm text-gray-500">Redirecting to your profile...</p>
            </div>
          )}

          {status === 'error' && (
            <div className="text-center space-y-4">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                <svg
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <p className="text-lg font-medium text-gray-900">Email not verified</p>
              {/* <p className="text-sm text-yellow-500">{error}</p> */}
              <Link href={"contact-us"} className='text-sm text-blue-500 my-5'>Talk to us if you are finding it difficult getting verified</Link>
              <Link
                href={"login"}
                className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-900 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Back to Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default VerifyEmailPage