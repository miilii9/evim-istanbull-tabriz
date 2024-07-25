import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import ContactForm from "@/components/organisms/forms/ContactForm";
const MapComponent = dynamic(() => import("@/components/sections/map/Map"), {
  ssr: false,
});
export default function ContactUs() {
  return (
    <div>
      <img
        src='https://wallpapercave.com/wp/wp1813727.jpg'
        alt=''
        className='w-full h-full about-banner'
      />
      <div className='max-w-4xl mx-auto px-5 mb-20 mt-32 flex flex-col items-center'>
        <div className='text-center mt-32 mb-20'>
          <h2 className='font-semibold text-4xl'>تماس با اولیم استانبول</h2>
        </div>
        <div className='grid md:grid-cols-2 sm:gap-10 md:gap-24 mt-10'>
          <div className='flex gap-4 items-start'>
            <span className=' bg-blue-500 p-3 rounded-full'>
              <Image
                src='/icons/phone.png'
                width={25}
                height={25}
                alt='phone'
              />
            </span>
            <div>
              <h3 className='font-semibold text-xl'>شماره تماس </h3>
              <p className='mt-1 text-gray-500 leading-9 font-number flex gap-2'>
                <a href='tel:905411862316' className=''>
                  905411852316+
                </a>
                |
                <a href='tel:989020008804' className=''>
                  989020008804+
                </a>
              </p>
            </div>
          </div>
          <div className='flex gap-4 items-start'>
            <span className=' bg-blue-500 p-3 rounded-full'>
              <Image
                src='/icons/address.png'
                width={25}
                height={25}
                alt='address'
              />
            </span>
            <div>
              <h3 className='font-semibold text-xl'>آدرس </h3>
              <p className='mt-1 text-gray-500 leading-9'>
                تبریز، ولیعصر، برج تجارت جهانی، طبقه چهار
              </p>
            </div>
          </div>
          <div className='flex gap-4 items-start'>
            <span className=' bg-blue-500 p-3 rounded-full'>
              <Image
                src='/icons/instagram-white.png'
                width={25}
                height={25}
                alt='address'
                className='text-white'
              />
            </span>
            <div className=''>
              <h3 className='font-semibold text-xl'>instagram </h3>
              <p className='mt-1 text-gray-500 leading-9'>evimstanbull.tab@ </p>
            </div>
          </div>
          <div className='flex gap-4 items-start'>
            <span className=' bg-blue-500 p-3 rounded-full'>
              <Image
                src='/icons/whatsappWhite.png'
                width={25}
                height={25}
                alt='address'
                className='text-white'
              />
            </span>
            <div className=''>
              <h3 className='font-semibold text-xl'>whatsapp </h3>
              <a
                className='mt-1 text-gray-500 leading-9 font-number'
                target="_blank"
                href='https://api.whatsapp.com/send?phone=905411852316'>
                905411852316+
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <ContactForm /> */}
      <div className='mt-32 about-banner about-banner-up'>
        <MapComponent />
      </div>
    </div>
  );
}
