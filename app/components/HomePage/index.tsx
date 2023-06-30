"use client";
import React, { useEffect } from "react";
import BlogCard from "../BlogCard";
import axios from "axios";

const HomePage = () => {
  const fatchBlogPost = async () => {
    try {
      const blogData = await axios.get("api/blogs");
      const data = blogData.data;
      console.log("data", data  );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // fatchBlogPost();
  }, []);

  return (
    <div className=" mt-16 mb-10 grid grid-cols-1 w-full justify-center gap-y-14">
      <BlogCard />
    </div>
  );
};

export default HomePage;
