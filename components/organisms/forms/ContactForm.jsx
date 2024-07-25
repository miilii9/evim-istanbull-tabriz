"use client";
import React, { useState } from "react";
import { sendMessage } from "@/services/authService";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  fullName: z
    .string()
    .min(1, { message: "لطفا نام و نام خانوادگی خود را وارد کنید" })
    .max(20, { message: "نام بیش از 100 کاراکتر" }),
  phone: z
    .string()
    .min(1, { message: "لطفا شماره تلفن خود را وارد کنید" })
    .max(11, { message: "شماره تلفن بیش از 11 کاراکتر" })
    .regex(/^09[0-9][0-9]-?[0-9]{3}-?[0-9]{4}$/, {
      message: "شماره تلفن صحیح نیست",
    }),
  email: z.string(),
  email: z.string().email("ایمیل نادرست است."),
  body: z.string(),
});

export default function ContactForm({ className }) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const submitHandler = async (data) => {
    setLoading(true);
    await sendMessage(data)
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
    <div
      className={`flex flex-col items-center gap-7 layout max-w-[800px] px-10 md:px-0 layout w-full lg:w-2/5 h-full`}>
      <h2 className='text-center text-3xl md:text-5xl text-[#537dff] font-extrabold'>
        اپلیکیشن اویم استانبول
      </h2>
      <p className='text-center text-3xl md:text-5xl text-gray-400 font-extrabold'>
        ارتباطی برو و آسان با ما
      </p>
      <a
        href='https://evim-stanbull.storage.c2.liara.space/evim.istanbul.apk'
        className='bg-[#537dff] px-8 py-3 sm:text-2xl md:text-4xl text-white rounded-3xl'>
        دانلود نسخه اندروید
      </a>
      {/* <div className='bg-[#537dff] px-8 py-3 sm:text-2xl md:text-4xl text-white rounded-3xl'>دانلود نسخه IOS</div> */}
    </div>
  );
}
