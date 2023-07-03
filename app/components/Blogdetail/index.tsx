"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import ErrorComponent from "../ErrorComponent";
import { useGlobalStateContext } from "@/app/context/StateContext";

const Blogdetail = () => {
  const { data: session } = useSession();
  const { setIsLoginOpen } = useGlobalStateContext();
  
  //If user is not logged in
  useEffect(() => {
    if (!session) {
      setIsLoginOpen(true);
    }
  }, []);

  return (
    <>
      {session && session?.user ? (
        <>
          <div className=" flex justify-center">
            <div className=" w-[80%]">
              <div className=" mb-10">
                <h1 className=" text-[40px] font-black font-Montserrat">
                  Back to the Future-Revisiting Stranger Hacks: GPT Era
                </h1>
                <p className=" text-gray-500">
                  written by{" "}
                  <a href="#" className=" text-[17px] font-medium underline">
                    Rohan Ahire
                  </a>
                </p>
              </div>

              <div>
                <div>
                  <p className=" text-justify text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni repudiandae earum voluptatem amet quia sit minus non
                    quos ea dignissimos excepturi, doloremque eveniet nulla
                    itaque et eos ipsam debitis illo! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Eius, numquam adipisci.
                    Reprehenderit, reiciendis. Aliquam sunt sint dignissimos
                    facilis. Eum cum distinctio molestiae nisi voluptatum odit
                    officia commodi aperiam sed odio. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Repellendus, tempora?
                    Doloribus autem et rem mollitia, quidem magnam ex temporibus
                    dignissimos, fugit nihil, cum nobis harum distinctio nulla
                    consectetur amet non! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Sint harum vero quisquam. Doloribus
                    asperiores culpa ut, sint illum vel nobis sequi earum
                    laudantium doloremque neque recusandae soluta dignissimos in
                    accusamus. Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Cumque dignissimos explicabo natus
                    distinctio laborum porro nam illo commodi iure fugit, vitae
                    incidunt omnis aperiam? Nesciunt voluptates perspiciatis
                    deserunt nostrum qui! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Unde, dolorum molestiae esse perferendis
                    maiores dignissimos nemo expedita rerum assumenda obcaecati
                    quod. Aut aliquam sit iure rem perspiciatis totam illum
                    nobis! Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Est facere nemo, nulla, quaerat facilis, quis quam
                    recusandae vel eum architecto ab dignissimos vero voluptatem
                    error deleniti iste? Nisi, amet impedit? Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Quasi quos tempore
                    eligendi laboriosam, non, voluptas unde sequi eveniet
                    aliquid excepturi magni nesciunt cum. Sunt modi quam, neque
                    quis voluptates ea!
                  </p>
                </div>
                <div className=" mt-10">
                  <p className=" text-lg font-semibold mb-2">Summary : </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat placeat dolorem iste! Aut exercitationem inventore
                    quod omnis, laborum veniam modi maiores ullam rem quasi
                    eveniet iusto officiis. Animi, provident odio? Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Quod eveniet
                    dicta pariatur nam ipsam quo facere ut exercitationem
                    dolorem sapiente, excepturi recusandae debitis iusto et
                    facilis sint illum delectus officiis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <ErrorComponent />
        </>
      )}
    </>
  );
};

export default Blogdetail;
