"use client";

import Link from "next/link";
import React from "react";
import SigninModal from "../Modals/SigninModal";
import { useGlobalStateContext } from "@/app/context/StateContext";
import SignupModal from "../Modals/SignUpModal";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import MobileNav from "../MobileNav";

const Navbar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const { isLoginOpen, setIsLoginOpen, isSignupOpen, setIsSignupOpen } =
    useGlobalStateContext();

  
  return (
    // <div className=" hidden md:block">
    <div className=" flex justify-between items-center">
      <div className=" hidden md:block">
        <div className=" flex items-center gap-60">
          <Link href={"/"}>
            <div>
              <p className=" group transition-all duration-300 ease-in-out text-gray-600 text-3xl font-semibold font-Caveat cursor-pointer hover:scale-105 mb-3">
                <div
                  className={`bg-left-bottom bg-gradient-to-r from-black to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-in-out pb-3 ${
                    pathname === "/" &&
                    "bg-left-bottom bg-gradient-to-r from-black to-pink-500 bg-no-repeat bg-[length:100%_2px] transition-all"
                  }`}
                >
                  <span className=" ">All Blogs</span>
                </div>
              </p>
            </div>
          </Link>

          <Link href={"/myBlogs"}>
            <div>
              <p className=" group transition-all duration-300 ease-in-out text-gray-600 text-3xl font-semibold font-Caveat cursor-pointer hover:scale-105 mb-3">
                <div
                  className={`bg-left-bottom bg-gradient-to-r from-black to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-in-out pb-3 ${
                    pathname === "/myBlogs" &&
                    "bg-left-bottom bg-gradient-to-r from-black to-pink-500 bg-no-repeat bg-[length:100%_2px] transition-all"
                  }`}
                >
                  <span className=" ">My Blogs</span>
                </div>
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className=" flex justify-around items-center  md:text-center lg:mt-5 mt-2">
        <Link href={"/"}>
          <div>
            <p className="font-Pacifico text-[27px] md:text-[50px] text-gray-600">
              Blogify
            </p>
            <p className=" mt-1 text-sm md:text-2xl font-Caveat text-gray-500">
              Speak with your words
            </p>
          </div>
        </Link>

        {/* Mobile NavOption */}
        <MobileNav/>
      </div>

      <div className=" hidden md:block">
        <div className=" flex items-center gap-60">
          {session ? (
            <>
              {" "}
              <Link href={"/addBlogs"}>
                <div>
                  <p className=" group transition-all duration-300 ease-in-out text-gray-600 text-3xl font-semibold font-Caveat cursor-pointer hover:scale-105 mb-3">
                    <div
                      className={`bg-left-bottom bg-gradient-to-r from-black to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-in-out pb-3 ${
                        pathname === "/addBlogs" &&
                        "bg-left-bottom bg-gradient-to-r from-black to-pink-500 bg-no-repeat bg-[length:100%_2px] transition-all"
                      }`}
                    >
                      <span className=" ">Add Blogs</span>
                    </div>
                  </p>
                </div>
              </Link>
              <div>
                <p
                  onClick={() => signOut()}
                  className=" group transition-all duration-300 ease-in-out text-gray-600 text-3xl font-semibold font-Caveat cursor-pointer hover:scale-105 mb-3"
                >
                  <div
                    className={`bg-left-bottom bg-gradient-to-r from-black to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-in-out pb-3 ${
                      pathname === " " &&
                      "bg-left-bottom bg-gradient-to-r from-black to-pink-500 bg-no-repeat bg-[length:100%_2px] transition-all"
                    }`}
                  >
                    <span className=" ">Logout</span>
                  </div>
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <p
                  onClick={() => setIsLoginOpen(!isLoginOpen)}
                  className=" group transition-all duration-300 ease-in-out text-gray-600 text-3xl font-semibold font-Caveat cursor-pointer hover:scale-105 mb-3"
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
              <div>
                <p
                  onClick={() => setIsSignupOpen(!isSignupOpen)}
                  className=" group transition-all duration-300 ease-in-out text-gray-600 text-3xl font-semibold font-Caveat cursor-pointer hover:scale-105 mb-3"
                >
                  <div
                    className={`bg-left-bottom bg-gradient-to-r from-black to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-in-out pb-3 ${
                      isSignupOpen &&
                      "bg-left-bottom bg-gradient-to-r from-black to-pink-500 bg-no-repeat bg-[length:100%_2px] transition-all"
                    }`}
                  >
                    <span className=" ">Sign Up</span>
                  </div>
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {isLoginOpen && <SigninModal />}
      {isSignupOpen && <SignupModal />}
    </div>
  );
};

export default Navbar;
