'use client'
import React, { useState } from "react";
import { signup } from "@/services/authService";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod"
import Cookies from 'universal-cookie';
import { toast } from "react-toastify";
const cookies = new Cookies();

const schema = z.object({
    fullName: z.string().min(1, { message: "لطفا نام و نام خانوادگی را وارد کنید" }),
    email: z.string().email("فرمت ایمیل نادرست است").min(1, { message: "لطفا نام کاربری خود را وارد کنید" }).min(1, { message: "لطفا نام کاربری را وارد کنید" }),
    password: z.string().min(1, { message: "لطفا رمز عبور خود را وارد کنید" }),
})
export default function SignUp() {
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: zodResolver(schema)
        }
    )

    const submitHandler = async (data) => {
        setLoading(true)
        await signup(data).then((res) => {
            setLoading(false)
            cookies.set('token', res.data.token, { path: '/' });
            toast.success("ثبت موفق", { position: "top-center" })
        }).catch((err) => {
            setLoading(false)
            console.log(err);
        })
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col gap-4 layout max-w-[400px] px-10 md:px-0'>
            <input
                {...register("fullName")}
                type='text'
                placeholder='نام و نام خانوادگی'
                className={`input input-bordered ${errors.fullName ? 'input-error' : ''}`}
            />
            <input
                {...register("email")}
                type='text'
                placeholder='نام کاربری'
                className={`input input-bordered ${errors.email ? 'input-error' : ''}`}
            />
            <input
                {...register("password")}
                type='password'
                placeholder='رمز عبور'
                className={`input input-bordered ${errors.password ? 'input-error' : ''}`}
            />
            <div>
                <button type='submit' className='btn bg-blue-500 text-white px-8'>
                    {loading ? <span className="loading loading-spinner"></span> : "ثبت ادمین"}
                </button>
            </div>
        </form>
    );
}

