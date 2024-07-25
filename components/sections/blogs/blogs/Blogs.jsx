import Link from "next/link";
import React from "react";

export default function Blogs({ data }) {
  return (
    <div className='flex flex-col items-center gap-8 mb-64 mt-40 w-4/5 mx-auto'>
      <div className='text-center mt-32 mb-20'>
        <h2 className='font-semibold text-4xl'>بلاگ ها</h2>
      </div>
      <div className='w-full grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-1'>
        {/* {data.length > 0 ? (
          data.map((blog) => (
            <Link
              href={`/blogs/${blog._id}/${blog.slug}`}
              className='lg:w-3/5 mx-auto'>
              <div className='card lg:card-side bg-base-100 shadow-xl w-full flex justify-between'>
                <figure className='lg:w-1/2 flex justify-start items-center'>
                  <img
                    src={blog.image}
                    alt='Album'
                    className='md:h-96 w-full'
                  />
                </figure>
                <div className='card-body'>
                  <h2 className='card-title'>{blog.title}</h2>
                  <p>{blog.brief}</p>
                  <div className='card-actions justify-end'>
                    {blog.tags.map((item, q) => (
                      <div className='badge badge-outline'>{item.name}</div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <span>no data</span>
        )} */}
      </div>
    </div>
  );
}
