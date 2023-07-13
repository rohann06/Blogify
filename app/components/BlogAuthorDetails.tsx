"use client";
import React from "react";
import UserAvetar from "./UserAvetar";

interface BlogAuthorDetailsProrps {
  authorImage: string;
  author: string;
  publishedDate: string;
}

const BlogAuthorDetails = ({
  authorImage,
  author,
  publishedDate,
}: BlogAuthorDetailsProrps) => {


  //Creating a date
  const date = new Date(publishedDate);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div className=" flex items-center gap-2 text-sm text-gray-500">
      <div>
        <UserAvetar authorImage={authorImage} />
      </div>
      <p className=" underline font-medium cursor-pointer hover:text-gray-600">
        {author}
      </p>
      <p>.</p>
      <p> {formattedDate}</p>
     
    </div>
  );
};

export default BlogAuthorDetails;
