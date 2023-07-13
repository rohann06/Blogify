"use client";
import React from "react";

interface AllCommentProps {
  comments: any;
}

const AllComments = ({ comments }: AllCommentProps) => {
  return (
    <div className=" bg-white w-full p-5">
      <h1 className=" text-lg font-semibold font-Montserrat">
        Comments ({comments.length})
      </h1>
      <div className=" mt-10"></div>
    </div>
  );
};

export default AllComments;
