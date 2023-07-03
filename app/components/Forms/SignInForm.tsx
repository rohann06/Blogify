"use client";

import React, { useState } from "react";
import { useGlobalStateContext } from "@/app/context/StateContext";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { email, setEmail, password, setPassword, setIsLoginOpen } =
    useGlobalStateContext();

  const data = { email, password };

  const userSignin = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    signIn("credentials", { ...data, redirect: false });

    setIsLoading(false);

    setIsLoginOpen(false);
  };

  return (
    <form onSubmit={userSignin} className=" flex flex-col gap-y-5">
      <div>
        <label className=" font-Montserrat font-medium" htmlFor="email">
          Email <span className=" text-red-500">*</span>
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          required
          className=" w-full border-2 rounded-lg py-2 px-3"
        />
      </div>
      <div>
        <label className=" font-Montserrat font-medium" htmlFor="email">
          Password <span className=" text-red-500">*</span>
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          required
          className=" w-full border-2 rounded-lg py-2 px-3"
        />
      </div>
      <button
        type="submit"
        className=" w-full py-2 hover:bg-gray-800 bg-gray-700 rounded-lg text-white text-3xl font-medium font-Caveat"
      >
        {isLoading ? (
          <div className=" flex justify-center items-center text-xl">
            <AiOutlineLoading3Quarters className="animate-spin" />
          </div>
        ) : (
          "Sign In"
        )}
      </button>
    </form>
  );
};

export default SignInForm;
