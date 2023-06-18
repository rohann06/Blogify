"use client";
import Image from "next/image";
import React from "react";
import ShowMoreText from "react-show-more-text";
import { useRouter } from "next/navigation";

const BlogCard = () => {
  const router = useRouter();
  return (
    <div className=" w-[400px] h-[450px] rounded-xl overflow-hidden shadow-lg cursor-pointer">
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
          <h1 className=" text-[20px] font-black font-Montserrat">
            Back to the Future-Revisiting Stranger Hacks: GPT Era
          </h1>
        </div>
        <div className=" my-[17px] text-justify font-medium font-Montserrat text-gray-600">
          <ShowMoreText
            lines={3}
            more="Show more"
            onClick={() => router.push("/addBlogs")}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              tempora commodi illum. Nostrum quaerat natus tempora recusandae.
            </p>
          </ShowMoreText>
        </div>
        <div className=" flex items-center gap-2 text-sm text-gray-500">
          <p className=" underline font-medium cursor-pointer hover:text-gray-600">
            Rohan ahire
          </p>
          <p>.</p>
          <p>Jun 17,2023</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
