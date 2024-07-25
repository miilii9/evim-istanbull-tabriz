"use client"
import React, { useState } from "react";
import { login } from "@/services/authService";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod"
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const schema = z.object({
  email: z.string().min(1, { message: "لطفا نام کاربری خود را وارد کنید" }),
  password: z.string().min(1, { message: "لطفا رمز عبور خود را وارد کنید" }),
})
export default function Login() {
  const [loading, setLoading] = useState(false)
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm(
    {
      resolver: zodResolver(schema)
    }
  )
  const submitHandler = async (data) => {
    setLoading(true)

    await login(data).then((res) => {
      if (res.status === 200) {
        setLoading(false)
        cookies.set('token', res.data.token, { path: '/' });
        toast.success("ورود موفق", { position: "top-center" })
        router.push("/admin")
      }
    }).catch((err) => {
      setLoading(false)
      console.log(err);
    })
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col gap-4 layout max-w-[400px] px-10 md:px-0'>
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
          {loading ? <span className="loading loading-spinner"></span> : "ورود"}
        </button>
      </div>
    </form>
  );
}
