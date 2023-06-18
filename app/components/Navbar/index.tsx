"use client";

import Link from "next/link";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import SigninModal from "../Modals/SigninModal";
import { useGlobalStateContext } from "@/app/context/StateContext";
import SignupModal from "../Modals/SignUpModal";

const Navbar = () => {
  const { isLoginOpen, setIsLoginOpen, isSignupOpen, setIsSignupOpen } =
    useGlobalStateContext();

  return (
    <div className=" flex justify-between items-center">
      <div className=" flex items-center gap-20">
        <p className=" text-gray-600 text-3xl font-semibold font-Caveat cursor-pointer hover:underline hover:scale-105">
          All Blogs
        </p>
        <p className=" text-gray-600 text-3xl font-semibold font-Caveat cursor-pointer hover:underline hover:scale-105">
          My Blogs
        </p>
      </div>

      <div className=" text-center lg:mt-5 mt-2">
        <Link href={"/"}>
          <div>
            <p className="font-Pacifico text-[27px] md:text-[45px] text-gray-600">
              Blogify
            </p>
            <p className=" mt-1 text-sm md:text-2xl font-Caveat text-gray-500">
              Speak with your words
            </p>
          </div>
        </Link>

        {/* Mobile NavOption */}
        <div className=" md:hidden absolute top-6 right-5 text-[24px] lg:top-9 lg:right-20 lg:text-[25px] cursor-pointer drop-shadow-xl md:p-3 rounded-full md:border border-gray-400">
          <RxHamburgerMenu className=" hover:scale-105 " />
        </div>
      </div>

      <div className=" flex items-center gap-20">
        {/* <p className=" text-3xl font-semibold font-Caveat cursor-pointer hover:underline hover:scale-105">
          Add Blogs
        </p> */}
        <p
          onClick={() => setIsLoginOpen(true)}
          className=" text-gray-600 text-3xl font-semibold font-Caveat cursor-pointer hover:underline hover:scale-105"
        >
          Sign in
        </p>
        <p
          onClick={() => setIsSignupOpen(true)}
          className=" text-gray-600 text-3xl font-semibold font-Caveat cursor-pointer hover:underline hover:scale-105"
        >
          Sign up
        </p>
        {/* <p className=" text-3xl font-semibold font-Caveat cursor-pointer hover:underline hover:scale-105">
          Log out
        </p> */}
      </div>

      {isLoginOpen && <SigninModal />}
      {isSignupOpen && <SignupModal />}
    </div>
  );
};

export default Navbar;
