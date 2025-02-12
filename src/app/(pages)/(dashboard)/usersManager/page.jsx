'use client';

import { useState, useEffect } from 'react';
import { 
  FaUserGraduate, 
  FaBuilding, 
  FaUserShield, 
  FaUsers 
} from 'react-icons/fa';
import UserTable from './components/user-table';
import UserDetailModal from './components/user-detail-modal';
import useAxiosPrivate from '@/app/hooks/useAxiosPrivate';
import { useUserStore } from '@/app/store/useUserStore';

export default function UsersManager() {
  const axiosPrivate = useAxiosPrivate();
  const { tokenRefreshed } = useUserStore(); // Use tokenRefreshed from global state
  const [activeType, setActiveType] = useState('all');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const filterTypes = [
    { id: 'all', label: 'All Users', icon: FaUsers },
    { id: 'intern', label: 'Interns', icon: FaUserGraduate },
    { id: 'company', label: 'Companies', icon: FaBuilding },
    { id: 'admin', label: 'Admins', icon: FaUserShield },
  ];

  // Fetch users based on active type
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
  
      try {
        const endpoint =
          activeType === "all"
            ? "/users/all-users"
            : `/users/userType/${activeType}`;
        const response = await axiosPrivate.get(endpoint);
        
        setUsers(response.data);
      } catch (err) {
        if (err.response?.status === 401 || err.response?.status === 403) {
          setError(err.response.data.error);
        }else if (err.response?.status === 404) {
          setError(err.response.data.error);
        }else{
          setError(err.response.data.error || "Failed to fetch users");
        }
      } finally {
        setLoading(false);
      }
    };
  
    fetchUsers();
  }, [activeType, axiosPrivate, tokenRefreshed]); // Remove redirectToLogin from dependencies

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-semibold text-[#2E1065]">
              Users Manager
            </h1>
          </div>

          <div className="p-6">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {filterTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveType(type.id)}
                  className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                    activeType === type.id
                      ? 'bg-[#2E1065] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <type.icon className="w-4 h-4 mr-2" />
                  {type.label}
                </button>
              ))}
            </div>

            {/* Users Table */}
            {loading ? (
              <div className='loader'></div>
            ) : error ? (
              <p className="text-red-500">Error: {error}</p>
            ) : (
              <UserTable
                users={users}
                onUserSelect={(user) => setSelectedUser(user)}
              />
            )}
          </div>
        </div>
      </div>

      {/* User Detail Modal */}
      <UserDetailModal
        user={selectedUser}
        isOpen={!!selectedUser}
        onClose={() => setSelectedUser(null)}
      />
    </div>
  );
}