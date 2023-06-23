import React from "react";

const SignUpForm = () => {
  return (
    <>
      <div>
        <label className=" font-Montserrat font-medium" htmlFor="name">
          User Name
        </label>
        <input type="text" className=" w-full border-2 rounded-lg py-2 px-3" />
      </div>
      <div>
        <label className=" font-Montserrat font-medium" htmlFor="email">
          Email
        </label>
        <input type="email" className=" w-full border-2 rounded-lg py-2 px-3" />
      </div>
      <div>
        <label className=" font-Montserrat font-medium" htmlFor="password">
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

export default SignUpForm;
