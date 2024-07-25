"use client";
import React, { useState } from "react";
import { sendMessage } from "@/services/authService";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
export default function Consult() {
  const [loading, setLoading] = useState(false);

  const schema = z.object({
    phone: z
      .string()
      .min(1, { message: "لطفا شماره تلفن خود را وارد کنید" })
      .max(11, { message: "شماره تلفن بیش از 11 کاراکتر" })
      .regex(/^09[0-9][0-9]-?[0-9]{3}-?[0-9]{4}$/, {
        message: "شماره تلفن صحیح نیست",
      }),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const submitHandler = async (data) => {
    const submitData = { ...data, fullName: "no name" };
    setLoading(true);
    await sendMessage(submitData)
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          toast.success("ارسال پیام موفق", { position: "top-center" });
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  return (
    <div className='wrapper  mb-[10rem] mt-[20rem] md:mt-[30rem]' id='consult'>
      <div className='layout flex-col gap-4 rounded-xl p-4'>
        <h2 className='text-3xl md:text-4xl lg:text-4xl w-full font-bold lg:mx-8 leading-10'>
          تا <span className='text-red-700'>مشاوره رایگان</span> یک قدم فاصله
          دارید !
        </h2>
        <div className='flex flex-col-reverse items-center lg:items-end lg:flex-row px-4 md:px-24  bg-blue-600 w-full   rounded-[3rem]'>
          <div className='flex flex-col p-4 lg:p-6 gap-4 w-full lg:w-4/5'>
            <span className='text-2xl text-center lg:text-start lg:text-3xl text-white font-semibold '>
              همین الان شماره تماس رو ثبت کنید
            </span>
            <span className='text-xl text-center lg:text-start lg:text-2xl text-neutral-200 font-light'>
              تا مشاوران اویم استانبول با شما تماس بگیرند!
            </span>
            <form
              onSubmit={handleSubmit(submitHandler)}
              className='flex flex-col lg:flex-row gap-4 justify-center lg:gap-0 w-full lg:w-full items-center lg:relative'>
              <input
                {...register("phone")}
                className='w-full rounded-xl p-4 bg-white lg:w-full '
                placeholder='شماره تلفن همراه'
              />
              <button
                type='submit'
                className='bg-orange-700 p-4  h-full lg:text-base text-sm lg:absolute lg:left-0 lg:w-fit rounded-xl text-white'>
                درخواست مشاوره
              </button>
            </form>
          </div>
          <div className='w-full flex justify-center lg:h-full lg:relative'>
            <Image
              src='/media/consult.png'
              alt=''
              width={450}
              height={450}
              className='lg:absolute lg:bottom-0 -left-24 '
            />
          </div>
        </div>
      </div>
    </div>
  );
}
