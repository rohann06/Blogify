import Image from "next/image";
import BlogCard from "./components/BlogCard";

export default function Home() {
  return (
    <main>
      <div className=" mt-16 mb-10 grid grid-cols-3 justify-center gap-x-16 gap-y-10">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </main>
  );
}
