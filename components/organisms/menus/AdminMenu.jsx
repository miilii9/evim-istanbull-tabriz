"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
export default function AdminMenu({ open, hide }) {
    const router = useRouter()

    const navLinks = [
        {
            name: 'لیست کاربران',
            href: '/admin/users'
        },
        {
            name: 'افزودن ادمین',
            href: '/admin/add-user'
        },
    ]

    return (
        <div className={`md:hidden h-screen shadow-md fixed top-0 z-30 bg-light w-full transition ease-in-out duration-300 ${open ? "translate-y-0 opacity-100 visible" : "-translate-y-[500px] opacity-0 invisible"}`}>
            <div className='w-full bg-white h-full'>
                <ul className='flex flex-col w-full items-center justify-center h-full gap-8 mb-6 -bottom-10'>
                    {
                        navLinks.map(({ name, href }, index) => (
                            <Link key={index} href={href}>
                                <li className='font-semibold' onClick={hide}>{name}</li>
                            </Link>
                        ))
                    }
                    <li
                        onClick={() => {
                            cookies.remove('token', { path: '/' }),
                                router.push('/login')
                        }} className='font-semibold text-red-600 cursor-pointer'>خروج</li>
                </ul>
            </div>
        </div>
    )
}