import React, { useState } from "react";
import { sendMessage } from "@/services/authService";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export default function FormComponent() {
  const [loading, setLoading] = useState(false);

  const schema = z.object({
    fullName: z
      .string()
      .min(1, { message: "لطفا نام و نام خانوادگی خود را وارد کنید" })
      .max(20, { message: "نام بیش از 100 کاراکتر" }),
    phone: z
      .string()
      .min(1, { message: "لطفا شماره تلفن خود را وارد کنید" })
      .max(11, { message: "شماره تلفن بیش از 11 کاراکتر" })
      .regex(/^09[0-9][0-9]-?[0-9]{3}-?[0-9]{4}$/, {
        message: "شماره تلفن صحیح نیست",
      }),
    // email: z.string().email("ایمیل نادرست است."),
    body: z.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const submitHandler = async (data) => {
    setLoading(true);
    const submitData = {
      phone: data.phone,
      fullName: data.fullName,
      body: data.body,
      email: "no email",
    };
    await sendMessage(submitData)
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          toast.success("ارسال پیام موفق", { position: "top-center" });
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  return (
    <div className='contract-form-bg'>
      <div className='contact-form-title'>
        <h4> مشاوره رایگان </h4>
        <p> مشاوره 24/7 </p>
      </div>
      <div className='contact_from' dir='rtl'>
        <form onSubmit={handleSubmit(submitHandler)} id='dreamit-form'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='form_box mb-20'>
                <input
                  {...register("fullName")}
                  type='text'
                  name='fullName'
                  placeholder='نام*'
                />
              </div>
            </div>
            {/* <div className='col-lg-12'>
              <div className='form_box mb-20'>
                <input
                  type='email'
                  name='email'
                  placeholder='ایمیل*'
                  {...register("email")}
                />
              </div>
            </div> */}
            <div className='col-lg-12'>
              <div className='form_box mb-20'>
                <input
                  type='text'
                  name='phone'
                  placeholder='شماره تلفن'
                  {...register("phone")}
                />
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='form_box mb-20'>
                <textarea
                  {...register("body")}
                  name='message'
                  id='message'
                  cols={30}
                  rows={10}
                  placeholder='متن شما'
                  defaultValue={""}
                />
              </div>
              <div className='quote_button'>
                <button className='btn' type='submit'>
                  {" "}
                  مشاوره رایگان <i className='bi bi-gear' />
                </button>
              </div>
            </div>
          </div>
        </form>
        <div id='status' />
      </div>
    </div>
  );
}
