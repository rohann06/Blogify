"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSession } from "next-auth/react";
import { useGlobalStateContext } from "@/app/context/StateContext";

const MobileNav = () => {
  const { data: session } = useSession();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { isLoginOpen, setIsLoginOpen } = useGlobalStateContext();
  return (
    <>
      <div className=" md:hidden text-[24px] lg:top-9 lg:right-20 lg:text-[25px] cursor-pointer drop-shadow-xl md:p-3 rounded-full md:border border-gray-400">
        {session?.user ? (
          <>
            <RxHamburgerMenu
              onClick={() => setIsMobileNavOpen(true)}
              className=" hover:scale-105 "
            />
            {isMobileNavOpen && <div className=" bg-white w-screen h-screen flex text-center justify-center">Option</div>}
          </>
        ) : (
          <div>
            <p
              onClick={() => setIsLoginOpen(!isLoginOpen)}
              className=" group transition-all duration-300 ease-in-out text-gray-600 md:text-3xl font-semibold font-Caveat cursor-pointer hover:scale-105 mb-3"
            >
              <div
                className={`bg-left-bottom bg-gradient-to-r from-black to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-in-out pb-3 ${
                  isLoginOpen &&
                  "bg-left-bottom bg-gradient-to-r from-black to-pink-500 bg-no-repeat bg-[length:100%_2px] transition-all"
                }`}
              >
                <span className=" ">Sign In</span>
              </div>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNav;
