import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div>
      <div className=" text-center lg:mt-5 mt-2">
        <div>
          <p className="font-Pacifico text-[27px] md:text-[45px] text-gray-600">
            Blogify
          </p>
          <p className=" mt-1 text-lg md:text-2xl font-Caveat text-gray-500">
            Speak with your words
          </p>
        </div>

        <div className=" absolute top-6 right-5 text-[24px] lg:top-9 lg:right-20 lg:text-[25px] cursor-pointer drop-shadow-xl md:p-3 rounded-full md:border border-gray-400">
          <RxHamburgerMenu className=" hover:scale-105 " />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
