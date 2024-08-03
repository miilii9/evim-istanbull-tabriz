"use client";
import React from "react";
import { login } from "@/services/authService";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const schema = z.object({
  email: z.string().min(1, { message: "لطفا نام کاربری خود را وارد کنید" }),
  password: z.string().min(1, { message: "لطفا رمز عبور خود را وارد کنید" }),
});
export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const submitHandler = async (data) => {

    await login(data)
      .then((res) => {
        if (res.status === 200) {
          cookies.set("token", res.data.token, { path: "/" });
          toast.success("ورود موفق", { position: "top-center" });
          router.push("/admin");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
   
    <div className='container'>
      <div className='row'>
        <h1 className='col-md-12 mx-auto text-center'>ورود ادمین</h1>

        <form
          className='col-md-6 mx-auto'
          onSubmit={handleSubmit(submitHandler)}>
          <div className='form-group'>
            <label for='exampleInputEmail1'>Email address</label>
            <input
              {...register("email")}
              type='text'
              placeholder='نام کاربری'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
          </div>
          <div className='form-group'>
            <label for='exampleInputPassword1'>Password</label>
            <input
              {...register("password")}
              type='password'
              placeholder='رمز عبور'
              className='form-control'
              id='exampleInputPassword1'
            />
          </div>

          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
