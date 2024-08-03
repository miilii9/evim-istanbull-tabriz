"use client";
import React from "react";

export default function ContactForm() {
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
