'use client'

import { FaCheckCircle, FaTimes, FaEdit } from 'react-icons/fa'
import { EditProfileForm } from '../forms/EditProfileForm'
import { useState } from 'react'

export function CompanyProfile({ user }) {
    const [showEditForm, setShowEditForm] = useState(false)
    const [userData, setUserData] = useState(user)

  return (<>
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center gap-4">
          <div className="h-20 w-20 rounded-full bg-[#2E1065] text-white flex items-center justify-center text-xl font-semibold">
            {userData?.businessName?.[0]}
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-[#111827] flex items-center gap-2">
              {userData?.businessName}
              {userData?.verified ? (
                <FaCheckCircle className="h-5 w-5 text-[#059669]" />
              ) : (
                <FaTimes className="h-5 w-5 text-[#DC2626]" />
              )}
            </h1>
            <p className="text-[#6B7280]">{userData?.username}</p>
          </div>
        </div>
        <button 
          className="px-4 py-2 bg-[#2E1065] hover:bg-[#4C1D95] text-white rounded-md flex items-center gap-2"
          onClick={()=>setShowEditForm(true)}
        >
          <FaEdit className="h-4 w-4" />
          Edit Profile
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="border-b border-[#E5E7EB] p-6">
          <h2 className="text-xl font-semibold text-[#2E1065]">Company Information</h2>
        </div>
        <div className="p-6 grid md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <p className="text-sm font-medium text-[#6B7280]">Business Brand</p>
            <p className="text-[#111827]">{userData?.businessBrand}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-[#6B7280]">Contact Person</p>
            <p className="text-[#111827]">{userData?.fullName}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-[#6B7280]">Email</p>
            <p className="text-[#111827]">{userData?.email}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="border-b border-[#E5E7EB] p-6">
          <h2 className="text-xl font-semibold text-[#2E1065]">What We Offer</h2>
        </div>
        <div className="p-6">
          <p className="text-[#111827]">{userData?.whatWeCanOffer}</p>
        </div>
      </div>
    </div>
    {showEditForm && (
        <EditProfileForm
        user={userData}
        updateUser={(updatedUser) => setUserData(updatedUser)}
        onClose={() => setShowEditForm(false)}
      />
    )}
    </>
  )
}

