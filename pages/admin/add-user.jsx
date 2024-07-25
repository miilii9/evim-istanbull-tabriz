import React from 'react'
import SignUp from '@/components/organisms/forms/SignUp'
export default function page() {
    return (
        <div className='flex flex-col justify-center items-center h-screen w-full'>
            <h1 className='mb-12 text-3xl font-semibold'>افزودن ادمین</h1>
            <SignUp />
        </div>
    )
}
