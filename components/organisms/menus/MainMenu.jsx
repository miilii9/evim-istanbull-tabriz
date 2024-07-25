import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function MobileMenu({ open, hide }) {
  const navLinks = [
    {
      name: "صفحه اصلی",
      href: "/",
    },
    {
      name: "درباره ما",
      href: "/about-us",
    },
    {
      name: "ارتباط با ما",
      href: "/contact-us",
    },
  ];

  return (
    <div
      className={`md:hidden h-screen shadow-md fixed top-0 z-30 bg-light w-full transition ease-in-out duration-300 ${
        open
          ? "translate-y-0 opacity-100 visible"
          : "-translate-y-[500px] opacity-0 invisible"
      }`}>
      <div className='w-full bg-white h-full'>
        <ul className='flex flex-col w-full items-center justify-center h-full gap-8 mb-6 -bottom-10'>
          {navLinks.map(({ name, href }, index) => (
            <Link key={index} href={href}>
              <li className='font-semibold' onClick={hide}>
                {name}
              </li>
            </Link>
          ))}
          <li>
            {" "}
            <a href='tel:989020008804' className=''>
              989020008804+
            </a>
          </li>
          <li>
            <a
              target='_blank'
              href='https://api.whatsapp.com/send?phone=905411852316'
              className=''>
              <Image
                src={`/icons/whatsappBlue.png`}
                width={40}
                height={40}
                alt='logo'
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
