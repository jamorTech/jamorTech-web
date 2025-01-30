'use client'

import { useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'

export default function UserDetailModal({ user, isOpen, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen || !user) return null

  const renderUserDetails = () => {
    switch (user.userType) {
      case 'intern':
        return (
          <div className="grid grid-cols-2 gap-4">
            <DetailItem label="First Name" value={user.firstName} />
            <DetailItem label="Last Name" value={user.lastName} />
            <DetailItem label="Username" value={user.username} />
            <DetailItem label="Email" value={user.email} />
            <DetailItem label="Phone" value={user.phone} />
            <DetailItem label="Tech School" value={user.techSchool} />
            <DetailItem label="Skill" value={user.skill} />
            <DetailItem label="Status" value={user.verified ? 'Verified' : 'Unverified'} />
            {user.certificate && (
              <div className="col-span-2">
                <DetailItem 
                  label="Certificate" 
                  value={
                    <a 
                      href={user.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2E1065] hover:underline"
                    >
                      View Certificate
                    </a>
                  }
                />
              </div>
            )}
            {user.onboardMesg && (
              <div className="col-span-2">
                <DetailItem label="Onboarding Message" value={user.onboardMesg} />
              </div>
            )}
          </div>
        )
      case 'company':
        return (
          <div className="grid grid-cols-2 gap-4">
            <DetailItem label="Full Name" value={user.fullName} />
            <DetailItem label="Username" value={user.username} />
            <DetailItem label="Email" value={user.email} />
            <DetailItem label="Business Name" value={user.businessName} />
            <DetailItem label="Business Brand" value={user.businessBrand} />
            <DetailItem label="Offerings" value={user.whatWeCanOffer} />
            <DetailItem label="Status" value={user.verified ? 'Verified' : 'Unverified'} />
          </div>
        )
      case 'admin':
        return (
          <div className="grid grid-cols-2 gap-4">
            <DetailItem label="First Name" value={user.firstName} />
            <DetailItem label="Last Name" value={user.lastName} />
            <DetailItem label="Username" value={user.username} />
            <DetailItem label="Email" value={user.email} />
            <DetailItem label="Phone" value={user.phone} />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-white rounded-lg shadow-xl animate-modal"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            User Details
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 transition-colors"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">
          {renderUserDetails()}
        </div>
      </div>
    </div>
  )
}

function DetailItem({ label, value }) {
  return (
    <div>
      <dt className="text-sm font-medium text-gray-500">{label}</dt>
      <dd className="mt-1 text-sm text-gray-900">{value}</dd>
    </div>
  )
}

