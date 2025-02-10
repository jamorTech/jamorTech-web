'use client'

import { useState } from 'react'
import { FaEdit, FaUsers, FaUserTie, FaUserGraduate, FaUserShield, FaBriefcase } from 'react-icons/fa'
import { EditProfileForm } from '../forms/EditProfileForm'
import UserList from '../UserList'
import Link from 'next/link'

export function AdminProfile({ user }) {
  // const { userData?.username, userData?.firstName, userData?.lastName, userData?.email, userData?.phone } = user
  const [userData, setUserData] = useState(user)
  const [showEditForm, setShowEditForm] = useState(false)
  const [activeUserType, setActiveUserType] = useState('')

  const handleUserTypeChange = (type) => {
    setActiveUserType(type)
    // Here you would typically fetch users based on the selected type
  }

  return (<>
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center gap-4">
          <div className="h-20 w-20 rounded-full bg-[#2E1065] text-white flex items-center justify-center text-xl font-semibold">
            {userData?.firstName?.[0].toUpperCase()}{userData?.lastName?.[0]}
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-[#111827]">{userData?.username.charAt(0).toUpperCase() + userData.username.slice(1)}</h1>
            <p className="text-[#6B7280]">Administrator</p>
          </div>
        </div>
        <button 
          className="px-4 py-2 bg-[#2E1065] hover:bg-[#4C1D95] text-white rounded-md flex items-center gap-2"
          onClick={() => setShowEditForm(true)}
        >
          <FaEdit className="h-4 w-4" />
          Edit Profile
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="border-b border-[#E5E7EB] p-6">
          <h2 className="text-xl font-semibold text-[#2E1065]">Admin Information</h2>
        </div>
        <div className="p-6 grid md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <p className="text-sm font-medium text-[#6B7280]">Full Name</p>
            <p className="text-[#111827]">{userData?.firstName} {userData?.lastName}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-[#6B7280]">Email</p>
            <p className="text-[#111827]">{userData?.email}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-[#6B7280]">Phone</p>
            <p className="text-[#111827]">{userData?.phone}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="border-b border-[#E5E7EB] p-6">
          <h2 className="text-xl font-semibold text-[#2E1065]">User Management</h2>
        </div>
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            <Link href={"/usersManager"}
              className={`px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#2E1065] hover:text-white ${
                activeUserType === 'all' ? 'bg-[#2E1065] text-white' : 'bg-[#f5f5f5] text-[#111827]'
              }`}
              onClick={() => handleUserTypeChange('all')}
            >
              <FaUsers className="h-4 w-4" />
              All Users
            </Link>
            <Link href={"/job-applications"}
              className={`px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#2E1065] hover:text-white ${
                activeUserType === 'intern' ? 'bg-[#2E1065] text-white' : 'bg-[#f5f5f5] text-[#111827]'
              }`}
              onClick={() => handleUserTypeChange('intern')}
            >
              <FaBriefcase className="h-4 w-4" />
              Job Applications
            </Link>
            {/* <button
              className={`px-4 py-2 rounded-md flex items-center gap-2 ${
                activeUserType === 'company' ? 'bg-[#2E1065] text-white' : 'bg-[#f5f5f5] text-[#111827]'
              }`}
              onClick={() => handleUserTypeChange('company')}
            >
              <FaUserTie className="h-4 w-4" />
              Companies
            </button>
            <button
              className={`px-4 py-2 rounded-md flex items-center gap-2 ${
                activeUserType === 'admin' ? 'bg-[#2E1065] text-white' : 'bg-[#f5f5f5] text-[#111827]'
              }`}
              onClick={() => handleUserTypeChange('admin')}
            >
              <FaUserShield className="h-4 w-4" />
              Admins
            </button> */}
          </div>
          {/* <UserList userType={activeUserType} /> */}
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

