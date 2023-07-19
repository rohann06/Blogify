"use client";
import React from "react";
import Image from "next/image";
import { IoPersonSharp } from "react-icons/io5";

interface UserAvetar {
  authorImage: string;
}

const UserAvetar = ({ authorImage }: UserAvetar) => {
  return (
    <div>
      {authorImage ? (
        <div>
          <Image
            className=" rounded-full h-full w-full"
            src={authorImage}
            alt="authorImage"
            height={28}
            width={28}
          />
        </div>
      ) : (
        <div className=" p-[12px] rounded-full bg-gray-200 text-xl">
          <IoPersonSharp />
        </div>
      )}
    </div>
  );
};

export default UserAvetar;
