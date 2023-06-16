import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import SignInForm from "./Forms/SignInForm";
import SignUpForm from "./Forms/SignUpForm";

interface ModalProps {
  formHeading: string;
  buttonLable: string;
  onClose: () => void;
}

const ModalBody = ({ onClose, formHeading, buttonLable }: ModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40">
      <div className="bg-white w-[40rem] p-8 rounded-lg shadow-xl">
        <div className=" relative">
          <h2 className=" text-lg md:text-[1.8rem] font-Pacifico font-bold text-center mb-4">
            {formHeading}
          </h2>
          <div
            onClick={onClose}
            className=" absolute top-1 right-3 text-2xl cursor-pointer"
          >
            <VscChromeClose className=" hover:scale-110" />
          </div>
        </div>
        <hr />
        <div className=" flex flex-col gap-y-5 py-5">
          {formHeading === "Login to your account" ? (
            <SignInForm />
          ) : (
            <SignUpForm />
          )}
        </div>
        <button className=" w-full py-2 hover:bg-gray-800 bg-gray-700 rounded-lg text-white text-3xl font-medium font-Caveat">
          {buttonLable}
        </button>
      </div>
    </div>
  );
};

export default ModalBody;
