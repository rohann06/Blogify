"use client";
import Image from "next/image";
import React from "react";
import ShowMoreText from "react-show-more-text";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  summary: string;
  author: string;
  publishedDate: string;
  id: string;
}

const BlogCard = ({
  title,
  summary,
  author,
  publishedDate,
  id,
}: BlogCardProps) => {
  const router = useRouter();

  //Creating a date
  const date = new Date(publishedDate);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div className="w-full rounded-xl overflow-hidden cursor-pointer border-2 border-gray-300 hover:shadow-md">
      <Link href={`blogDetails`}>
        <div className="px-5 py-4 w-full">
          <div>
            <h1 className=" text-[28px] font-black font-Montserrat">{title}</h1>
          </div>
          <div className=" mt-[5px] mb-[15px] text-justify font-Montserrat text-gray-600">
            <ShowMoreText
              lines={2}
              more="Show more"
              onClick={() => router.push("/blogDetails")}
            >
              <p>{summary}</p>
            </ShowMoreText>
          </div>
          <div className=" flex items-center gap-2 text-sm text-gray-500">
            <p className=" underline font-medium cursor-pointer hover:text-gray-600">
              {author}
            </p>
            <p>.</p>
            <p> {formattedDate}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
