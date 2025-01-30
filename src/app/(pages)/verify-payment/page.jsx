"use client"
import axios from '@/app/api/axios';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState  } from 'react'
import VerificationStatus from './Verification-status';

const page = () => {
    const searchParams = useSearchParams()
    const [status, setStatus] = useState('loading')
    const [message, setMessage] = useState('Verifying your payment...')
    const hasRun = useRef(false);
    const {push} = useRouter()

    useEffect(() => {

        if (hasRun.current) return; // Skip if already run
        hasRun.current = true;
        // const controller = new AbortController(); // Create AbortController instance
      
        const verify = async () => {
          const trxref = searchParams.get("trxref");
          const reference = searchParams.get("reference");
      
      if (!reference || !trxref) {
        setStatus('error')
        setMessage('Invalid payment reference')
        return
      }
      
        try {
        const response = await axios.get(`/users/verify-payment/${reference}`, {
            withCredentials: true,
            // signal: controller.signal, // Pass signal to axios
        });
      
            const data = response.data;
            setStatus('success')
            setTimeout(() => {
                push('/login')
              }, 3000)
            setMessage('Your payment has been verified successfully!')
          } catch (err) {
            // Check if the error is due to an aborted request
              setStatus('error')
            setMessage( err.response.data.message || err.message || 'Failed to verify payment')
          }
        };
      
        verify();
      }, []); // Add searchParams as a dependency if it might change
      
return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#2E1065] mb-2">
            Payment Verification
          </h1>
          <p className="text-gray-600">
            Please wait while we verify your payment
          </p>
        </div>

        <VerificationStatus status={status} message={message} />

        {/* {status === 'error' && (
          <div className="mt-6 text-center">
            <button
              onClick={() => router.push('/dashboard')}
              className="bg-[#2E1065] text-white px-6 py-2 rounded-lg hover:bg-[#1a0745] transition-colors"
            >
              Return to Dashboard
            </button>
          </div>
        )} */}
      </div>
    </div>
  )
}

export default page