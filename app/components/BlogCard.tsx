"use client";
import React from "react";
import ShowMoreText from "react-show-more-text";
import { useRouter } from "next/navigation";
import Link from "next/link";
import UserAvetar from "./UserAvetar";
import BlogAuthorDetails from "./BlogAuthorDetails";

interface BlogCardProps {
  title: string;
  summary: string;
  author: string;
  publishedDate: string;
  id: string;
  authorImage?: any;
}

const BlogCard = ({
  title,
  summary,
  author,
  publishedDate,
  id,
  authorImage,
}: BlogCardProps) => {
  const router = useRouter();

  return (
    <Link href={{ pathname: `/blogDetails/${id}` }}>
      <div className="w-full rounded-xl overflow-hidden cursor-pointer border-2 border-gray-300 hover:shadow-md">
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
          <div className=" flex items-center">
            <BlogAuthorDetails
              publishedDate={publishedDate}
              author={author}
              authorImage={authorImage}
            />
            <div className=" ml-5">
              Comment <span className=" font-medium text-[15px]">(0)</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
