"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import {  Autoplay, Pagination } from "swiper/modules";

export default function OurEdge() {
  return (
    <div className='mx-auto w-full px-4 sm:px-6 lg:px-8 py-8  mt-16 flex flex-col absolute -bottom-36 edges'>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        loop={true}
        modules={[Pagination, Autoplay]}
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          300: { slidesPerView: 2 },
          641: { slidesPerView: 2.5 },
          800: { slidesPerView: 3 },
          1008: { slidesPerView: 3.5 },
          1366: { slidesPerView: 5.5 },
        }}
        className='mySwiper w-full'>
        <SwiperSlide>
          <div className='lg:w-3/4 mx-auto  flex flex-col h-32  justify-center items-center rounded-3xl bg-white '>
            <div className='h-28 flex justify-center items-center'>
              <Image
                alt='icon'
                src='/edge/installments.png'
                width={40}
                height={40}
                className='m-auto'
              />
            </div>
            <div className=' w-full flex justify-center items-center h-28 text-lg font-semibold   bg-blue-500 rounded-3xl text-white '>
              <h3 className='font-headline  text-center  w-full px-3  '>
                فروش اقساطی با بهترین شرایط
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='lg:w-3/4 mx-auto  flex flex-col h-32  justify-center items-center rounded-3xl bg-white '>
            <div className='h-28 flex justify-center items-center'>
              <Image
                alt='icon'
                src='/edge/branch.png'
                width={40}
                height={40}
                className='m-auto'
              />
            </div>
            <div className=' w-full flex justify-center items-center h-28 text-lg font-semibold   bg-blue-500 rounded-3xl text-white '>
              <h3 className='font-headline  text-center  w-full px-3  '>
                دفاتر حضوری متعدد
              </h3>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='lg:w-3/4 mx-auto  flex flex-col h-32  justify-center items-center rounded-3xl bg-white '>
            <div className='h-28 flex justify-center items-center'>
              <Image
                alt='icon'
                src='/edge/visa.png'
                width={40}
                height={40}
                className='m-auto'
              />
            </div>
            <div className=' w-full flex justify-center items-center h-28 text-lg font-semibold   bg-blue-500 rounded-3xl text-white '>
              <h3 className='font-headline  text-center  w-full px-3  '>
                ارائه خدمات مهاجرتی تضمینی
              </h3>
            </div>
          </div>
        </SwiperSlide>
{/* 
        <SwiperSlide>
          <div className='lg:w-3/4 mx-auto  flex flex-col h-32  justify-center items-center rounded-3xl bg-white '>
            <div className='h-28 flex justify-center items-center'>
              <Image
                alt='icon'
                src='/edge/change.png'
                width={40}
                height={40}
                className='m-auto'
              />
            </div>
            <div className=' w-full flex justify-center items-center h-28 text-lg font-semibold   bg-blue-500 rounded-3xl text-white '>
              <h3 className='font-headline  text-center  w-full px-3  '>
                تهاتر با 3 کشور ترکیه
              </h3>
            </div>
          </div>
        </SwiperSlide> */}

        <SwiperSlide>
          <div className='lg:w-3/4 mx-auto  flex flex-col h-32  justify-center items-center rounded-3xl bg-white '>
            <div className='h-28 flex justify-center items-center'>
              <Image
                alt='icon'
                src='/edge/worker.png'
                width={40}
                height={40}
                className='m-auto'
              />
            </div>
            <div className=' w-full flex justify-center items-center h-28 text-lg font-semibold   bg-blue-500 rounded-3xl text-white '>
              <h3 className='font-headline  text-center  w-full px-3  '>
                فعالیت در سازندگی و نمایندگی
              </h3>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='lg:w-3/4 mx-auto  flex flex-col h-32  justify-center items-center rounded-3xl bg-white '>
            <div className='h-28 flex justify-center items-center'>
              <Image
                alt='icon'
                src='/edge/area.png'
                width={40}
                height={40}
                className='m-auto'
              />
            </div>
            <div className=' w-full flex justify-center items-center h-28 text-lg font-semibold   bg-blue-500 rounded-3xl text-white '>
              <h3 className='font-headline  text-center  w-full px-3  '>
                پوشش گسترده جغرافیایی
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='lg:w-3/4 mx-auto  flex flex-col h-32  justify-center items-center rounded-3xl bg-white '>
            <div className='h-28 flex justify-center items-center'>
              <Image
                alt='icon'
                src='/edge/license.png'
                width={40}
                height={40}
                className='m-auto'
              />
            </div>
            <div className=' w-full flex justify-center items-center h-28 text-lg font-semibold   bg-blue-500 rounded-3xl text-white '>
              <h3 className='font-headline  text-center  w-full px-3  '>
                تجربه طولانی و کسب جوایز
              </h3>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='lg:w-3/4 mx-auto  flex flex-col h-32  justify-center items-center rounded-3xl bg-white '>
            <div className='h-28 flex justify-center items-center'>
              <Image
                alt='icon'
                src='/edge/rent.png'
                width={40}
                height={40}
                className='m-auto'
              />
            </div>
            <div className=' w-full flex justify-center items-center h-28 text-lg font-semibold   bg-blue-500 rounded-3xl text-white '>
              <h3 className='font-headline  text-center  w-full px-3  '>
                اجاره ملک های مبله بمدت
              </h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
