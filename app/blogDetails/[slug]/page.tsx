"use client";

import React from "react";
import Blogdetail from "../../components/Blogdetail";
import { useSearchParams } from "next/navigation";

const BlogDetails = () => {
  const searchParams = useSearchParams();

  const id = searchParams.get("id");

  return (
    <div className=" mt-24 mb-20">
      <Blogdetail />
    </div>
  );
};

export default BlogDetails;
