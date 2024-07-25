import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "@/constants/Constants";

export default function MainNavigation({ toggleMenu }) {
  return (
    <nav className='wrapper fixed top-0 z-50'>
      <div className='layout justify-between items-center h-28 bg-slate-50 backdrop-filter backdrop-blur-sm bg-opacity-70 mt-10 px-8 md:px-12 rounded-[25px]'>
        <ul className='hidden md:flex gap-14 text-black font-semibold'>
          {NavLinks.map((link) => (
            <Link key={link.slug} href={link.href}>
              <li className='hover-effect hover:text-gray-400'>{link.name}</li>
            </Link>
          ))}
        </ul>
        <div className='flex flex-row-reverse md:flex-row items-center gap-4'>
          <a href='tel:989020008804' className='hidden md:block text-black'>
            989020008804+
          </a>
          <a
            
            target='_blank'
            href='https://api.whatsapp.com/send?phone=905411852316'
            className='hidden md:block'>
            <Image
              src={`/icons/whatsappBlue.png`}
              width={40}
              height={40}
              alt='logo'
            />
          </a>

          <Image
            src={`/media/evim-logo.png`}
            width={70}
            height={70}
            alt='evim logo'
          />
        </div>
        <div onClick={toggleMenu} className='flex md:hidden cursor-pointer'>
          <Image src={`/icons/menu.png`} width={30} height={30} alt='menu' />
        </div>
      </div>
    </nav>
  );
}
