"use client";
import { useGlobalStateContext } from "@/app/context/StateContext";
import React, { useState } from "react";
import axios from "axios";

const CommentForm = () => {
  const { comment, setComment } = useGlobalStateContext();
  const [isLoading, setIsLoading] = useState(false);

  const handleComment = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    const data = { comment };

    axios.post("api/postComment", data);
  };

  return (
    <form onSubmit={handleComment} className=" w-full rounded-lg">
      <p className=" font-Montserrat font-semibold text-lg">Add Comment</p>
      <textarea
        required
        name="comment"
        rows={4}
        className=" w-full border border-black rounded-lg mt-2 py-[13px] px-5 font-Montserrat font-medium"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        type="submit"
        className=" font-Montserrat font-semibold text-lg px-5 py-2 text-white bg-gray-700 hover:bg-gray-500 mt-2 rounded-lg"
      >
        Comment
      </button>
    </form>
  );
};

export default CommentForm;
