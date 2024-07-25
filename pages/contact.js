import React, { useState } from "react";

import Breadcumb from "@/src/components/Breadcumb";
import Layout from "@/src/layout/Layout";
import { sendMessage } from "@/services/authService";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
const Contact = () => {
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
    email: z.string(),
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
    await sendMessage(data)
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
    <Layout>
      <Breadcumb pageName={"Contact Us"} />
      {/*==================================================*/}
      {/* Start Appoinment Section */}
      {/*===================================================*/}
      <div className='contact-us pt-90 pb-90'>
        <div className='container'>
          <div className='row'>
            {" "}
            <div className='col-sm-12 col-md-6 col-lg-6 pl-0 pr-0 h-100'>
              <div className='cda-content-area h-100'>
                <div className='cda-single-content d-flex'>
                  <div className='cda-icon'>
                    <i className='fas fa-map-marker-alt' />
                  </div>
                  <div className='cda-content-inner'>
                    <h4>آدرس مجموعه</h4>
                    <p>تبریز، ولیعصر، برج تجارت جهانی، طبقه چهار</p>
                  </div>
                </div>
                <div className='cda-single-content hr d-flex'>
                  <div className='cda-icon'>
                    <i className='fas fa-phone-alt' />
                  </div>
                  <div className='cda-content-inner'>
                    <h4>شماره تماس ها</h4>
                    <p>
                      +989020008804 <br />
                      +905411852316
                    </p>
                  </div>
                </div>
                <div className='cda-single-content hr d-flex'>
                  <div className='cda-icon'>
                    <i className='fas fa-envelope' />
                  </div>
                  <div className='cda-content-inner'>
                    <h4>ایمیل ما </h4>
                    <p>
                      amirisalar29@gmail.com <br />
                    </p>
                  </div>
                </div>
                <div className='cda-single-content hr d-flex'></div>
              </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-6 pl-0 pr-0 h-100' dir='rtl'>
              <div className='contact_from_box h-100'>
                <div className='contact_title pb-4 text-end'>
                  <h3 className='text-start'>با ما در ارتباط باشید</h3>
                </div>
                <form
                  onSubmit={handleSubmit(submitHandler)}
                  action='#'
                  method='POST'
                  id='dreamit-form'>
                  <div className='row'>
                    <div className='col-lg-6'>
                      <div className='form_box mb-30'>
                        <input
                          type='text'
                          name='fullName'
                          placeholder='نام و نام خانوادگی'
                          {...register("fullName")}
                        />
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='form_box mb-30'>
                        <input
                          type='email'
                          name='email'
                          placeholder='ادرس ایمیل'
                          {...register("email")}
                        />
                      </div>
                    </div>
                    <div className='col-lg-12'>
                      <div className='form_box mb-30'>
                        <input
                          type='text'
                          name='phone'
                          placeholder='شماره تلفن'
                          {...register("phone")}
                        />
                      </div>
                    </div>
                    {/* <div className='col-lg-6'>
                      <div className='form_box mb-30'>
                        <input type='text' name='web' placeholder='Website' />
                      </div>
                    </div> */}
                    <div className='col-lg-12'>
                      <div className='form_box mb-30'>
                        <textarea
                          name='body'
                          id='message'
                          cols={30}
                          rows={10}
                          placeholder='جزییات پیام'
                          defaultValue={""}
                          {...register("body")}
                        />
                      </div>
                      <div className='quote_button'>
                        <button className='btn' type='submit'>
                          {" "}
                          <i className='bi bi-gear' /> مشاوره رایگان
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div id='status' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start Contact Location Section */}
      {/*===================================================*/}
      <div className='map-section'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-12 p-0'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.1502692694858!2d46.36227727677636!3d38.06688139527848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x401a1b005e596e9f%3A0xf2f7140a495d507b!2zRXZ0YXAg2KfZiNiq2KfZvg!5e0!3m2!1sen!2sbd!4v1721894668478!5m2!1sen!2sbd'
                width={1920}
                height={350}
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden='false'
                tabIndex={0}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
