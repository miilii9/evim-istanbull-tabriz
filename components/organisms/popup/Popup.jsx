import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
import { sendMessage } from "@/services/authService";
import FormComponent from "@/src/components/FormComponent";

const schema = z.object({
  phone: z
    .string()
    .min(1, { message: "لطفا شماره تلفن خود را وارد کنید" })
    .max(11, { message: "شماره تلفن بیش از 11 کاراکتر" })
    .regex(/^09[0-9][0-9]-?[0-9]{3}-?[0-9]{4}$/, {
      message: "شماره تلفن صحیح نیست",
    }),
});
export default function Popup({ setPopup }) {
  const [loading, setLoading] = useState(false);

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
      fullName: "popup",
    };
    await sendMessage(submitData)
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          toast.success("ارسال پیام موفق", { position: "top-center" });
          setPopup(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const closeBanner = (e) => {
    if (document.getElementById("popup").contains(e.target)) {
    } else {
      setPopup(false);
    }
  };
  return (
    <>
      <div
        className='h-screen w-full flex justify-center items-center fixed z-40 bg-black bg-opacity-75 popUpContainer'
        onClick={closeBanner}>
        <div
          className='bg-white rounded-3xl shadow-lg p-7 h-80 w-96 flex flex-col justify-center popUpForm'
          id='popup'>
          <p
            onClick={() => setPopup(false)}
            className='w-fit text-start mb-5 text-red-500 font-semibold cursor-pointer popUpClose'>
            بستن
          </p>
          <p className='w-full text-center mb-10 text-xl font-extrabold popUpTitle'>
            یک قدم تا مشاوره رایگان فاصله دارید!
          </p>
          <form>
            <div class='mb-3'>
              <label for='exampleInputEmail1' class='form-label'>
                Email address
              </label>
              <input
                type='email'
                class='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
              />
              <div id='emailHelp' class='form-text'>
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class='mb-3'>
              <label for='exampleInputPassword1' class='form-label'>
                Password
              </label>
              <input
                type='password'
                class='form-control'
                id='exampleInputPassword1'
              />
            </div>
            <div class='mb-3 form-check'>
              <input
                type='checkbox'
                class='form-check-input'
                id='exampleCheck1'
              />
              <label class='form-check-label' for='exampleCheck1'>
                Check me out
              </label>
            </div>
            <button type='submit' class='btn btn-primary'>
              Submit
            </button>
          </form>
          {/* <form onSubmit={handleSubmit(submitHandler)}>
            <input
              {...register("phone")}
              type='text'
              className={`input input-bordered w-full mb-5 form_box ${
                errors.phone ? "input-error" : ""
              }`}
              placeholder='شماره تماس'
            />
            <button type='submit' className='btn btn-primary w-full'>
              {loading ? (
                <span className='loading loading-spinner'></span>
              ) : (
                "ارسال "
              )}
            </button>
          </form> */}
          {/* <FormComponent /> */}
        </div>
      </div>
    </>
  );
}
