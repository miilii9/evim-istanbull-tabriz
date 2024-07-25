"use client";
import React, { useEffect } from "react";

export default function BlogDetails({ data, params, searchParams }) {
  useEffect(() => {
    return () => {};
  }, []);
  // const blog = data.find((item) => item._id === data.params.id);
  console.log(data);
  return (
    <div className='flex flex-col items-center gap-8 mb-64 mt-40 w-4/5 mx-auto'>
      <h2 className='text-3xl'>{data.title}</h2>

      <figure className='lg:w-1/2 flex justify-start items-center'>
        <img src={data.image} alt='Album' className='md:h-96 w-full' />
      </figure>
      <div
        dangerouslySetInnerHTML={{
          __html: atob(unescape(decodeURIComponent(data.content))),
        }}
      />

    </div>
  );
}
