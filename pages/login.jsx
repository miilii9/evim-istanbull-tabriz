import React from 'react'
import Login from '@/components/organisms/forms/Login'
export default function page() {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-full'>
      <h1 className='mb-12 text-3xl font-semibold'>ورود ادمین</h1>
      <Login />
    </div>
  )
}
