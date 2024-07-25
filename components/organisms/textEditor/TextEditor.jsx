"use client";
import React, { useState, useRef, useMemo } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

/* Using dynamic import of Jodit component as it can't render in server side*/
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { postBlog } from "@/services/blogsService";
/*functions*/

const schema = z.object({
  title: z
    .string()
    .min(1, { message: "لطفا عنوان بلاگ خود را وارد کنید" })
    .max(100, { message: "نام بیش از 100 کاراکتر" }),
  slug: z
    .string()
    .min(1, { message: "لطفا slug   خود را وارد کنید" })
    .max(100, { message: "نام بیش از 100 کاراکتر" }),
  meta: z
    .string()
    .min(1, { message: "لطفا عنوان متا تگ خود را وارد کنید" })
    .max(100, { message: "نام بیش از 100 کاراکتر" }),
  keywords: z
    .string()
    .min(1, { message: "لطفا عنوان بلاگ خود را وارد کنید" })
    .max(100, { message: "نام بیش از 100 کاراکتر" }),
  description: z
    .string()
    .min(1, { message: "لطفا عنوان بلاگ خود را وارد کنید" })
    .max(100, { message: "نام بیش از 100 کاراکتر" }),
  tags: z.string(),
  brief: z.string(),
});

export default function TextEditor() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [base64, setBase64] = useState();
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0] && event.files[0].size < 30000000) {
      setImage(event.target.files[0]);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const config = useMemo(
    () => ({
      uploader: {
        insertImageAsBase64URI: true,
        imagesExtensions: ["jpg", "png", "jpeg", "gif", "svg", "webp"],
      },
    }),
    []
  );
  const handleChange = (value) => {
    setContent(value);
  };
  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const submitHandler = async (data) => {
    let encodedContent = btoa(unescape(encodeURIComponent(content)));
    let tagsArray = data.tags.split();
    let tags = [];
    tags = tagsArray.map((item) => {
      return { name: item };
    });
    const base64 = await toBase64(image);
    setBase64(base64);

    const submitData = {
      title: data.title,
      slug: data.slug,
      meta: data.meta,
      keywords: data.keywords,
      description: data.description,
      content: encodedContent,
      brief: data.brief,
      image: base64,
      tags: tags,
    };

    await postBlog(submitData)
      .then((res) => {
        if (res.status === 200) {
          toast.success("ایجاد بلاگ موفق", { position: "top-center" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className='wrapper mx-auto'>
      <div className='layout flex-col pb-20 pt-80 items-center'>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className='flex flex-col gap-6 w-full items-center'>
          <div className=' flex flex-col gap-2 w-full '>
            <span className='w-full'>عنوان بلاگ :</span>
            <input
              {...register("title")}
              type='text'
              placeholder=''
              className={`input input-bordered w-full ${
                errors.title ? "input-error" : ""
              }`}
            />
          </div>
          <div className=' flex flex-col gap-2 w-full '>
            <span className='w-full'> نام صفحه برای موتور جستجو :</span>
            <input
              {...register("slug")}
              type='text'
              placeholder=''
              className={`input input-bordered w-full ${
                errors.slug ? "input-error" : ""
              }`}
            />
          </div>
          <div className=' flex flex-col gap-2 w-full '>
            <span className='w-full'>عنوان تگ متا :</span>
            <input
              {...register("meta")}
              type='text'
              placeholder=''
              className={`input input-bordered w-full ${
                errors.meta ? "input-error" : ""
              }`}
            />
          </div>
          <div className=' flex flex-col gap-2 w-full '>
            <span className='w-full'>کلمات کلیدی تگ متا :</span>
            <input
              {...register("keywords")}
              type='text'
              placeholder=''
              className={`input input-bordered w-full `}
            />
          </div>
          <div className=' flex flex-col gap-2 w-full '>
            <span className='w-full'> توضیحات تگ متا :</span>
            <input
              {...register("description")}
              type='text'
              placeholder=''
              className={`input input-bordered w-full `}
            />
          </div>
          <div className=' flex flex-col gap-2 w-full '>
            <span className='w-full'>کلمات کلیدی :</span>
            <input
              {...register("tags")}
              type='text'
              placeholder=''
              className={`input input-bordered w-full `}
            />
          </div>
          <div className=' flex flex-col gap-2 w-full '>
            <span className='w-full'> توضیح کوتاه :</span>
            <input
              {...register("brief")}
              type='text'
              placeholder=''
              className={`input input-bordered w-full `}
            />
          </div>
          <div className=' flex flex-col gap-2 w-full '>
            <span className='w-full'> عکس بلاگ :</span>
            <small className=''>انداز عکس کم تر از 3 MB</small>

            <input
              type='file'
              className='file-input file-input-bordered w-full max-w-xs '
              onChange={onImageChange}
            />
          </div>

          <div className={` flex flex-col gap-2  w-full `}>
            <span className='w-full'>متن بلاگ :</span>
            <JoditEditor
              ref={editor} //This is important
              value={content} //This is important
              config={config} //Only use when you declare some custom configs
              onChange={handleChange} //handle the changes
              className='w-full bg-white'
            />
            <style>{`.jodit-wysiwyg{height:300px !important}`}</style>
          </div>
          <div className=' flex items-start justify-start w-full'>
            <button className='btn  btn-outline btn-info' type='submit'>
              ثبت بلاگ
            </button>
          </div>
        </form>
        {/* <div className='my-10 h-full'>
          Preview:
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div> */}
      </div>
    </div>
  );
}
