import React from "react";

export default function Timeline() {
  return (
    <div
      id='history'
      className='wrapper items-center bg-slate-50 mt-40 flex-col '>
      <h2 className='text-4xl font-semibold mt-20'>تاریخچه اویم استانبول</h2>
      <div className='layout max-w-3xl mx-auto mt-20 mb-32 ' dir='ltr'>
        <div className='space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent'>
          <div className='relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active'>
            <div className='flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2'>
              <svg
                className='fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='12'
                height='10'>
                <path
                  fillRule='nonzero'
                  d='M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z'
                />
              </svg>
            </div>
            <div
              dir='rtl'
              className='w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-8 rounded-lg border border-slate-200 shadow'>
              <div className='flex items-center justify-between space-x-2 mb-1'>
                <div className='font-bold text-slate-900'>شروع به کار </div>
                <time className='font-caveat text-gray-400 font-number font-thin'>
                  1393
                </time>
              </div>
              <div className='text-slate-500 leading-9 text-justify'>
                شرکت مهاجرتی اویم استانبول توسط دو جوان ایرانی میثم خردمند و
                سالار امیری بنیانگذاری شد.
              </div>
            </div>
          </div>

          <div className='relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active'>
            <div className='flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2'>
              <svg
                className='fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='12'
                height='10'>
                <path
                  fillRule='nonzero'
                  d='M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z'
                />
              </svg>
            </div>
            <div
              dir='rtl'
              className='w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-8 rounded-lg border border-slate-200 shadow'>
              <div className='flex items-center justify-between space-x-2 mb-1'>
                <div className='font-bold text-slate-900'>
                  دو هزار پروژه موفق
                </div>
                <time className='font-caveat text-gray-400 font-number font-thin'>
                  1396 - 1393
                </time>
              </div>
              <div className='text-slate-500 leading-9 text-justify'>
                {" "}
                اویم استانبول موفق شد بیش از 2000 ملک را به فروش برساند و به یکی
                از بازیگران اصلی بازار املاک تبدیل شود.
              </div>
            </div>
          </div>
          <div className='relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active'>
            <div className='flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2'>
              <svg
                className='fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='12'
                height='10'>
                <path
                  fillRule='nonzero'
                  d='M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z'
                />
              </svg>
            </div>
            <div
              dir='rtl'
              className='w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-8 rounded-lg border border-slate-200 shadow'>
              <div className='flex items-center justify-between space-x-2 mb-1'>
                <div className='font-bold text-slate-900'>
                  اضافه کرن بخش عمرانی
                </div>
                <time className='font-caveat text-gray-400 font-number font-thin'>
                  1396
                </time>
              </div>
              <div className='text-slate-500 leading-9 text-justify'>
                {" "}
                اویم استانبول با اضافه کردن بخش عمرانی به شرکت خود شروع به
                سازندگی به صورت مستقیم و در نتیجه شروع به فروش ملک به عنوان یک
                سازنده در ترکیه کرد{" "}.
              </div>
            </div>
          </div>

          <div className='relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active'>
            <div className='flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2'>
              <svg
                className='fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='12'
                height='10'>
                <path
                  fillRule='nonzero'
                  d='M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z'
                />
              </svg>
            </div>
            <div
              dir='rtl'
              className='w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-8 rounded-lg border border-slate-200 shadow'>
              <div className='flex items-center justify-between space-x-2 mb-1'>
                <div className='font-bold text-slate-900'>گسترش منطقه‌ای</div>
                <time className='font-caveat text-gray-400 font-number font-thin'>
                  1401 - 1396
                </time>
              </div>
              <div className='text-slate-500 leading-9 text-justify'>
                با توجه به توسعه و پیشرفت روز به روز شرکت ، گسترش منطقه ای از
                بخش اروپایی ترکیه به بخش های آسیایی ترکیه نیز اتفاق افتاد.
              </div>
            </div>
          </div>

          <div className='relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active'>
            <div className='flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2'>
              <svg
                className='fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='12'
                height='10'>
                <path
                  fillRule='nonzero'
                  d='M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z'
                />
              </svg>
            </div>
            <div
              dir='rtl'
              className='w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-8 rounded-lg border border-slate-200 shadow'>
              <div className='flex items-center justify-between space-x-2 mb-1'>
                <div className='font-bold text-slate-900'> قبرس و دبی</div>
                <time className='font-caveat text-gray-400 font-number font-thin'>
                  تاکنون - 1401
                </time>
              </div>
              <div className='text-slate-500 leading-9 text-justify'>
                {" "}
                کشور های قبرس و دبی به مناطق کاری شرکت اویم استانبول اضافه شد و
                به همین سبب ابعاد کاری شرکت استانبول روند رو به رشد خودش را
                نمایانگر کرد.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
