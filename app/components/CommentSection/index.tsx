"use client";
import React from "react";
import CommentForm from "../Forms/CommentForm";

interface CommentSectionProps {
  authorId: string;
  blogId: string;
}

const CommentSection = ({
  authorId,
  blogId,
}: CommentSectionProps) => {
  return (
    <div>
      <div>
        <CommentForm blogId={blogId} authorId={authorId} />
      </div>
    </div>
  );
};

export default CommentSection;
