"use client";
import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { signOut } from "next-auth/react";

interface isMobileNavOpen {
  setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNavOpens = ({ setIsMobileNavOpen }: isMobileNavOpen) => {
  return (
    <div className=" flex flex-col my-10 px-10  w-full">
      <div
        onClick={() => setIsMobileNavOpen(false)}
        className=" flex justify-end items-end text-2xl"
      >
        <AiOutlineClose />
      </div>
      <div className=" flex flex-col justify-center items-center gap-y-8 text-2xl font-semibold font-Montserrat my-40">
        <Link onClick={() => setIsMobileNavOpen(false)} href={"/"}>
          <p>Home</p>
        </Link>
        <Link onClick={() => setIsMobileNavOpen(false)} href={"/myBlogs"}>
          <p>My Blogs</p>
        </Link>
        <Link onClick={() => setIsMobileNavOpen(false)} href={"/addBlogs"}>
          <p>Add Blogs</p>
        </Link>
        <Link
          onClick={() => {
            signOut();
            setIsMobileNavOpen(false);
          }}
          href={"/"}
        >
          <p>Logout</p>
        </Link>
      </div>
    </div>
  );
};

export default MobileNavOpens;
