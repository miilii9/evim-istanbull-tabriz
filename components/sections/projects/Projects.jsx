"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
export default function Projects() {
  return (
    <div className='w-full h-64 lg:px-16 projects'>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          300: { slidesPerView: 1 },
          641: { slidesPerView: 1.4 },
          800: { slidesPerView: 2 },
          1008: { slidesPerView: 2.5 },
          1566: { slidesPerView: 3 },
          1766: { slidesPerView: 4 },
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className='mySwiper'>
        <SwiperSlide>
          <div className='w-full flex flex-col  p-8  h-full'>
            <div className='w-full h-64'>
              <img
                src='./media/projects/kuru.webp'
                alt=''
                className='object-cover rounded-t-2xl h-64 w-full'
              />
            </div>
            {/* <div className='w-full bg-blue-950 flex gap-3 justify-around items-center'> */}
            <div className='w-full bg-blue-950 grid grid-cols-4 p-2 rounded-b-2xl'>
              <div className='flex flex-col justify-between gap-4 items-center w-full'>
                <img src='./icons/globe.png' alt='icon' className='w-8 h-8' />
                <span className='text-white text-sm lg:text-lg font-medium'>
                  اروپایی
                </span>
              </div>
              <div className='flex flex-col justify-between items-center'>
                <img src='./icons/loc.png' alt='icon' className='w-8 h-8' />
                <span className='text-white text-sm lg:text-lg font-medium'>
                  شیشیلی
                </span>
              </div>

              <div className='flex flex-col justify-between items-center'>
                <img
                  src='./icons/building.png'
                  alt='icon'
                  className='w-8 h-8'
                />
                <span className='text-white text-sm lg:text-lg font-medium'>
                  مسکونی
                </span>
              </div>
              <div className='flex flex-col justify-between items-center'>
                <img
                  src='./icons/calendar.png'
                  alt='icon'
                  className='w-8 h-8'
                />
                <span className='text-white text-sm lg:text-base font-number'>
                  05/11/1401
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full flex flex-col  p-8  h-full'>
            <div className='w-full h-64'>
              <img
                src='./media/projects/vadi.webp'
                alt=''
                className='object-cover rounded-t-2xl h-64 w-full'
              />
            </div>
            {/* <div className='w-full bg-blue-950 flex gap-3 justify-around items-center'> */}
            <div className='w-full bg-blue-950 grid grid-cols-4 p-2 rounded-b-2xl'>
              <div className='flex flex-col justify-between gap-4 items-center w-full'>
                <img src='./icons/globe.png' alt='icon' className='w-8 h-8' />
                <span className='text-white text-sm lg:text-lg font-medium'>
                  آسیایی
                </span>
              </div>
              <div className='flex flex-col justify-between items-center'>
                <img src='./icons/loc.png' alt='icon' className='w-8 h-8' />
                <span className='text-white text-sm lg:text-lg font-medium'>
                  بیکوز
                </span>
              </div>

              <div className='flex flex-col justify-between items-center'>
                <img
                  src='./icons/building.png'
                  alt='icon'
                  className='w-8 h-8'
                />
                <span className='text-white text-sm lg:text-lg font-medium'>
                  مسکونی
                </span>
              </div>
              <div className='flex flex-col justify-between items-center'>
                <img
                  src='./icons/calendar.png'
                  alt='icon'
                  className='w-8 h-8'
                />
                <span className='text-white text-sm lg:text-base font-number'>
                  25/8/1401
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full flex flex-col  p-8  h-full'>
            <div className='w-full h-64'>
              <img
                src='./media/projects/evinPark.jpeg'
                alt=''
                className=' rounded-t-2xl h-64 w-full'
              />
            </div>
            <div className='w-full bg-blue-950 grid grid-cols-4 p-2 rounded-b-2xl'>
              <div className='flex flex-col justify-between gap-4 items-center w-full'>
                <img src='./icons/globe.png' alt='icon' className='w-8 h-8' />
                <span className='text-white text-sm lg:text-lg font-medium'>
                  آسیایی
                </span>
              </div>
              <div className='flex flex-col justify-between items-center'>
                <img src='./icons/loc.png' alt='icon' className='w-8 h-8' />
                <span className='text-white text-sm lg:text-lg font-medium'>
                  کادیکوی
                </span>
              </div>

              <div className='flex flex-col justify-between items-center'>
                <img
                  src='./icons/building.png'
                  alt='icon'
                  className='w-8 h-8'
                />
                <span className='text-white text-sm lg:text-lg font-medium'>
                  مسکونی
                </span>
              </div>
              <div className='flex flex-col justify-between items-center'>
                <img
                  src='./icons/calendar.png'
                  alt='icon'
                  className='w-8 h-8'
                />
                <span className='text-white text-sm lg:text-base font-number'>
                  04/12/1401
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full flex flex-col  p-8  h-full'>
            <div className='w-full h-64'>
              <img
                src='./media/projects/maslak.jpg'
                alt=''
                className='object-cover rounded-t-2xl h-full w-full'
              />
            </div>
            {/* <div className='w-full bg-blue-950 flex gap-3 justify-around items-center'> */}
            <div className='w-full bg-blue-950 grid grid-cols-4 p-2 rounded-b-2xl'>
              <div className='flex flex-col justify-between gap-4 items-center w-full'>
                <img src='./icons/globe.png' alt='icon' className='w-8 h-8' />
                <span className='text-white text-sm lg:text-lg font-medium'>
                  اروپایی{" "}
                </span>
              </div>
              <div className='flex flex-col justify-between items-center'>
                <img src='./icons/loc.png' alt='icon' className='w-8 h-8' />
                <span className='text-white text-sm text-center font-medium'>
                  ماسلاک وادی
                </span>
              </div>

              <div className='flex flex-col justify-between items-center'>
                <img
                  src='./icons/building.png'
                  alt='icon'
                  className='w-8 h-8'
                />
                <span className='text-white text-sm lg:text-lg font-medium'>
                  مسکونی
                </span>
              </div>
              <div className='flex flex-col justify-between items-center'>
                <img
                  src='./icons/calendar.png'
                  alt='icon'
                  className='w-8 h-8'
                />
                <span className='text-white text-sm lg:text-base font-number'>
                  29/06/1401
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full flex flex-col  p-8  h-full'>
            <div className='w-full h-64'>
              <img
                src='./media/projects/yedi.jpg'
                alt=''
                className='object-cover rounded-t-2xl h-64 w-full'
              />
            </div>
            {/* <div className='w-full bg-blue-950 flex gap-3 justify-around items-center'> */}
            <div className='w-full bg-blue-950 grid grid-cols-4 p-2 rounded-b-2xl'>
              <div className='flex flex-col justify-between gap-4 items-center w-full'>
                <img src='./icons/globe.png' alt='icon' className='w-8 h-8' />
                <span className='text-white text-sm lg:text-lg font-medium'>
                  آسیایی
                </span>
              </div>
              <div className='flex flex-col justify-between items-center'>
                <img src='./icons/loc.png' alt='icon' className='w-8 h-8' />
                <span className='text-white text-sm lg:text-lg font-medium'>
                  زیتون بورنو{" "}
                </span>
              </div>

              <div className='flex flex-col justify-between items-center'>
                <img
                  src='./icons/building.png'
                  alt='icon'
                  className='w-8 h-8'
                />
                <span className='text-white text-sm lg:text-lg font-medium'>
                  مسکونی
                </span>
              </div>
              <div className='flex flex-col justify-between items-center'>
                <img
                  src='./icons/calendar.png'
                  alt='icon'
                  className='w-8 h-8'
                />
                <span className='text-white text-sm lg:text-base font-number'>
                  23/02/1403
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
