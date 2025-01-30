'use client';

import { useRouter } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa';

export default function UnauthorizedPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1E1E1E] p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-white">
            Access Denied
          </h1>
          <p className="text-gray-300 text-lg">
            Sorry, you don&apos;t have permission to access this page.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => router.push('/')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-[#1E1E1E] bg-white rounded-md hover:bg-gray-100 transition-colors duration-200"
          >
            Return Home
            <FaArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => router.back()}
            className="text-white hover:text-gray-300 transition-colors duration-200"
          >
            Go Back
          </button>
        </div>

        <div className="pt-8 text-sm text-gray-400">
          If you believe this is an error, please contact support.
        </div>
      </div>
    </div>
  );
}

