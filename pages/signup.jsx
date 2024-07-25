'use client'
import React, { useState } from "react";
import { signup } from "@/services/authService";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
export default function SignUp() {
    const [user, setUser] = useState({
        fullName: "",
        email: "",
        password: ""
    })


    const changeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        await signup(user).then((res) => {
            cookies.set('token', res.data.token, { path: '/' });
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <form onSubmit={submitHandler} className='flex flex-col gap-4 layout max-w-[400px] px-10 md:px-0'>
            <input
                required
                onChange={changeHandler}
                type='text'
                placeholder='نام و نام خانوادگی'
                name="fullName"
                className='input input-bordered'
            />
            <input
                required
                onChange={changeHandler}
                type='text'
                placeholder='نام کاربری'
                name="email"
                className='input input-bordered'
            />
            <input
                required
                onChange={changeHandler}
                type='password'
                placeholder='رمز عبور'
                name="password"
                className='input input-bordered'
            />
            <div>
                <button type='submit' className='btn bg-blue-500 text-white px-8'>
                    ورود
                </button>
            </div>
        </form>
    );
}
