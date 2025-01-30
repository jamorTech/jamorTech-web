'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { IoEyeOffOutline } from 'react-icons/io5'
import { FiEye } from 'react-icons/fi'
import useLogin from '@/app/hooks/useLogin'
import Image from 'next/image'
import loginImg from '../../../../../public/assets/images/login-img.png'
import { userStore } from '@/app/store/userStore'
import { useRouter, useSearchParams } from 'next/navigation'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    remember: false
  })
  const [errors, setErrors] = useState({})


  
  const { isLoading, login } = useLogin(`${process.env.NEXT_PUBLIC_BASE_URL}/users/login`)

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.username) {
      newErrors.username = 'username is required'
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateForm()) {
      await login(formData.username, formData.password)
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full flex gap-8 items-center">
        {/* Left side illustration */}
        <div className="hidden lg:block w-1/2">
          <Image 
            src={loginImg}
            alt="Login illustration" 
            className="w-full"
            height={300}
            width={500}
          />
        </div>
        
        {/* Right side form */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-green-900">Welcome to Jamor Technology</h1>
            <p className="mt-2 text-gray-600">Ensure you login with the correct credentials</p>
          </div>
          {isLoading && <div className="loader"></div>}
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username or Email
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.username ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                />
                {errors.username && (
                  <p className="mt-1 text-sm text-red-500">{errors.username}</p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className={`mt-1 block w-full px-3 py-2 border ${
                      errors.password ? 'border-red-500' : 'border-gray-300'
                    } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? <IoEyeOffOutline size={20} /> : <FiEye size={20} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  checked={formData.remember}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                  Remember Me
                </label>
              </div>

              <div className="flex items-center space-x-4 text-sm">
                <Link href="/feedback" className="text-gray-600 hover:text-gray-900">
                  Feedback
                </Link>
                <Link href="/forgotPassword" className="text-green-800 hover:text-green-700">
                  Forget Password
                </Link>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-900 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {isLoading ? 'Logging in...' : 'Log in →'}
            </button>
          </form>

          <p className="text-center text-sm">
            Don't have an account?{' '}
            <Link href="/signUp" className="text-green-800 hover:text-green-700">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

