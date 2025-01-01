"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import user from "./login-img/user.svg";
import eyes from "./login-img/eye.svg";
import move from "./login-img/move.svg";
import { userStore } from "@/app/store/userStore";
import useLogin from "@/app/hooks/useLogin";

export default function LoginForm() {
  const [convert, setConvert] = useState("password");
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });

  const togglePasswordVisibility = () => {
    setConvert((prev) => (prev === "password" ? "text" : "password"));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear errors on input
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username or Email is required.";
    if (!formData.password) newErrors.password = "Password is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const {openModal} = userStore()

  const {err, isLoading, msg, login} = useLogin(`${process.env.NEXT_PUBLIC_BASE_URL}/users/login`)

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (validateForm()) {
        await login(formData.username, formData.password)
    }
  };

useEffect(() => {
  if (err) openModal(err, "error");
  if (msg) openModal(msg, "success");
}, [err, msg]);

  return (
    <form
      className="max-w-[1440px] mx-auto mt-10 px-4 sm:px-6"
      onSubmit={handleSubmit}
    >
      {isLoading && <div className="loader"></div>}
      {/* Username or Email Field */}
      <div className="relative">
        <label htmlFor="username" className="sr-only">
          Username or Email
        </label>
        <Image
          src={user}
          alt="User Icon"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6"
        />
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          className="pl-10 p-4 h-[60px] outline-none border-customPurple border-[1.5px] w-full placeholder:font-bold placeholder:text-customGray placeholder:font-arimoFont"
          placeholder="Username or Email"
        />
        {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
      </div>

      {/* Password Field */}
      <div className="relative mt-6">
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <Image
          src={eyes}
          alt="Toggle Password Visibility"
          onClick={togglePasswordVisibility}
          className="absolute right-2 top-1/2 cursor-pointer transform -translate-y-1/2 w-6 h-6"
        />
        <input
          type={convert}
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="pl-3 p-4 h-[60px] outline-none border-customPurple border-[1.5px] w-full placeholder:font-bold placeholder:text-customGray placeholder:font-arimoFont"
          placeholder="Password"
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
      </div>

      {/* Feedback & Forgot Password */}
      <div className="mt-5 flex items-center justify-between">
        <p className="font-arimoFont text-lg text-customGray font-bold">Feedback</p>
        <Link href="/forgotPassword">
          <p className="font-arimoFont text-lg text-gladGreen font-bold">
            Forget Password
          </p>
        </Link>
      </div>

      {/* Remember Me */}
      <div className="flex items-center gap-2 mt-4">
        <input type="checkbox" id="rememberMe" className="w-5 h-5" />
        <label htmlFor="rememberMe" className="text-lg font-bold">
          Remember Me
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-customPurple flex mt-5 rounded-md items-center font-abrilFont text-white w-full p-4 gap-2 justify-center"
      >
        <p>Log in</p>
        <Image src={move} alt="Move Icon" className="w-4" />
      </button>

      {/* Sign Up Link */}
      <div className="mt-5 text-center">
        <p className="font-arimoFont font-bold">
          Don’t have an account?
          <Link href="/signUp">
            <span className="underline text-customGreen"> Sign Up</span>
          </Link>
        </p>
      </div>
    </form>
  );
}
