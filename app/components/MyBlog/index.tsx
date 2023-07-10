"use client";

import React, { useEffect, useState } from "react";
import BlogCard from "../BlogCard";
import { useSession } from "next-auth/react";
import { useGlobalStateContext } from "@/app/context/StateContext";
import SigninModal from "../Modals/SigninModal";
import SignupModal from "../Modals/SignUpModal";
import ErrorComponent from "../ErrorComponent";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

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

const MyBlog = () => {
  const router = useRouter();
  const [myBlogs, setMyBlogs] = useState<Blog[]>([]);
  const { isLoginOpen, isSignupOpen, setIsLoading } = useGlobalStateContext();
  const { data: session } = useSession();

  const fetchMyBlogPosts = async () => {
    try {
      setIsLoading(true);
      const blogData = await axios.get(`api/blogs`);
      setMyBlogs(blogData.data);
      console.log("Mydata", blogData?.data);
      console.log("user", session?.user?.email);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMyBlogPosts();
  }, []);

  return (
    <>
      {session && session?.user ? (
        <div className=" mt-16 mb-10 grid grid-cols-1 w-full justify-center gap-y-14">
          <>
            {myBlogs.map((myblog) => (
              <>
                {session?.user?.email === myblog?.authorId ? (
                  <BlogCard
                    key={myblog?.id}
                    id={myblog?.id}
                    title={myblog?.title}
                    summary={myblog?.summary}
                    author={myblog?.author?.name}
                    authorImage={myblog?.author?.image}
                    publishedDate={myblog?.createdAt}
                  />
                ) : (
                  <>
                    <div className=" text-center my-9">
                      <Image
                        className=" felx justify-center items-center m-auto"
                        src={"/noBlogFound.png"}
                        alt="erroImg"
                        height={550}
                        width={550}
                      />
                      <p className=" text-4xl font-Caveat ">
                        Write Your First Blog{" "}
                        <span
                          onClick={() => router.push("/addBlog")}
                          className=" underline cursor-pointer"
                        >
                          {" "}
                          here{" "}
                        </span>
                      </p>
                    </div>
                  </>
                )}
              </>
            ))}
          </>
        </div>
      ) : (
        <>
          <ErrorComponent />
        </>
      )}
      {isLoginOpen && <SigninModal />}
      {isSignupOpen && <SignupModal />}
    </>
  );
};

export default MyBlog;
