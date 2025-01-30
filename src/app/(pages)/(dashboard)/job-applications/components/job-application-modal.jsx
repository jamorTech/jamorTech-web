'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa'
import Link from 'next/link'

export default function JobApplicationModal({ application, isOpen, onClose }) {
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

  if (!isOpen || !application) return null

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
            Job Application Details
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 transition-colors"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">
          <div className="flex items-center mb-6">
            <div className="flex-shrink-0 h-20 w-20 relative mr-4">
              <Image
                src={application.image || "/placeholder.svg"}
                alt={application.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{application.name}</h3>
              <p className="text-[#2E1065] font-medium">{application.role}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Status</p>
              <p className="mt-1 text-sm text-gray-900">
                {application.approved ? 'Approved' : 'Unapproved'}
              </p>
            </div>
            {application?.portfolio && <div>
              <p className="text-sm font-medium text-gray-500">Portfolio</p>
              <Link 
                href={application.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-sm text-[#2E1065] hover:underline flex items-center"
              >
                View Portfolio
                <FaExternalLinkAlt className="ml-1 w-3 h-3" />
              </Link>
            </div>}
            {application.gitHub && <div>
              <p className="text-sm font-medium text-gray-500">GitHub</p>
              <Link 
                href={application.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-sm text-[#2E1065] hover:underline flex items-center"
              >
                View Github
                <FaExternalLinkAlt className="ml-1 w-3 h-3" />
              </Link>
            </div>}
            {application.linkIn && <div>
              <p className="text-sm font-medium text-gray-500">LinkedIn</p>
              <Link 
                href={application.linkIn}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-sm text-[#2E1065] hover:underline flex items-center"
              >
                View LinkedIn
                <FaExternalLinkAlt className="ml-1 w-3 h-3" />
              </Link>
            </div>}
          </div>
        </div>
      </div>
    </div>
  )
}

