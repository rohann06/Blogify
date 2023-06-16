"use client";

import React, { createContext, useContext, useState } from "react";

// Define the type for the context state
interface StateContextProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  isLoginOpen: boolean;
  setIsLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSignupOpen: boolean;
  setIsSignupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
interface StateContextProviderProps {
  children: React.ReactElement;
}

// Create the initial context state
const GlobalStateContextProps: StateContextProps = {
  name: "",
  setName: (): string => "",
  email: "",
  setEmail: (): string => "",
  password: "",
  setPassword: (): string => "",
  isLoginOpen: false,
  setIsLoginOpen: () => {},
  isSignupOpen:false,
  setIsSignupOpen:()=>{}
};

//Create context
const GlobalStateContext = createContext<StateContextProps>(
  GlobalStateContextProps
);

//Create context provider
export const GlobleStateContextProvider = ({
  children,
}: StateContextProviderProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const SateContextValues: StateContextProps = {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    isLoginOpen,
    setIsLoginOpen,
    isSignupOpen,
    setIsSignupOpen,
  };

  return (
    <GlobalStateContext.Provider value={SateContextValues}>
      {" "}
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalStateContext = () => useContext(GlobalStateContext);
