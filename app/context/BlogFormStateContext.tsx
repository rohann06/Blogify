"use client";

import React, { createContext, useContext, useState } from "react";

// Define the type for the context state

interface BlogFormContextProps {
  blogTitle: string;
  setBlogTitle: React.Dispatch<React.SetStateAction<string>>;
  blogDetail: string;
  setBlogDetail: React.Dispatch<React.SetStateAction<string>>;
  blogSummary: string;
  setBlogSummary: React.Dispatch<React.SetStateAction<string>>;
}

interface ProviderProps {
  children: React.ReactElement;
}
// Create the initial context state
const BlogFormConetxtProps: BlogFormContextProps = {
  blogTitle: "",
  setBlogTitle: (): string => "",
  blogDetail: "",
  setBlogDetail: (): string => "",
  blogSummary: "",
  setBlogSummary: (): string => "",
};

const BlogFormContext =
  createContext<BlogFormContextProps>(BlogFormConetxtProps);

//Create a Context provoder
export const BlogFormStateContextProvider = ({ children }: ProviderProps) => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDetail, setBlogDetail] = useState("");
  const [blogSummary, setBlogSummary] = useState("");

  const FormStateValues: BlogFormContextProps = {
    blogTitle,
    setBlogTitle,
    blogDetail,
    setBlogDetail,
    blogSummary,
    setBlogSummary,
  };

  return (
    <BlogFormContext.Provider value={FormStateValues}>
      {children}
    </BlogFormContext.Provider>
  );
};

export const useBlogFormContext = () => useContext(BlogFormContext);
