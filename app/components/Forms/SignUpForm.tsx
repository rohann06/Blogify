"use client";
import React from "react";
import { useGlobalStateContext } from "@/app/context/StateContext";
import axios from "axios";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const SignUpForm = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    setIsSignupOpen,
    setIsLoginOpen,
    isLoading,
    setIsLoading,
  } = useGlobalStateContext();

  const data = { name, email, password };
  console.log("data", data);

  // Form handler
  const registerUser = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    axios
      .post("api/register", data)
      .then(() => toast.success("User registered successfully"))
      .catch(() => toast.error("Opps! something went wrong"));
    setIsLoading(false);
    
    setIsSignupOpen(false);
    setIsLoginOpen(true);
  };

  return (
    <form onSubmit={registerUser} className=" flex flex-col gap-y-5">
      <div>
        <label className=" font-Montserrat font-medium" htmlFor="name">
          User Name <span className=" text-red-500">*</span>
        </label>
        <input
          name="userName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          required
          className=" w-full border-2 rounded-lg py-2 px-3"
        />
      </div>
      <div>
        <label className=" font-Montserrat font-medium" htmlFor="email">
          Email <span className=" text-red-500">*</span>
        </label>
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          className=" w-full border-2 rounded-lg py-2 px-3"
        />
      </div>
      <div>
        <label className=" font-Montserrat font-medium" htmlFor="password">
          Password <span className=" text-red-500">*</span>
        </label>
        <input
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
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
          "Sign Up"
        )}
      </button>
    </form>
  );
};

export default SignUpForm;
