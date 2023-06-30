"use client";

import React, { createContext, useContext, useState } from "react";

// Define the type for the context state

interface BlogFormContextProps {
  title: string;
  setBlogTitle: React.Dispatch<React.SetStateAction<string>>;
  content: string;
  setBlogDetail: React.Dispatch<React.SetStateAction<string>>;
  summary: string;
  setBlogSummary: React.Dispatch<React.SetStateAction<string>>;
  published: boolean;
  setPublished: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ProviderProps {
  children: React.ReactElement;
}
// Create the initial context state
const BlogFormConetxtProps: BlogFormContextProps = {
  title: "",
  setBlogTitle: (): string => "",
  content: "",
  setBlogDetail: (): string => "",
  summary: "",
  setBlogSummary: (): string => "",
  published: true,
  setPublished: () => {},
};

const BlogFormContext =
  createContext<BlogFormContextProps>(BlogFormConetxtProps);

//Create a Context provoder
export const BlogFormStateContextProvider = ({ children }: ProviderProps) => {
  const [title, setBlogTitle] = useState("");
  const [content, setBlogDetail] = useState("");
  const [summary, setBlogSummary] = useState("");
  const [published, setPublished] = useState(true);

  const FormStateValues: BlogFormContextProps = {
    title,
    setBlogTitle,
    content,
    setBlogDetail,
    summary,
    setBlogSummary,
    published,
    setPublished,
  };

  return (
    <BlogFormContext.Provider value={FormStateValues}>
      {children}
    </BlogFormContext.Provider>
  );
};

export const useBlogFormContext = () => useContext(BlogFormContext);
