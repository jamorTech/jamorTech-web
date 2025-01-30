'use client';

import useAxiosPrivate from '@/app/hooks/useAxiosPrivate';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // Adjust the import path for axiosPrivate

export function JobUpdateForm({ onClose }) {
  const axiosPrivate = useAxiosPrivate();

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    portfolio: '',
    gitHub: '',
    linkIn: '',
    image: null,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.role.trim()) newErrors.role = 'Role is required.';
    if (!formData.portfolio.trim() && !formData.gitHub.trim() && !formData.linkIn.trim()) newErrors.portfolio = 'At least one portfolio link is required.';
    if (formData.portfolio && !/^https?:\/\/.+$/.test(formData.portfolio)) {
      newErrors.portfolio = 'Invalid portfolio URL.';
    }
    if (!formData.image) newErrors.image = 'Image is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    setLoading(true);
    setMessage(null);

    try {
      const res = await axiosPrivate.post('/users/apply-job', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      setMessage({ type: 'success', text: 'Job application submitted successfully!' });
      setFormData({
        name: '',
        role: '',
        portfolio: '',
        gitHub: '',
        linkIn: '',
        image: null,
      });
      onClose();
    } catch (error) {
      setMessage({ type: 'error', text: error.response?.data?.message || 'Error submitting form.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center border-b border-[#E5E7EB] p-4">
          <h2 className="text-xl font-semibold text-[#2E1065]">Post Job Update</h2>
          <button onClick={onClose} className="text-[#6B7280] hover:text-[#111827]">
            <FaTimes className="h-5 w-5" />
          </button>
        </div>
        {message && (
          <div className={`p-4 text-sm ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            {message.text}
          </div>
        )}
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#6B7280]">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-[#E5E7EB] shadow-sm focus:border-[#2E1065] focus:ring-[#2E1065]"
            />
            {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-[#6B7280]">
              Role
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-[#E5E7EB] shadow-sm focus:border-[#2E1065] focus:ring-[#2E1065]"
            />
            {errors.role && <p className="text-red-600 text-sm">{errors.role}</p>}
          </div>
          <div>
            <label htmlFor="portfolio" className="block text-sm font-medium text-[#6B7280]">
              Portfolio Link
            </label>
            <input
              type="url"
              id="portfolio"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-[#E5E7EB] shadow-sm focus:border-[#2E1065] focus:ring-[#2E1065] focus:ring-2 outline-none"
              placeholder="https://yourportfolio.com"
            />
          </div>
          <div>
            <label htmlFor="gitHub" className="block text-sm font-medium text-[#6B7280]">
              GitHub Link
            </label>
            <input
              type="url"
              id="gitHub"
              name="gitHub"
              value={formData.gitHub}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-[#E5E7EB] shadow-sm focus:border-[#2E1065] focus:ring-[#2E1065] focus:ring-2 outline-none"
              placeholder="https://yourgitHub.com"
            />
          </div>
          <div>
            <label htmlFor="linkIn" className="block text-sm font-medium text-[#6B7280]">
              linkIn Link
            </label>
            <input
              type="url"
              id="linkIn"
              name="linkIn"
              value={formData.linkIn}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-[#E5E7EB] shadow-sm focus:border-[#2E1065] focus:ring-[#2E1065] focus:ring-2 outline-none"
              placeholder="https://yourlinkIn.com"
            />
            {errors.portfolio && <p className="text-red-600 text-sm">{errors.portfolio}</p>}
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-[#6B7280]">
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              className="mt-1 block w-full text-sm text-[#6B7280] file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#2E1065] file:text-white hover:file:bg-[#4C1D95]"
              accept="image/*"
            />
            {errors.image && <p className="text-red-600 text-sm">{errors.image}</p>}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-[#2E1065] hover:bg-[#4C1D95] text-white rounded-md"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}
