"use client";
import { useGlobalStateContext } from "@/app/context/StateContext";
import React from "react";

const ErrorComponent = () => {
  const { setIsSignupOpen } = useGlobalStateContext();
  return (
    <div>
      <>
        <div className=" flex flex-col text-center justify-center items-center my-64">
          <h1 className=" font-bold font-Caveat text-[45px]">
            Pliese Login to view this page
          </h1>
          <p className=" font-bold font-Caveat text-[30px]">
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
    </div>
  );
};

export default ErrorComponent;
