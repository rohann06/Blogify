"use client";

import React, { useEffect } from "react";
import BlogCard from "../BlogCard";
import { useSession } from "next-auth/react";
import { useGlobalStateContext } from "@/app/context/StateContext";
import SigninModal from "../Modals/SigninModal";
import SignupModal from "../Modals/SignUpModal";

const MyBlog = () => {
  const { isLoginOpen, setIsLoginOpen, isSignupOpen, setIsSignupOpen } =
    useGlobalStateContext();
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      setIsLoginOpen(true);
    }
  }, []);
  return (
    <>
      {session && session?.user ? (
        <>
          <div className=" mt-16 mb-10 grid grid-cols-1 w-full justify-center gap-y-14">
            <BlogCard />
            <BlogCard />
          </div>
        </>
      ) : (
        <>
          <div className=" flex flex-col text-center justify-center items-center my-64">
            <h1 className=" font-bold font-Caveat text-[45px]">
              Pliese Login to view this page
            </h1>
            <p className=" font-bold font-Caveat text-[30px]">
              {" "}
              <span
                onClick={() => setIsSignupOpen(true)}
                className=" underline cursor-pointer"
              >
                Create yout account
              </span>{" "}
              here
            </p>
          </div>
        </>
      )}
      {isLoginOpen && <SigninModal />}
      {isSignupOpen && <SignupModal />}
    </>
  );
};

export default MyBlog;
