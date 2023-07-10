'use client'
import React from "react";

const CommentForm = () => {
  return (
    <div className=" w-full rounded-lg">
      <p className=" font-Montserrat font-semibold text-lg">Add Comment</p>
      <textarea
        name="comment"
        rows={4}
        className=" w-full border border-black rounded-lg mt-2 py-[13px] px-5 font-Montserrat font-medium"
      />
      <button className=" font-Montserrat font-semibold text-lg px-5 py-2 text-white bg-gray-700 hover:bg-gray-500 mt-2 rounded-lg">
        Comment
      </button>
    </div>
  );
};

export default CommentForm;
