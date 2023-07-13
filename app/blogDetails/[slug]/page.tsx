"use client";
import React, { useEffect, useState } from "react";
import Blogdetail from "../../components/Blogdetail";
import axios from "axios";

type URL = {
  params: {
    slug: string;
  };
  searchParams: string;
};

type Blog = {
  id: string;
  title: string;
  authorId: string;
  content: string;
  createdAt: string;
  published: true;
  summary: string;
  updatedAt: string;
  author: {
    image: any;
    email: string;
    name: string;
  };
};

const BlogDetails = (id: URL) => {
  const authorId = id.params.slug;
  const [blogDetails, setBlogDetails] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  //Fetch  posts
  const fetchDetails = async () => {
    setIsLoading(true);
    const response = await axios.get(`/api/blogs`);
    console.log("response", response.data);
    setBlogDetails(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDetails();
  }, [authorId]);

  console.log("BlogDetail", blogDetails);
  return (
    <div className=" mt-24 mb-20">
      {blogDetails.map((blogDetail) => (
        <>
          {blogDetail?.id === authorId && (
            <Blogdetail blogDetail={blogDetail} authorId={authorId} />
          )}
        </>
      ))}
    </div>
  );
};

export default BlogDetails;
