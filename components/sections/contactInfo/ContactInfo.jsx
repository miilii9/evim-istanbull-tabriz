import React from "react";
import ContactForm from "../../organisms/forms/ContactForm";
import Image from "next/image";
export default function ContactInfo() {
  return (
    <div className='wrapper mt-16 mb-10 bg-white p-2 flex-col'>
      <div className='w-full mx-auto flex flex-col-reverse lg:flex-row gap-20 lg:gap-0 md:px-56 items-center'>
        <ContactForm />
        <div className='w-full lg:w-2/5 h-full flex flex-col'>
          <Image src="/media/mockup.png" width={700} height={700} alt="mockup" />
        </div>
      </div>
    </div>
  );
}
