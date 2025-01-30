'use client'

import { useState, useEffect } from 'react'

const UserList = ({ userType }) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    // Here you would typically fetch users based on the userType
    // For now, we'll just simulate it with some dummy data
    const dummyUsers = [
      { id: 1, name: 'John Doe', type: 'intern' },
      { id: 2, name: 'Jane Smith', type: 'company' },
      { id: 3, name: 'Admin User', type: 'admin' },
      // ... more users
    ]

    setUsers(userType === 'all' 
      ? dummyUsers 
      : dummyUsers.filter(user => user.type === userType)
    )
  }, [userType])

  return (
    <div className="space-y-2">
      {users.map(user => (
        <div key={user.id} className="p-2 bg-[#f5f5f5] rounded-md">
          <p className="text-[#111827]">{user.name}</p>
          <p className="text-sm text-[#6B7280] capitalize">{user.type}</p>
        </div>
      ))}
    </div>
  )
}

export default UserList