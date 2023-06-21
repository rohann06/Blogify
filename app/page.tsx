import Image from "next/image";
import BlogCard from "./components/BlogCard";

export default function Home() {
  return (
    <main>
      <div className=" mt-16 mb-10 grid grid-cols-1 w-full justify-center gap-y-14">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </main>
  );
}
