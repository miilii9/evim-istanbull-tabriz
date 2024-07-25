"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function AdminNavigation({ toggleMenu }) {
  const router = useRouter();

  return (
    <nav className='wrapper fixed top-0 z-50'>
      <div className='layout justify-between items-center h-20 bg-slate-50 backdrop-filter backdrop-blur-sm bg-opacity-70 mt-10 px-8 md:px-12 rounded-[25px]'>
        <ul className='hidden md:flex gap-14 text-black font-semibold'>
          <Link href={"/admin"}>
            <li className='hover-effect hover:text-gray-400'>لیست کاربران</li>
          </Link>
          <Link href={"/admin/add-blog"}>
            <li className='hover-effect hover:text-gray-400'>ایجاد بلاگ</li>
          </Link>
          <Link href={"/admin/add-user"}>
            <li className='hover-effect hover:text-gray-400'>ایجاد ادمین</li>
          </Link>
          <li
            onClick={() => {
              cookies.remove("token", { path: "/" }), router.push("/");
            }}
            className='hover-effect text-red-600 cursor-pointer'>
            خروج
          </li>
        </ul>
        <Image
          src={`/media/evim-logo.png`}
          width={50}
          height={50}
          alt='evim logo'
        />
        <div onClick={toggleMenu} className='flex md:hidden cursor-pointer'>
          <Image src={`/icons/menu.png`} width={30} height={30} alt='menu' />
        </div>
      </div>
    </nav>
  );
}
