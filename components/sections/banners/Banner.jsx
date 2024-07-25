"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import styles from "@/styles/banner.module.css";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function Banner() {
  return (
    <div className={`w-full h-full ${styles.banners} banner`}>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Navigation, Autoplay]}
        className='mySwiper'>
        <SwiperSlide>
          <div className='w-full h-full relative'>
            <div className='absolute w-full h-full z-20 bg-black bg-opacity-75 '></div>
            <img
              src='/media/banner/3.jpg'
              className='w-full h-full'
              alt='banner'
            />
            <div className={`  z-20 absolute h-full w-full top-0  `}>
              <div className=' wrapper   w-full h-full p-0  '>
                <div className='layout flex-col justify-center items-center text-white gap-8     lg:px-8 md:px-12 lg:h-full  w-full'>
                  <h1 className='text-3xl md:text-7xl font-bold text-center w-full '>
                    با 200 هزار دلار اقامت ترکیه رو بگیر!{" "}
                  </h1>
                  <p className=' text-xl md:text-3xl font-semibold w-full text-center'>
                    40 درصد نقد مابقی پرداخت بعد از 1 سال!{" "}
                  </p>
                  <div
                    className='flex justify-center items-center gap-4 btn bg-orange-700 text-white'
                    onClick={() => {
                      window.scrollTo({
                        top: document.getElementById("consult").offsetTop - 350,
                        behavior: "smooth",
                      });
                    }}>
                    اطلاعات بیشتر
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full relative'>
            <div className='absolute w-full h-full z-20 bg-black bg-opacity-75 '></div>
            <img
              src='/media/banner/7.JPG'
              className='w-full h-full object-fill'
              alt='banner'
            />
            <div className={`  z-20 absolute h-full w-full top-0  `}>
              <div className=' wrapper   w-full h-full p-0  '>
                <div className='layout flex-col justify-center items-center text-white gap-8     lg:px-8 md:px-12 lg:h-full  w-full'>
                  <h1 className='text-3xl md:text-7xl font-bold text-center w-full '>
                    خرید اقساطی ملک در ترکیه!{" "}
                  </h1>
                  <p className=' text-xl md:text-3xl font-semibold w-full text-center'>
                    جهت دریافت اطلاعات بیشتر با ما در ارتباط باشید!{" "}
                  </p>
                  <div
                    className='flex justify-center items-center gap-4 btn bg-orange-700 text-white'
                    onClick={() => {
                      window.scrollTo({
                        top: document.getElementById("consult").offsetTop - 350,
                        behavior: "smooth",
                      });
                    }}>
                    اطلاعات بیشتر
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full relative'>
            <div className='absolute w-full h-full z-20 bg-black bg-opacity-75 '></div>
            <img
              src='/media/banner/2.JPG'
              className='w-full h-full'
              alt='banner'
            />
            <div className={`  z-20 absolute h-full w-full top-0  `}>
              <div className=' wrapper   w-full h-full p-0  '>
                <div className='layout flex-col justify-center items-center text-white gap-8     lg:px-8 md:px-12 lg:h-full  w-full'>
                  <h1 className='text-3xl md:text-7xl font-bold text-center w-full '>
                    سفر به 110 کشور دنیا بدون ویزا!{" "}
                  </h1>
                  <p className=' text-xl md:text-3xl font-semibold w-full text-center'>
                    اخذ پاسپورت ترکیه به صورت اقساطی!{" "}
                  </p>
                  <div
                    className='flex justify-center items-center gap-4 btn bg-orange-700 text-white'
                    onClick={() => {
                      window.scrollTo({
                        top: document.getElementById("consult").offsetTop - 350,
                        behavior: "smooth",
                      });
                    }}>
                    اطلاعات بیشتر
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
