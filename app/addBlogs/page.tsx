import React from "react";
import AddBlogForm from "../components/Forms/AddBlogForm";
import { BlogFormStateContextProvider } from "../context/BlogFormStateContext";

const AddBlogs = () => {
  return (
    <BlogFormStateContextProvider>
      <>
        <div className=" mt-16 mb-10">
          <AddBlogForm />
        </div>
      </>
    </BlogFormStateContextProvider>
  );
};

export default AddBlogs;
