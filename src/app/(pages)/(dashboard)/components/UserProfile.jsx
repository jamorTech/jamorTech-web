'use client'

import { AdminProfile } from "./profiles/AdminProfile"
import { CompanyProfile } from "./profiles/CompanyProfile"
import { InternProfile } from "./profiles/InternProfile"

const  UserProfile = ({ userData }) => {
  if (!userData) return null

  const renderProfile = () => {
    switch (userData.userType) {
      case 'intern':
        return <InternProfile user={userData} />
      case 'company':
        return <CompanyProfile user={userData} />
      case 'admin':
        return <AdminProfile user={userData} />
      default:
        return <div>Invalid user type</div>
    }
  }

  return <div className="container mx-auto px-4 py-8 max-w-4xl">{renderProfile()}</div>
}

export default UserProfile