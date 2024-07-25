"use client";
import Link from "next/link";
export default function MainPageBlogs({ data }) {

  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto w-4/5 px-6 lg:px-8'>
        <div className='mx-auto w-full lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            بلاگ ها
          </h2>
          <p className='mt-2 text-lg leading-8 text-gray-600'>
            با ما بهترین هارا تجربه کنید
          </p>
        </div>
        <div className='mx-auto mt-10 grid  grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:w-full lg:grid-cols-3'>
          {data?.map((post) => (
            <Link href={`/blogs/${post._id}/${post.slug}`} className>
              <div className='card w-96 bg-base-100 shadow-xl'>
                <figure>
                  <img
                    src={post.image}
                    alt='Shoes'
                    className='object-contain	h-48 w-full rounded-t-xl'
                  />
                </figure>
                <div className='card-body'>
                  <h2 className='card-title'>{post.title}</h2>
                  <p>{post.brief}</p>
                  <div className='card-actions justify-end'>
                    {post.tags.map((item, q) => (
                      <div className='badge badge-outline'>{item.name}</div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
