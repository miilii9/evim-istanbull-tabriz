import Counter from "@/src/components/Counter";
import Faqs from "@/src/components/Faqs";
import ProgressBar from "@/src/components/ProgressBar";
import Layout from "@/src/layout/Layout";
import { testimonial_list_slider } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const CaseStudies = dynamic(
  () => import("@/src/components/isotope/CaseStudies"),
  {
    ssr: false,
  }
);
const Landing1 = () => {
  return (
    <Layout header={4}>
      <div className='slider-area slider2 d-flex align-items-center' id='home'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-12  d-flex flex-column  '>
              <div className='slider-content'>
                <h1> اویم استانبول </h1>
                <h1>
                  {" "}
                  فروش <span>ملک</span>{" "}
                </h1>
                <p>با 200 هزار دلار اقامت تریه را بگیرید </p>
              </div>
              <div className='slider-button mt-5'>
                <Link legacyBehavior href='/service'>
                  <a>
                    <i className='bi bi-gear' /> مشاوره رایگان
                  </a>
                </Link>
              </div>
            </div>
            {/* slider shape */}
            <div className='slider-shape'>
              <div className='slider-shape-thumb2'>
                <img src='assets/images/slider/shape2.png' alt='' />
              </div>
              <div className='slider-shape-thumb4'>
                <img src='assets/images/slider/shape3.png' alt='' />
              </div>
              <div className='slider-shape-thumb5 dance'>
                <img src='assets/images/slider/circle1.png' alt='' />
              </div>
              <div className='slider-shape-thumb6 bounce-animate'>
                <img src='assets/images/slider/circle2.png' alt='' />
              </div>
              <div className='slider-shape-thumb7 bounce-animate2'>
                <img src='assets/images/slider/circle3.png' alt='' />
              </div>
              <div className='slider-shape-thumb8 bounce-animate3'>
                <img src='assets/images/slider/white-dot.png' alt='' />
              </div>
              <div className='slider-shape-thumb9 '>
                <img src='assets/images/slider/line.png' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start consen feature Area */}
      {/*==================================================*/}
      <div className='feature-area'>
        <div className='container'>
          <div className='row feature-bg' dir='rtl'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-feature-box'>
                <div className='feature-box-inner'>
                  <div className='feature-icon1'>
                    <img src='assets/images/resource/main1.png' alt />
                  </div>
                  <div className='feature-title'>
                    <h3> لورم</h3>
                  </div>
                  <div className='feature-text'>
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                    </p>
                  </div>
                  <div className='feature-bar' />
                </div>
                {/* feature back */}
                {/* <div className='consen-feature-back'>
                  <div className='feature-back-title'>
                    <h3> Strategy </h3>
                    <h2> Strategy Building </h2>
                  </div>
                  <div className='feature-back-icon'>
                    <a href='#'>+</a>
                  </div>
                </div> */}
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-feature-box uppp-1'>
                <div className='feature-box-inner'>
                  <div className='feature-icon1'>
                    <img src='assets/images/resource/main3.png' alt />
                  </div>
                  <div className='feature-title'>
                    <h3>لورم</h3>
                  </div>
                  <div className='feature-text'>
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                    </p>
                  </div>
                  <div className='feature-bar' />
                </div>
                {/* feature back */}
                {/* <div className='consen-feature-back'>
                  <div className='feature-back-title'>
                    <h3> Strategy </h3>
                    <h2> Strategy Building </h2>
                  </div>
                  <div className='feature-back-icon'>
                    <a href='#'>+</a>
                  </div>
                </div> */}
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-feature-box uppp-1'>
                <div className='feature-box-inner'>
                  <div className='feature-icon1'>
                    <img src='assets/images/resource/main2.png' alt />
                  </div>
                  <div className='feature-title'>
                    <h3> لورم</h3>
                  </div>
                  <div className='feature-text'>
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                    </p>
                  </div>
                  <div className='feature-bar' />
                </div>
                {/* feature back */}
                {/* <div className='consen-feature-back'>
                  <div className='feature-back-title'>
                    <h3> Strategy </h3>
                    <h2> Strategy Building </h2>
                  </div>
                  <div className='feature-back-icon'>
                    <a href='#'>+</a>
                  </div>
                </div> */}
              </div>
            </div>
            {/* feature shape */}
            <div className='feature-shape bounce-animate2'>
              <img src='assets/images/resource/all-shape4.png' alt />
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen feature Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      <div className='about-area style-three' id='about'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-12'>
              <div className='dreamit-about-thumb mr-lg-4'>
                <img src='assets/images/about/about-2.png' alt />
                {/* about-shape */}
                <div className='about-shape-thumb1 bounce-animate2'>
                  <img src='assets/images/about/about-shpe.png' alt />
                </div>
                <div className='about-shape-thumb3 bounce-animate4'>
                  <img src='assets/images/about/about-shape4.png' alt />
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 flex-column d-flex align-items-end'>
              <div className='consen-section-title flex-column d-flex align-items-end'>
                <h5> درباره اویم استانبول </h5>
                <h2> ما در اویم استانبول </h2>
                <h2>
                  {" "}
                  بیش از 2000+ <span> فایل </span> داریم
                </h2>
                <p className='about-text1'>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است
                </p>
              </div>
              <div className='dreamit-icon-box'>
                <div className='dreamit-icon-list'>
                  <ul>
                    <li className='d-flex flex-row-reverse align-items-center'>
                      <i className='bi bi-arrow-left-circle' />{" "}
                      <span>
                        {" "}
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ
                      </span>
                    </li>
                    <li className='d-flex flex-row-reverse align-items-center'>
                      <i className='bi bi-arrow-left-circle' />{" "}
                      <span>
                        {" "}
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* progress bar */}
              <div className='progress-box d-flex flex-row-reverse align-items-center'>
                <div className=''>
                  <ProgressBar value={85} />
                  <div className='circle-progress-title'>
                    <h4>
                      {" "}
                      رضایت <br /> مشتری{" "}
                    </h4>
                  </div>
                </div>
                <div className='extra-progress'>
                  <ProgressBar value={95} />
                  <div className='circle-progress-title'>
                    <h4>
                      {" "}
                      مشاوره <br /> مالی{" "}
                    </h4>
                  </div>
                </div>
              </div>
              {/* <div className='about-button'>
                <Link legacyBehavior href='/about'>
                  <a>
                    {" "}
                    <i className='bi bi-gear' /> More About{" "}
                  </a>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen feature Area */}
      {/*==================================================*/}
      <div className='service-area style-three' id='service'>
        <div className='container'>
          <div className='row d-flex flex-row-reverse'>
            <div className='col-lg-7 col-md-6 d-flex flex-row-reverse'>
              <div className='consen-section-title white pb-50 mb-1'>
                <h5> ما چکار میکنیم ؟ </h5>
                <h2> همه جور خدمات اراِیه میدهیم</h2>
                <h2>
                  {" "}
                  درمورد <span> ملک </span>
                </h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-3 col-sm-6 pl-1'>
              <div className='dreamit-service-box'>
                <div className='service-box-inner'>
                  <div className='em-service-icon1 upper'>
                    <img src='assets/images/resource/service-icon8.png' alt />
                  </div>
                  <div className='em-service-title'>
                    <h3> لورم ایپسوم</h3>
                  </div>
                  <div className='service-bar' />
                  <div className='em-service-text'>
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                    </p>
                  </div>
                  <div className='service-button'>
                    <Link legacyBehavior href='/service-details'>
                      <a>
                        {" "}
                        بیشتر
                        <i className='bi bi-plus' />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-sm-6 pl-1'>
              <div className='dreamit-service-box'>
                <div className='service-box-inner'>
                  <div className='em-service-icon1'>
                    <img src='assets/images/resource/service-icon5.png' alt />
                  </div>
                  <div className='em-service-title'>
                    <h3> لورم ایپسوم </h3>
                  </div>
                  <div className='service-bar' />
                  <div className='em-service-text'>
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                    </p>
                  </div>
                  <div className='service-button'>
                    <Link legacyBehavior href='/service-details'>
                      <a>
                        {" "}
                        بیشتر
                        <i className='bi bi-plus' />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-sm-6 pl-1'>
              <div className='dreamit-service-box'>
                <div className='service-box-inner'>
                  <div className='em-service-icon1'>
                    <img src='assets/images/resource/service-icon6.png' alt />
                  </div>
                  <div className='em-service-title'>
                    <h3> لورم ایپسوم </h3>
                  </div>
                  <div className='service-bar' />
                  <div className='em-service-text'>
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                    </p>
                  </div>
                  <div className='service-button'>
                    <Link legacyBehavior href='/service-details'>
                      <a>
                        {" "}
                        بیشتر
                        <i className='bi bi-plus' />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-sm-6 pl-1'>
              <div className='dreamit-service-box'>
                <div className='service-box-inner'>
                  <div className='em-service-icon1'>
                    <img src='assets/images/resource/service-icon7.png' alt />
                  </div>
                  <div className='em-service-title'>
                    <h3> لورم ایپسوم </h3>
                  </div>
                  <div className='service-bar' />
                  <div className='em-service-text'>
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                    </p>
                  </div>
                  <div className='service-button'>
                    <Link legacyBehavior href='/service-details'>
                      <a>
                        {" "}
                        بیشتر
                        <i className='bi bi-plus' />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='service-bottom-text'>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                  <Link legacyBehavior href='/service'>
                    <a>مشاوره رایگان</a>
                  </Link>
                </p>
              </div>
            </div>
            <div className='service-shape'>
              <img src='assets/images/resource/all-shape3.png' alt />
            </div>
            <div className='service-shape1 bounce-animate2'>
              <img src='assets/images/resource/all-shape6.png' alt />
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen feature Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen case study Area */}
      {/*==================================================*/}
      <div className='why-choose-us-area'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <div className='consen-section-title'>
                <h5> چرا ما ؟ </h5>
                <h2> شریع ترین و مطمین ترین راه </h2>
                <h2>
                  {" "}
                  برای خرید و شهروندی <span> در ترکیه </span>
                </h2>
                <p className='choose-text1'>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است
                </p>
              </div>
              <div className='dreamit-icon-list'>
                <ul>
                  <li className='d-flex flex-row-reverse'>
                    <i className='bi bi-arrow-left-circle' />{" "}
                    <span>
                      {" "}
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ{" "}
                    </span>
                  </li>
                  <li className='d-flex flex-row-reverse'>
                    <i className='bi bi-arrow-left-circle' />{" "}
                    <span>
                      {" "}
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ{" "}
                    </span>
                  </li>
                  <li className='d-flex flex-row-reverse'>
                    <i className='bi bi-arrow-left-circle' />{" "}
                    <span>
                      {" "}
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ{" "}
                    </span>
                  </li>
                  <li className='d-flex flex-row-reverse'>
                    <i className='bi bi-arrow-left-circle' />{" "}
                    <span>
                      {" "}
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ{" "}
                    </span>
                  </li>
                </ul>
              </div>
              {/* <div className='why-choose-button'>
                <Link legacyBehavior href='/about'>
                  <a>
                    {" "}
                    <i className='bi bi-gear' /> More About{" "}
                  </a>
                </Link>
              </div> */}
            </div>
            <div className='col-lg-6 col-md-12'>
              <div className='why-choose-us-thumb'>
                <img src='assets/images/resource/why-choose.png' alt />
                {/* choose shape thumb */}
                <div className='why-choose-us-image'>
                  <div className='why-choose-us-shape-thumb bounce-animate'>
                    <img src='assets/images/resource/all-shape2.png' alt />
                  </div>
                  <div className='why-choose-us-shape-thumb2 rotateme'>
                    <img src='assets/images/resource/case-shape.png' alt />
                  </div>
                  <div className='why-choose-us-shape-thumb3 bounce-animate2'>
                    <img src='assets/images/resource/case-shape2.png' alt />
                  </div>
                  <div className='why-choose-us-shape-thumb4'>
                    <img src='assets/images/about/about-shape4.png' alt />
                  </div>
                </div>
                {/* end choose shape thumb */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen case study Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen Testimonial Area */}
      {/*==================================================*/}
      <div className='testimonial-area'>
        <div className='container'>
          <div className='row testi-rotate align-items-center'>
            <div className='col-lg-5 col-md-6'>
              <div className='row'>
                <div className='col-6'>
                  <div className='testi-counter-box upper'>
                    <div className='testi-counter-title'>
                      <h3 className='counter'>
                        {" "}
                        <Counter end={1372} />{" "}
                      </h3>
                      <span>+</span>
                      <p> Happy Customers </p>
                    </div>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='testi-counter-box'>
                    <div className='testi-counter-title'>
                      <h3 className='counter'>
                        {" "}
                        <Counter end={100} />{" "}
                      </h3>
                      <span>%</span>
                      <p> Satisfaction Rate </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-7 col-md-6'>
              <div className='consen-section-title white pb-50'>
                <h5> Testimonials </h5>
                <h2> Consen Trusted Customers </h2>
                <h2>
                  {" "}
                  Awesome <span> Reviews </span>
                </h2>
              </div>
            </div>
            <div className='testi-shape-thumb1 rotateme'>
              <img src='assets/images/resource/testimonial-map.png' alt />
            </div>
          </div>
          <div className='row'>
            <Swiper
              {...testimonial_list_slider}
              className='testimonial_list owl-carousel'>
              <SwiperSlide className='pr-1'>
                <div className='testimonial-single-box'>
                  <div className='testimonial-content1'>
                    <div className='single-quote-icon'>
                      <div className='quote-thumb'>
                        <img src='assets/images/resource/testi1.png' alt />
                      </div>
                      <div className='quote-title'>
                        <h4>Philip Anthorpy</h4>
                        <p>UI Designer</p>
                      </div>
                    </div>
                    <div className='em-testimonial-text'>
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
                      </p>
                    </div>
                    <div className='em-testi-start-icon'>
                      <i className='bi bi-star-fill' />
                      <i className='bi bi-star-fill' />
                      <i className='bi bi-star-fill' />
                      <i className='bi bi-star-fill' />
                      <i className='bi bi-star-half' />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pr-1'>
                <div className='testimonial-single-box'>
                  <div className='testimonial-content1'>
                    <div className='single-quote-icon'>
                      <div className='quote-thumb'>
                        <img src='assets/images/resource/testi3.png' alt />
                      </div>
                      <div className='quote-title'>
                        <h4> Shilpa Shethy </h4>
                        <p> CEO, Founder </p>
                      </div>
                    </div>
                    <div className='em-testimonial-text'>
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
                      </p>
                    </div>
                    <div className='em-testi-start-icon'>
                      <i className='bi bi-star-fill' />
                      <i className='bi bi-star-fill' />
                      <i className='bi bi-star-fill' />
                      <i className='bi bi-star-fill' />
                      <i className='bi bi-star-half' />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pr-1'>
                <div className='testimonial-single-box'>
                  <div className='testimonial-content1'>
                    <div className='single-quote-icon'>
                      <div className='quote-thumb'>
                        <img src='assets/images/resource/testi2.png' alt />
                      </div>
                      <div className='quote-title'>
                        <h4> David Alexon </h4>
                        <p> MH Manager </p>
                      </div>
                    </div>
                    <div className='em-testimonial-text'>
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
                      </p>
                    </div>
                    <div className='em-testi-start-icon'>
                      <i className='bi bi-star-fill' />
                      <i className='bi bi-star-fill' />
                      <i className='bi bi-star-fill' />
                      <i className='bi bi-star-fill' />
                      <i className='bi bi-star-half' />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pr-1'>
                <div className='testimonial-single-box'>
                  <div className='testimonial-content1'>
                    <div className='single-quote-icon'>
                      <div className='quote-thumb'>
                        <img src='assets/images/resource/testi3.png' alt />
                      </div>
                      <div className='quote-title'>
                        <h4> Shilpa Shethy </h4>
                        <p> CEO, Founder </p>
                      </div>
                    </div>
                    <div className='em-testimonial-text'>
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
                      </p>
                    </div>
                    <div className='em-testi-start-icon'>
                      <i className='bi bi-star-fill' />
                      <i className='bi bi-star-fill' />
                      <i className='bi bi-star-fill' />
                      <i className='bi bi-star-fill' />
                      <i className='bi bi-star-half' />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pr-1'>
                <div className='testimonial-single-box'>
                  <div className='testimonial-content1'>
                    <div className='single-quote-icon'>
                      <div className='quote-thumb'>
                        <img src='assets/images/resource/testi2.png' alt />
                      </div>
                      <div className='quote-title'>
                        <h4> David Alexon </h4>
                        <p> MH Manager </p>
                      </div>
                    </div>
                    <div className='em-testimonial-text'>
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
                      </p>
                    </div>
                    <div className='em-testi-start-icon'>
                      <i className='bi bi-star-fill' />
                      <i className='bi bi-star-fill' />
                      <i className='bi bi-star-fill' />
                      <i className='bi bi-star-fill' />
                      <i className='bi bi-star-half' />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pr-1'>
                <div className='testimonial-single-box'>
                  <div className='testimonial-content1'>
                    <div className='single-quote-icon'>
                      <div className='quote-thumb'>
                        <img src='assets/images/resource/testi1.png' alt />
                      </div>
                      <div className='quote-title'>
                        <h4>Philip Anthorpy</h4>
                        <p>UI Designer</p>
                      </div>
                    </div>
                    <div className='em-testimonial-text'>
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
                      </p>
                    </div>
                    <div className='em-testi-start-icon'>
                      <i className='bi bi-star-fill' />
                      <i className='bi bi-star-fill' />
                      <i className='bi bi-star-fill' />
                      <i className='bi bi-star-fill' />
                      <i className='bi bi-star-half' />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pr-1'>
                <div className='testimonial-single-box'>
                  <div className='testimonial-content1'>
                    <div className='single-quote-icon'>
                      <div className='quote-thumb'>
                        <img src='assets/images/resource/testi2.png' alt />
                      </div>
                      <div className='quote-title'>
                        <h4> David Alexon </h4>
                        <p> MH Manager </p>
                      </div>
                    </div>
                    <div className='em-testimonial-text'>
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
                      </p>
                    </div>
                    <div className='em-testi-start-icon'>
                      <i className='bi bi-star-fill' />
                      <i className='bi bi-star-fill' />
                      <i className='bi bi-star-fill' />
                      <i className='bi bi-star-fill' />
                      <i className='bi bi-star-half' />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <div className='owl-dots'></div>
            </Swiper>
            <div className='testi-shape'>
              <div className='testi-shape-thumb'>
                <img src='assets/images/resource/all-shape5.png' alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen Testimonial Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen case study Area */}
      {/*==================================================*/}
      <div className='case-study-area style-three' id='portfolio'>
        <div className='container'>
          <CaseStudies />
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen case study Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen process Area */}
      {/*==================================================*/}
      <div className='process-area style-two'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-7 col-md-6'>
              <div className='consen-section-title white pb-4 pb-lg-5'>
                <h5> process </h5>
                <h2> We follow some easy steps to </h2>
                <h2>
                  {" "}
                  developed <span> Projects </span>
                </h2>
              </div>
            </div>
            <div className='col-lg-5 col-md-6'>
              <div className='process-text'>
                <p>
                  {" "}
                  Monotonectally brand worldwide value before in seamless
                  process Collaboratively initiate strategic expertise after
                  functionalized and formulate based internal organic.{" "}
                </p>
              </div>
            </div>
          </div>
          {/* process shape */}
          <div className='process-shape'>
            <div className='service-shape'>
              <img src='assets/images/resource/all-shape3.png' alt />
            </div>
            <div className='process-shape-thumb bounce-animate2'>
              <img src='assets/images/resource/all-shape6.png' alt />
            </div>
          </div>
        </div>
      </div>
      <div className='process-extra-area style-two'>
        <div className='container'>
          <div className='row justify-content-center process-bg'>
            <div className='col-lg-4 col-sm-6'>
              <div className='process-single-box2'>
                <div className='process-icon-thumb'>
                  <img src='assets/images/resource/a.png' alt />
                </div>
                <div className='process-title'>
                  <h3>Idea Generate</h3>
                  <p>
                    Collaboratively initiate strategic ex formulate based
                    internal.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-sm-6'>
              <div className='process-single-box2 responsive'>
                <div className='process-icon-thumb'>
                  <img src='assets/images/resource/b.png' alt />
                </div>
                <div className='process-title'>
                  <h3> System Design </h3>
                  <p>
                    Collaboratively initiate strategic ex formulate based
                    internal.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-sm-6'>
              <div className='process-single-box2 upper'>
                <div className='process-icon-thumb'>
                  <img src='assets/images/resource/c.png' alt />
                </div>
                <div className='process-title'>
                  <h3> Report Analysis </h3>
                  <p>
                    Collaboratively initiate strategic ex formulate based
                    internal.
                  </p>
                </div>
              </div>
            </div>
            <div className='process-shape'>
              <div className='process-shape-thumb3 bounce-animate3'>
                <img src='assets/images/resource/all-shape2.png' alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen process Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen Team Area */}
      {/*==================================================*/}
      <div className='team_area' id='team'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='consen-section-title upper text-center pb-60'>
                <h5> Team Member </h5>
                <h2>
                  {" "}
                  Let’s Meet with Our <span> Experts </span>
                </h2>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-sm-6'>
              <div className='single_team'>
                <div className='single_team_thumb1'>
                  <img src='assets/images/resource/team-1.jpg' alt='logo' />
                </div>
                <div className='single_team_content'>
                  <div className='team-title'>
                    <h4>Silvia Garden</h4>
                    <span>Designer</span>
                  </div>
                  <div className='single_team_icon'>
                    <a href='#'>
                      {" "}
                      <i className='bi bi-facebook' />{" "}
                    </a>
                    <a href='#'>
                      {" "}
                      <i className='bi bi-twitter' />{" "}
                    </a>
                    <a href='#'>
                      <i className='bi bi-dribbble' />
                    </a>
                    <a href='#'>
                      {" "}
                      <i className='bi bi-instagram'> </i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-sm-6'>
              <div className='single_team'>
                <div className='single_team_thumb1'>
                  <img src='assets/images/resource/team-2.jpg' alt='image' />
                </div>
                <div className='single_team_content'>
                  <div className='team-title'>
                    <h4> Monalisha Shen </h4>
                    <span> IT-Executive </span>
                  </div>
                  <div className='single_team_icon'>
                    <a href='#'>
                      {" "}
                      <i className='bi bi-facebook' />{" "}
                    </a>
                    <a href='#'>
                      {" "}
                      <i className='bi bi-twitter' />{" "}
                    </a>
                    <a href='#'>
                      <i className='bi bi-dribbble' />
                    </a>
                    <a href='#'>
                      {" "}
                      <i className='bi bi-instagram'> </i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-sm-6'>
              <div className='single_team'>
                <div className='single_team_thumb1'>
                  <img src='assets/images/resource/team-3.jpg' alt='image' />
                </div>
                <div className='single_team_content'>
                  <div className='team-title'>
                    <h4>Bubli Khanam</h4>
                    <span>Developer</span>
                  </div>
                  <div className='single_team_icon'>
                    <a href='#'>
                      {" "}
                      <i className='bi bi-facebook' />{" "}
                    </a>
                    <a href='#'>
                      {" "}
                      <i className='bi bi-twitter' />{" "}
                    </a>
                    <a href='#'>
                      <i className='bi bi-dribbble' />
                    </a>
                    <a href='#'>
                      {" "}
                      <i className='bi bi-instagram'> </i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen Team Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start faq Area */}
      {/*==================================================*/}
      <div className='faq-area' id='contact'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 pl-0'>
              {/* Start Accordion */}
              <div className='tab_container'>
                <div className='consen-section-title white pb-40 mb-1'>
                  <h5> FAQ </h5>
                  <h2>
                    {" "}
                    Freequently Asked <span> Question </span>
                  </h2>
                </div>
                <Faqs />
              </div>
              {/* End Accordion */}
            </div>
            <div className='col-lg-6 col-md-6'>
              <div className='contract-form-bg'>
                <div className='contact-form-title'>
                  <h4> Free Consultant </h4>
                  <p> 24/7 anytime Open Our Services </p>
                </div>
                <div className='contact_from'>
                  <form onSubmit={(e) => e.preventDefault()} id='dreamit-form'>
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div className='form_box mb-20'>
                          <input type='text' name='name' placeholder='Name*' />
                        </div>
                      </div>
                      <div className='col-lg-12'>
                        <div className='form_box mb-20'>
                          <input
                            type='email'
                            name='email'
                            placeholder='Your E-Mail*'
                          />
                        </div>
                      </div>
                      <div className='col-lg-12'>
                        <div className='form_box mb-20'>
                          <input
                            type='text'
                            name='phone'
                            placeholder='Phone Number'
                          />
                        </div>
                      </div>
                      <div className='col-lg-12'>
                        <div className='form_box mb-20'>
                          <textarea
                            name='message'
                            id='message'
                            cols={30}
                            rows={10}
                            placeholder='Write a Message'
                            defaultValue={""}
                          />
                        </div>
                        <div className='quote_button'>
                          <button className='btn' type='submit'>
                            {" "}
                            <i className='bi bi-gear' /> Free Consultant{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div id='status' />
                </div>
              </div>
            </div>
            <div className='form-shape'>
              <div className='testi-shape-thumb'>
                <img src='assets/images/resource/all-shape5.png' alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen faq Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen Blog Area */}
      {/*==================================================*/}
      <div className='blog-area style-two' id='blog'>
        <div className='container'>
          <div className='row pb-40'>
            <div className='col-lg-7 col-md-6'>
              <div className='consen-section-title mobile-center'>
                <h2> We Run All Kinds Of Services </h2>
                <h2>
                  {" "}
                  From <span> Technologies </span>
                </h2>
              </div>
            </div>
            <div className='col-lg-5 col-md-6'>
              <div className='consen-button text-right pt-4 pt-md-0'>
                <Link legacyBehavior href='/blog-grid'>
                  <a>
                    {" "}
                    <i className='bi bi-gear' /> View all Blog{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-box'>
                <div className='single-blog-thumb'>
                  <img src='assets/images/resource/blog1.png' alt />
                  <div className='blog-top-button'>
                    <a href='#'> GRAPHIC </a>
                  </div>
                </div>
                <div className='em-blog-content'>
                  <div className='meta-blog-text'>
                    <p> August 25, 2023 </p>
                  </div>
                  <div className='em-blog-title'>
                    <h2>
                      {" "}
                      <Link legacyBehavior href='/blog-details'>
                        <a> Popular Consultants are big Meetup 2023 </a>
                      </Link>{" "}
                    </h2>
                  </div>
                  <div className='em-blog-icon'>
                    <div className='em-blog-thumb'>
                      <img src='assets/images/resource/blog-icon.png' alt />
                    </div>
                    <div className='em-blog-icon-title'>
                      <h6> Alex Collins </h6>
                    </div>
                  </div>
                  <div className='blog-button'>
                    <Link legacyBehavior href='/blog-details'>
                      <a>
                        {" "}
                        Learn More <i className='bi bi-plus' />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-box'>
                <div className='single-blog-thumb'>
                  <img src='assets/images/resource/blog2.png' alt />
                  <div className='blog-top-button'>
                    <a href='#'> DEVELOPMENT </a>
                  </div>
                </div>
                <div className='em-blog-content'>
                  <div className='meta-blog-text'>
                    <p> August 21, 2023 </p>
                  </div>
                  <div className='em-blog-title'>
                    <h2>
                      {" "}
                      <Link legacyBehavior href='/blog-details'>
                        <a> How to Increase Business Products Sales </a>
                      </Link>{" "}
                    </h2>
                  </div>
                  <div className='em-blog-icon'>
                    <div className='em-blog-thumb'>
                      <img src='assets/images/resource/blog-icon.png' alt />
                    </div>
                    <div className='em-blog-icon-title'>
                      <h6> Julia Moris </h6>
                    </div>
                  </div>
                  <div className='blog-button'>
                    <Link legacyBehavior href='/blog-details'>
                      <a>
                        {" "}
                        Learn More <i className='bi bi-plus' />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-box'>
                <div className='single-blog-thumb'>
                  <img src='assets/images/resource/blog3.png' alt />
                  <div className='blog-top-button'>
                    <a href='#'> DESIGN </a>
                  </div>
                </div>
                <div className='em-blog-content'>
                  <div className='meta-blog-text'>
                    <p> August 20, 2023 </p>
                  </div>
                  <div className='em-blog-title'>
                    <h2>
                      {" "}
                      <Link legacyBehavior href='/blog-details'>
                        <a> Top 10 Most Populars Google Chrome app</a>
                      </Link>
                    </h2>
                  </div>
                  <div className='em-blog-icon'>
                    <div className='em-blog-thumb'>
                      <img src='assets/images/resource/blog-icon.png' alt />
                    </div>
                    <div className='em-blog-icon-title'>
                      <h6> Amantha </h6>
                    </div>
                  </div>
                  <div className='blog-button'>
                    <Link legacyBehavior href='/blog-details'>
                      <a>
                        {" "}
                        Learn More <i className='bi bi-plus' />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='blog-shape'>
              <div className='port-shape-thumb2 bounce-animate2'>
                <img src='assets/images/resource/all-shape6.png' alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen Blog Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen Subscribe Area */}
      {/*==================================================*/}
      <div className='subscribe-area style-two mt-5 mt-sm-0'>
        <div className='container'>
          <div className='subscribe'>
            <div className='row align-items-center'>
              <div className='col-lg-4 col-md-12'>
                <div className='subscribe-title'>
                  <h1>Get your Free Business Consolution</h1>
                </div>
              </div>
              <div className='col-lg-8 col-md-12'>
                <a href='tel:09837393403' className='subscribe-icon'>
                  <i className='bi bi-telephone-inbound' />
                </a>
                <div className='subscribe-title2'>
                  <h1> +98 376 (2890) 100 </h1>
                  <p> example@gmail.com </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Landing1;
