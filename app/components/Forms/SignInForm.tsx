import React from "react";

const SignInForm = () => {
  return (
    <>
      <div>
        <label className=" font-Caveat text-xl font-medium" htmlFor="email">
          Email
        </label>
        <input type="email" className=" w-full border-2 rounded-lg py-2 px-3" />
      </div>
      <div>
        <label className=" font-Caveat text-xl font-medium" htmlFor="email">
          Password
        </label>
        <input
          type="password"
          className=" w-full border-2 rounded-lg py-2 px-3"
        />
      </div>
    </>
  );
};

export default SignInForm;
