"use client";
import user from "./login-img/user.svg";
import eyes from "./login-img/eye.svg";
import Image from "next/image";
import move from "./login-img/move.svg";
import accept from "./login-img/accept.svg";
import { useState } from "react";
import Link from "next/link";
export default function LoginForm() {
  const [convert, setConvert] = useState("password");
  const handleClick = () => {
    setConvert(!convert);
    setTimeout(() => {
      setConvert(convert);
    }, 2000);
  };
  return (
    <form className="max-w-[1440px] mx-auto mt-10 px-4 sm:px-6">
      <div className="relative">
        <Image
          src={user}
          alt="user-image"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6"
        />
        <input
          type="text"
          name="text/email"
          required
          className="pl-10 p-4 h-[60px] outline-none border-customPurple border-[1.5px] w-full placeholder:font-bold placeholder:text-customGray placeholder:font-arimoFont"
          placeholder="Username or Email"
        />
      </div>
      <div className="relative mt-6">
        <Image
          src={eyes}
          alt="eye-icon"
          onClick={handleClick}
          className="absolute right-2 top-1/2 cursor-pointer transform -translate-y-1/2 w-6 h-6"
        />

        <input
          type={convert}
          name="password"
          required
          className="pl-3 p-4 h-[60px] outline-none border-customPurple border-[1.5px] w-full placeholder:font-bold placeholder:text-customGray placeholder:font-arimoFont"
          placeholder="Password"
        />
      </div>
      <div className="mt-5 flex items-center makeSmall justify-between">
        <p className="font-arimoFont text-lg text-customGray font-bold">
          Feedback
        </p>
        <Link href="/forgotPassword">
          <p className="font-arimoFont text-lg text-gladGreen font-bold">
            Forget Password
          </p>
        </Link>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <input type="checkbox" className="w-5 h-5" />
        <p className="text-lg font-bold">Remember Me</p>
      </div>
      <button className="bg-customPurple flex mt-5  rounded-md items-center font-abrilFont text-white w-full p-4 gap-2 justify-center">
        <p>Log in</p>
        <Image src={move} alt="move-icon" className="w-4" />
      </button>
      <div className="mt-5 text-center">
        <p className="font-arimoFont font-bold">
          Don’t have an account?
          <Link href='/signUp'>
            <span className="underline text-customGreen"> Sign Up</span>
          </Link>
        </p>
      </div>
    </form>
  );
}
