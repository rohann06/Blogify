"use client";
import { useGlobalStateContext } from "@/app/context/StateContext";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface CommentFormProps {
  authorId: string;
  blogId: string;
  
}

const CommentForm = ({ authorId, blogId }: CommentFormProps) => {
  const { comment, setComment } = useGlobalStateContext();
  const [isLoading, setIsLoading] = useState(false);

  const handleComment = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    const data = { content: comment, authorId, blogId };
    axios
      .post("api/blogs/blogComment", data)
      .then((response) => {
        console.log("response", response);
        toast.success("Commented successfully");
      })
      .catch((error) => {
        console.log("SubmitError", error.response.data);
        toast.error("Oops! Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });

    console.log("Commented: ", blogId);
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
        {isLoading ? (
          <div className=" flex justify-center items-center text-xl">
            <AiOutlineLoading3Quarters className="animate-spin" />
          </div>
        ) : (
          
          "Comment"
        )}
      </button>
    </form>
  );
};

export default CommentForm;
