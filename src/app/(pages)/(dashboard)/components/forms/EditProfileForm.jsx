'use client';

import useAxiosPrivate from '@/app/hooks/useAxiosPrivate';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

export function EditProfileForm({ user, updateUser, onClose }) {
  const [formData, setFormData] = useState(user);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const axiosPrivate = useAxiosPrivate();

  const submitUpdate = async () => {
    setLoading(true);
    setErr(null); // Reset error state before making the request
    try {
      const response = await axiosPrivate.patch('/users/profile', formData);
      updateUser(response.data); // Update the parent component's state
      onClose(); // Close the modal upon successful update
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Failed to update profile';
      setErr(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitUpdate(); // Call submitUpdate to make the API request
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-10 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md my-4 max-h-[80vh] flex flex-col">
        <div className="flex justify-between items-center border-b border-[#E5E7EB] p-4">
          <h2 className="text-xl font-semibold text-[#2E1065]">Edit Profile</h2>
          <button onClick={onClose} className="text-[#6B7280] hover:text-[#111827]">
            <FaTimes className="h-5 w-5" />
          </button>
        </div>
        {err && <p className="text-red-500 p-2">{err}</p>}
        <form onSubmit={handleSubmit} className="p-4 space-y-4 overflow-y-auto flex-1">
          {Object.entries(formData).map(([key, value]) => {
            if (['verified', '_id', 'userType', 'certificate'].includes(key)) return null;
            return (
              <div key={key}>
                <label htmlFor={key} className="block text-sm font-medium text-[#6B7280] capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </label>
                <input
                  type="text"
                  id={key}
                  name={key}
                  value={value}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-[#E5E7EB] shadow-sm focus:border-[#2E1065] focus:ring-[#2E1065]"
                />
              </div>
            );
          })}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-[#2E1065] hover:bg-[#4C1D95] text-white rounded-md"
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </form>
      </div>
    </div>
  );
}
