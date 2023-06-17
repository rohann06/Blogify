"use client";
import Image from "next/image";
import React from "react";

const BlogCard = () => {
  return (
    <div className=" w-[400px] rounded-xl overflow-hidden shadow-lg">
      <div className=" h-[220px] w-full">
        <Image
          src={
            "https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/07/image_rec_lib_banner.jpg"
          }
          alt="image"
          height={30}
          width={30}
          className=" h-full w-full "
        />
      </div>
      <div className="px-4 py-5 w-full">
        <div>
          <h1 className=" text-2xl font-extrabold">
            Back to the Future-Revisiting Stranger Hacks: GPT Era
          </h1>
        </div>
        <div className=" my-3 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            tempora commodi illum. Nostrum quaerat natus tempora recusandae.
          </p>
        </div>
        <div  className=" flex items-center gap-2 text-sm text-gray-500">
          <p className=" underline cursor-pointer hover:text-gray-600">Rohan ahire</p>
          <p>.</p>
          <p>Jun 17,2023</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
