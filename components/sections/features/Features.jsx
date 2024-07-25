"use client";
import React from "react";
import Image from "next/image";
export default function Features() {
  return (
    <div id='services' className='w-full mx-auto p-4 mt-16 pb-40 bg-[#537dff]'>
      <div className='text-center mt-32 mb-20'>
        <h2 className='font-extrabold text-white text-6xl'>
          خدمات اویم استانبول
        </h2>
      </div>

      <div className='flex flex-wrap justify-center gap-10 mt-10 justify-items-center'>
        <div className='flex bg-white w-[450px] h-64 rounded-3xl overflow-hidden justify-between'>
          <div className='h-full w-1/3 relative rounded-r-3xl overflow-hidden'>
            <Image
              src={"/media/services/work.jpg"}
              alt='key'
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className='flex flex-col items-center h-full justify-center gap-4 w-2/3 p-4'>
            <h3 className='text-[#537dff] font-extrabold text-xl md:text-2xl'>
              اخذ اجازه کار و کاریابی
            </h3>
            <p className='text-justify leading-7 text-md md:text-lg md:leading-9'>
              اخذ اجازه کار فرآیندی است که به فرد اجازه می‌دهد به طور قانونی در
              یک کشور خارجی مشغول به کار شود..
            </p>
          </div>
        </div>

        <div className='flex bg-white w-[450px] h-64 rounded-3xl overflow-hidden justify-between'>
          <div className='h-full w-1/3 relative rounded-r-3xl overflow-hidden'>
            <Image
              src={"/media/services/migrate.jpg"}
              alt='key'
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className='flex flex-col items-center h-full justify-center gap-4 w-2/3 p-4'>
            <h3 className='text-[#537dff] font-extrabold text-xl md:text-2xl'>
              اخذ اقامت دائم
            </h3>
            <p className='text-justify leading-7 text-md md:text-lg md:leading-9'>
              اخذ اقامت دائم از طریق خرید ملک در این کشورها گزینه‌ای جذاب برای
              سرمایه‌گذاران است، با فرآیندی سریع و مزایای متعدد..
            </p>
          </div>
        </div>

        <div className='flex bg-white w-[450px] h-64 rounded-3xl overflow-hidden justify-between'>
          <div className='h-full w-1/3 relative rounded-r-3xl overflow-hidden'>
            <Image
              src={"/media/services/corprate.JPG"}
              alt='key'
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className='flex flex-col items-center h-full justify-center gap-4 w-2/3 p-4'>
            <h3 className='text-[#537dff] font-extrabold text-xl md:text-2xl'>
              ثبت مجموعه و ایجاد بیزنس
            </h3>
            <p className='text-justify leading-7 text-md md:text-lg md:leading-9'>
              مجموعه اویم استانبول ثبت ایجاد بیزنس را جزو خدماتی قرار داده که
              بعد از فروش ملک به مشتریان قابل انجام می باشد..
            </p>
          </div>
        </div>

        <div className='flex bg-white w-[450px] h-64 rounded-3xl overflow-hidden justify-between'>
          <div className='h-full w-1/3 relative rounded-r-3xl overflow-hidden'>
            <Image
              src={"/media/services/exchange.jpg"}
              alt='key'
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className='flex flex-col items-center h-full justify-center gap-4 w-2/3 p-4'>
            <h3 className='text-[#537dff] font-extrabold text-xl md:text-2xl'>
              خدمات صرافی
            </h3>
            <p className='text-justify leading-7 text-md md:text-lg md:leading-9'>
              مجموعه اویم استانبول به صورت مستقل در زمان فروش ملک برای مشتریان
              کار های تبدیل ارز ریال رو به ارز مورد نظر نسبت به لوکیشن خرید ملک
              انجام میدهد..
            </p>
          </div>
        </div>

        <div className='flex bg-white w-[450px] h-64 rounded-3xl overflow-hidden justify-between'>
          <div className='h-full w-1/3 relative rounded-r-3xl overflow-hidden'>
            <Image
              src={"/media/services/touriste.jpg"}
              alt='key'
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className='flex flex-col items-center h-full justify-center gap-4 w-2/3 p-4'>
            <h3 className='text-[#537dff] font-extrabold text-xl md:text-2xl'>
              اخذ اقامت توریستی
            </h3>
            <p className='text-justify leading-7 text-md md:text-lg md:leading-9'>
              تنها راه دریافت اقامت توریستی خرید ملک در یک کشور دیگه‌ست که
              مجموعه اویم استانبول این کار را جزو خدمات مجموعه ی خود قرار داده
              است..
            </p>
          </div>
        </div>

        <div className='flex bg-white w-[450px] h-64 rounded-3xl overflow-hidden justify-between'>
          <div className='h-full w-1/3 relative rounded-r-3xl overflow-hidden'>
            <Image
              src={"/media/services/home.JPG"}
              alt='key'
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className='flex flex-col items-center h-full justify-center gap-4 w-2/3 p-4'>
            <h3 className='text-[#537dff] font-extrabold text-xl md:text-2xl'>
              اجاره  فروش ملک
            </h3>
            <p className='text-justify leading-7 text-md md:text-lg md:leading-9'>
              در زمینه های خرید و فروش، اجاره   ملک در ترکیه ، قبرس و دبی
              که از روش‌های محبوب برای سرمایه‌گذاری و مهاجرت است ، خدمات ارائه
              میدهیم..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
