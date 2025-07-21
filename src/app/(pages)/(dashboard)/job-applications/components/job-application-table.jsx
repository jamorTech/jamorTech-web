'use client'

import Image from 'next/image'
import { FaCheck, FaTimes, FaExternalLinkAlt } from 'react-icons/fa'

export default function JobApplicationTable({ applications, onApplicationSelect, onApprovalToggle }) {
  const getStatusBadge = (approved) => {
    return approved ? (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-sm bg-green-100 text-green-800">
        <FaCheck className="w-3 h-3" />
        Approved
      </span>
    ) : (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-sm bg-red-100 text-red-800">
        <FaTimes className="w-3 h-3" />
        Unapproved
      </span>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Applicant
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Portfolio
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {applications.map((application) => (
            <tr 
              key={application._id}
              className="hover:bg-gray-50 transition-colors"
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 relative">
                    <Image
                      src={application.image || "/placeholder.svg"}
                      alt={application.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {application.name}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{application.role}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <a 
                  href={application?.portfolio || application?.gitHub || application?.linkIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2E1065] hover:underline flex items-center"
                >
                  View Portfolio
                  <FaExternalLinkAlt className="ml-1 w-3 h-3" />
                </a>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {getStatusBadge(application.approved)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  onClick={() => onApplicationSelect(application)}
                  className="text-[#2E1065] hover:text-[#4C1D95] mr-4"
                >
                  View Details
                </button>
                <button
                  onClick={() => onApprovalToggle(application._id)}
                  className={`${
                    application.approved
                      ? 'text-red-600 hover:text-red-800'
                      : 'text-green-600 hover:text-green-800'
                  }`}
                >
                  {application.approved ? 'Unapprove' : 'Approve'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

