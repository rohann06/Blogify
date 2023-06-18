import React from "react";

const AddBlogForm = () => {
  return (
    <div className=" w-full p-5 border-2 rounded-lg">
      <p className=" text-center text-[25px] font-semibold font-Pacifico mb-5">
        Add Your Blog
      </p>
      <hr />
      <form className=" flex flex-col justify-center gap-y-7 my-5">
        <div></div>
        <div>
          <p className=" font-Caveat text-xl font-semibold">Blog Title</p>
          <input
            type="text"
            className=" w-full border border-black rounded-lg mt-2 py-[13px] px-5 font-Montserrat font-medium"
          />
        </div>
        <div>
          <p className=" font-Caveat text-xl font-semibold">Blog Summary</p>
          <textarea
            rows={4}
            className=" w-full border border-black rounded-lg mt-2 py-[13px] px-5 font-Montserrat font-medium"
          />
          <p className=" text-sm font-Montserrat font-medium text-gray-400">
            0/200
          </p>
        </div>

        <div>
          <p className=" font-Caveat text-xl font-semibold">Blog Content</p>
          <textarea
            rows={10}
            className=" w-full border border-black rounded-lg mt-2 py-[13px] px-5 font-Montserrat font-medium"
          />
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
