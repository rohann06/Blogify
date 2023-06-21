"use client";
import React, { useState } from "react";

const AddBlogForm = () => {
  const [summary, setSummary] = useState("");
  const [blogTitle, seBlogTitle] = useState("");
  const [blogDetail, setBlogDetail] = useState("");

  return (
    <div className=" w-full p-5 border-2 rounded-xl shadow-lg">
      <div className=" bg-left-bottom bg-gradient-to-r from-slate-500 to-pink-500 bg-no-repeat bg-[length:100%_3px] transition-all pb-[0.5px]">
        <p className=" text-gray-800 text-center text-[25px] font-semibold font-Pacifico mb-5">
          Add Your Blog
        </p>
      </div>

      <form className=" flex flex-col justify-center gap-y-7 mt-10 mb-5">
        <div>
          <p className=" font-Caveat text-xl font-semibold">Blog Title</p>
          <input
            type="text"
            className=" w-full border border-black rounded-lg mt-2 py-[13px] px-5 font-Montserrat font-medium"
            onChange={(e) => seBlogTitle(e.target.value)}
          />
        </div>

        <div>
          <p className=" font-Caveat text-xl font-semibold">Blog Content</p>
          <textarea
            rows={10}
            className=" w-full border border-black rounded-lg mt-2 py-[13px] px-5 font-Montserrat font-medium"
            onChange={(e) => setBlogDetail(e.target.value)}
          />
        </div>

        <div>
          <p className=" font-Caveat text-xl font-semibold">Blog Summary</p>
          <textarea
            rows={6}
            maxLength={500}
            className=" w-full border border-black rounded-lg mt-2 py-[13px] px-5 font-Montserrat font-medium"
            onChange={(e) => setSummary(e.target.value)}
          />
          <p
            className={` ${
              summary.length === 500 ? "text-red-700" : "text-gray-400"
            } text-sm font-Montserrat font-medium `}
          >
            {summary.length}/{500 - summary.length}
          </p>
        </div>
        <div className="flex justify-center items-center w-full">
          <button
            type="submit"
            className=" w-1/2 px-20 py-3 font-semibold text-2xl bg-gray-700 text-white rounded-xl hover:bg-gray-800"
          >
            Post Blog 🚀
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlogForm;
