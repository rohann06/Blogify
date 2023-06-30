"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "../BlogCard";
import axios from "axios";
import { data } from "autoprefixer";

type Blog = {
  id: string;
  title: string;
  authorId: string;
  content: string;
  createdAt: string;
  published: true;
  summary: string;
  updatedAt: string;
  author: ()=>{}
};

const HomePage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchBlogPosts = async () => {
    try {
      const blogData = await axios.get("api/blogs");
      setBlogs(blogData.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  useEffect(() => {
    console.log("data", blogs);
  }, [blogs]);

  return (
    <div className=" mt-16 mb-10 grid grid-cols-1 w-full justify-center gap-y-14">
      <BlogCard />
      {blogs.map((blog) => (
        <div>{blog?.author?.name}</div>
      ))}
    </div>
  );
};

export default HomePage;
