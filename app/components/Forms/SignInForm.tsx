import React from "react";
import { useGlobalStateContext } from "@/app/context/StateContext";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const SignInForm = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    setIsLoginOpen,
    isLoading,
    setIsLoading,
  } = useGlobalStateContext();

  return (
    <form className=" flex flex-col gap-y-5">
      <div>
        <label className=" font-Montserrat font-medium" htmlFor="email">
          Email
        </label>
        <input type="email" className=" w-full border-2 rounded-lg py-2 px-3" />
      </div>
      <div>
        <label className=" font-Montserrat font-medium" htmlFor="email">
          Password
        </label>
        <input
          type="password"
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
