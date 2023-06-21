"use client";
import Image from "next/image";
import React from "react";
import ShowMoreText from "react-show-more-text";
import { useRouter } from "next/navigation";

const BlogCard = () => {
  const router = useRouter();
  return (
    <div className=" bg-gradient-to-r from-black to-pink-500 bg-no-repeat bg-[length:100%_4px] transition-all w-full rounded-xl overflow-hidden shadow-lg cursor-pointer border-2 border-gray-300 hover:shadow-xl">
      <div className="px-5 py-4 w-full">
        <div>
          <h1 className=" text-[28px] font-black font-Montserrat">
            Back to the Future-Revisiting Stranger Hacks: GPT Era
          </h1>
        </div>
        <div className=" mt-[5px] mb-[15px] text-justify font-Montserrat text-gray-600">
          <ShowMoreText
            lines={2}
            more="Show more"
            onClick={() => router.push("/addBlogs")}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In odio dignissimos vitae saepe, quos maiores doloribus. Voluptates quibusdam voluptatibus sunt repellendus incidunt, modi placeat. Rerum reiciendis officia inventore vero explicabo! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero labore aliquam tempora itaque officia, corrupti placeat accusantium. Sed facilis cum porro consequuntur beatae vel voluptatum consequatur expedita hic, alias quas.
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
