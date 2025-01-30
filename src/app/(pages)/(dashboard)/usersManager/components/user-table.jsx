'use client'

import { 
  FaUserGraduate, 
  FaBuilding, 
  FaUserShield,
  FaCheck,
  FaTimes
} from 'react-icons/fa'

export default function UserTable({ users, onUserSelect }) {
  const getStatusBadge = (verified) => {
    return verified ? (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-sm bg-green-100 text-green-800">
        <FaCheck className="w-3 h-3" />
        Verified
      </span>
    ) : (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-sm bg-red-100 text-red-800">
        <FaTimes className="w-3 h-3" />
        Unverified
      </span>
    )
  }

  const getUserTypeIcon = (userType) => {
    switch (userType) {
      case 'intern':
        return <FaUserGraduate className="w-5 h-5 text-blue-500" />
      case 'company':
        return <FaBuilding className="w-5 h-5 text-green-500" />
      case 'admin':
        return <FaUserShield className="w-5 h-5 text-purple-500" />
      default:
        return null
    }
  }

  const getUserMainInfo = (user) => {
    switch (user.userType) {
      case 'intern':
        return {
          name: `${user.firstName} ${user.lastName}`,
          subtitle: user.skill,
          extra: user.techSchool
        }
      case 'company':
        return {
          name: user.fullName,
          subtitle: user.businessName,
          extra: user.businessBrand
        }
      case 'admin':
        return {
          name: `${user.firstName} ${user.lastName}`,
          subtitle: 'Administrator',
          extra: user.username
        }
      default:
        return { name: '', subtitle: '', extra: '' }
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              User Info
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Contact
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => {
            const info = getUserMainInfo(user)
            return (
              <tr 
                key={user._id}
                onClick={() => onUserSelect(user)}
                className="hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {getUserTypeIcon(user.userType)}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">
                    {info.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {info.subtitle}
                  </div>
                  <div className="text-xs text-gray-400">
                    {info.extra}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{user.email}</div>
                  {user.phone && (
                    <div className="text-sm text-gray-500">{user.phone}</div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(user.verified)}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

