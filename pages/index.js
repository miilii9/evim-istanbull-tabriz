import Counter from "@/src/components/Counter";
import ProssessBar from "@/src/components/ProssessBar";
import Layout from "@/src/layout/Layout";
import { brandListProps, caseStudyProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const Index = () => {
  return (
    <Layout footer={1}>
      {/*==================================================*/}
      {/* Start consen slider Area */}
      {/*==================================================*/}
      <div className="slider-area d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="slider-content">
                <h3> Work With Consen </h3>
                <h1> Innovate Solution For </h1>
                <h1>
                  {" "}
                  Business <span>Success</span>{" "}
                </h1>
                <p>
                  {" "}
                  Monotonectally implement integrated commerce and distributed
                  is conveniently unleash B2B customer service via long
                </p>
              </div>
              <div className="lines pt-20 pb-40">
                <div className="line" />
              </div>
              <div className="banner-buttons">
                <div className="slider-button">
                  <Link legacyBehavior href="/service">
                    <a>
                      {" "}
                      Work Together <i className="bi bi-plus" />{" "}
                    </a>
                  </Link>
                </div>
                <div className="slider-contact-box">
                  <a className="contact-icon" href="tel:+983217690326">
                    <img src="assets/images/slider/call.png" alt="call icon" />
                  </a>
                  <div className="contact-number">
                    <span> Call Everyday </span>
                    <h3>
                      <a href="tel:+983217690326">+98 321 (7690) 326</a>{" "}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 ">
              <div className="slider-thumb">
                <img src="assets/images/slider/hero-img.png" alt />
              </div>
              <div className="video-icon">
                <a
                  className="video-vemo-icon venobox vbox-item"
                  data-vbtype="youtube"
                  data-autoplay="true"
                  href="https://youtu.be/BS4TUd7FJSg"
                >
                  <i className="fa fa-play" />
                </a>
              </div>
            </div>
            {/* slider shape */}
            <div className="slider-shape">
              <div className="slider-shape-thumb">
                <img src="assets/images/slider/hero-shape.png" alt />
              </div>
              <div className="slider-shape-thumb2">
                <img src="assets/images/slider/hero-shape2.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/*End consen slider Area  */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen feature Area */}
      {/*==================================================*/}
      <div className="service-area">
        <div className="container">
          <div className="row align-items-center mb-90">
            <div className="col-lg-7 col-md-8 pl-0">
              <div className="consen-section-title mobile-center">
                <h2> We Run All Kinds Of Services</h2>
                <h2>
                  {" "}
                  From <span> Technologies </span>
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-4">
              <div className="consen-button text-right">
                <Link legacyBehavior href="/service">
                  <a>
                    {" "}
                    All Service <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6 p-0">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon">
                    <img src="assets/images/resource/service-icon.png" alt />
                  </div>
                  <div className="em-service-title">
                    <h2> Interacture Capacity Planning </h2>
                  </div>
                  <div className="service-number">
                    <h1> 01 </h1>
                  </div>
                  <div className="em-service-text">
                    <p>
                      {" "}
                      Dramatically cultivate from quality user centric growth
                      strateges emerging{" "}
                    </p>
                  </div>
                  <div className="service-button">
                    <Link legacyBehavior href="/service-details">
                      <a>
                        {" "}
                        Read More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 p-0">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon">
                    <img src="assets/images/resource/service-icon2.png" alt />
                  </div>
                  <div className="em-service-title">
                    <h2> New Technology Services </h2>
                  </div>
                  <div className="service-number">
                    <h1> 02 </h1>
                  </div>
                  <div className="em-service-text">
                    <p>
                      {" "}
                      Dramatically cultivate from quality user centric growth
                      strateges emerging{" "}
                    </p>
                  </div>
                  <div className="service-button">
                    <Link legacyBehavior href="/service-details">
                      <a>
                        {" "}
                        Read More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 p-0">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon">
                    <img src="assets/images/resource/service-icon3.png" alt />
                  </div>
                  <div className="em-service-title">
                    <h2> Cloud Computing Solutions </h2>
                  </div>
                  <div className="service-number">
                    <h1> 03 </h1>
                  </div>
                  <div className="em-service-text">
                    <p>
                      {" "}
                      Dramatically cultivate from quality user centric growth
                      strateges emerging{" "}
                    </p>
                  </div>
                  <div className="service-button">
                    <Link legacyBehavior href="/service-details">
                      <a>
                        {" "}
                        Read More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 p-0">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon">
                    <img src="assets/images/resource/service-icon.png" alt />
                  </div>
                  <div className="em-service-title">
                    <h2> Top Information Technology </h2>
                  </div>
                  <div className="service-number">
                    <h1> 04 </h1>
                  </div>
                  <div className="em-service-text">
                    <p>
                      {" "}
                      Dramatically cultivate from quality user centric growth
                      strateges emerging{" "}
                    </p>
                  </div>
                  <div className="service-button">
                    <Link legacyBehavior href="/service-details">
                      <a>
                        {" "}
                        Read More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
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
      <div className="about-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="dreamit-about-thumb">
                <img src="assets/images/about/about.png" alt />
                {/* about-shape */}
                <div className="about-shape-thumb1 bounce-animate2">
                  <img src="assets/images/about/about-shape2.png" alt />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 ">
              <div className="consen-section-title white pb-10">
                <h2> The Fatest Way To Achieve</h2>
                <h2>
                  {" "}
                  Your Business <span> Success </span>
                </h2>
                <p>
                  Continually generate 2.0 communities and client-focused
                  products. In synergize strategic manufactured products whereas
                  levera.
                </p>
              </div>
              <div className="lines style-two pb-15">
                <div className="line" />
              </div>
              <div className="dreamit-icon-title">
                <h4>
                  {" "}
                  We are Since <span>2007 to Present</span> in Sandigo, USA{" "}
                </h4>
              </div>
              <div className="dreamit-icon-list">
                <ul>
                  <li>
                    <i className="flaticon-tick" />{" "}
                    <span> Credibly reinvent sticky partnerships done </span>
                  </li>
                  <li>
                    <i className="flaticon-tick" />{" "}
                    <span>
                      {" "}
                      Distinctively evisculate data superior content.
                    </span>
                  </li>
                  <li>
                    <i className="flaticon-tick" />{" "}
                    <span> Monotonectally foster open source </span>
                  </li>
                </ul>
              </div>
              <div className="about-button">
                <Link legacyBehavior href="/about">
                  <a>
                    {" "}
                    Learn More <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>
            {/* about thumb */}
            <div className="about-shape-thumb2 bounce-animate4">
              <img src="assets/images/resource/all-shape.png" alt />
            </div>
          </div>
          <div className="row counter-vip">
            <div className="col-lg-12">
              <div className="couter-top-title">
                <h3> Consen Finished this Achivement in 7 Years </h3>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={1372} />
                  </h4>
                  <p>Project Complete</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={23} />
                  </h4>
                  <span>+</span>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={38} />
                  </h4>
                  <span>+</span>
                  <p>Exper Member</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={1372} />
                  </h4>
                  <span>+</span>
                  <p>Satisfactions Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      <div className="ceo-cod-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 ">
              <div className="consen-section-title">
                <h2> What Say Our CEO, About</h2>
                <h2>
                  {" "}
                  Consen <span> Customers </span>
                </h2>
                <div className="lines style-three pt-20 pb-10">
                  <div className="line" />
                </div>
                <p className="about-text">
                  {" "}
                  “We help Our Clients to Renew Their Business Function to
                  Create Brandable Organizations”{" "}
                </p>
                <p className="about-text2">
                  Appropriately enhance principle-centered innovation rather
                  than high standards in platforms. Credibly orchestrate
                  functional markets through multidisciplinary services.
                  Uniquely strategize transparent technology and user friendly
                  ideas markets.{" "}
                </p>
              </div>
              <div className="dreamit-ceo-title">
                <h4> Philip Antrophy </h4>
                <span>SEO &amp; Founder</span>
              </div>
              <div className="about-button">
                <Link legacyBehavior href="/testimonial">
                  <a>
                    {" "}
                    Clients Review <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="dreamit-about-thumb1">
                <img src="assets/images/about/about2.png" alt />
              </div>
              <div className="about-shape-box">
                <div className="about-shape-thumb bounce-animate">
                  <img src="assets/images/about/ab-shape.png" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen case study Area */}
      {/*==================================================*/}
      <div className="case-study-area">
        <div className="container">
          <div className="row case-study-bg align-items-center mb-40">
            <div className="col-lg-6 col-md-8">
              <div className="consen-section-title mobile-center white ">
                <h2> We Serve the Best Works</h2>
                <h2>
                  {" "}
                  View <span> Case Studies </span>
                </h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-4">
              <div className="consen-button text-right">
                <Link legacyBehavior href="/portfolio">
                  <a>
                    {" "}
                    All Project <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>
            <div className="case-study-shape">
              <div className="case-shape-thumb bounce-animate4">
                <img src="assets/images/resource/red-dot.png" alt />
              </div>
              <div className="case-shape-thumb1 bounce-animate2">
                <img src="assets/images/resource/all-shape.png" alt />
              </div>
            </div>
          </div>
          <div className="row">
            <Swiper {...caseStudyProps} className="case-study owl-carousel">
              <SwiperSlide>
                <div className="case-study-single-box">
                  <div className="case-study-thumb">
                    <img src="assets/images/project/case2.png" alt />
                    <div className="case-study-content">
                      <div className="case-study-title">
                        <h6> Consulting </h6>
                        <h3>
                          {" "}
                          <Link legacyBehavior href="/portfolio-details">
                            <a> Consulting for Business Organizations</a>
                          </Link>
                        </h3>
                      </div>
                      <div className="case-button">
                        <Link legacyBehavior href="/portfolio-details">
                          <a>
                            Read More <i className="bi bi-plus" />{" "}
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="video-icon style-two">
                      <a
                        className="video-vemo-icon venobox vbox-item"
                        data-vbtype="youtube"
                        data-autoplay="true"
                        href="https://youtu.be/BS4TUd7FJSg"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="case-study-single-box">
                  <div className="case-study-thumb">
                    <img src="assets/images/project/case3.png" alt />
                    <div className="case-study-content">
                      <div className="case-study-title">
                        <h6> Consulting </h6>
                        <h3>
                          {" "}
                          <Link legacyBehavior href="/portfolio-details">
                            <a> Strategy and Planning Building Idea</a>
                          </Link>
                        </h3>
                      </div>
                      <div className="case-button">
                        <Link legacyBehavior href="/portfolio-details">
                          <a>
                            Read More <i className="bi bi-plus" />{" "}
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="video-icon style-two">
                      <a
                        className="video-vemo-icon venobox vbox-item"
                        data-vbtype="youtube"
                        data-autoplay="true"
                        href="https://youtu.be/BS4TUd7FJSg"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="case-study-single-box">
                  <div className="case-study-thumb">
                    <img src="assets/images/project/case1.png" alt />
                    <div className="case-study-content">
                      <div className="case-study-title">
                        <h6> Consulting </h6>
                        <h3>
                          {" "}
                          <Link legacyBehavior href="/portfolio-details">
                            <a> Corporate Finance for helpfulness Markets</a>
                          </Link>
                        </h3>
                      </div>
                      <div className="case-button">
                        <Link legacyBehavior href="/portfolio-details">
                          <a>
                            Read More <i className="bi bi-plus" />{" "}
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="video-icon style-two">
                      <a
                        className="video-vemo-icon venobox vbox-item"
                        data-vbtype="youtube"
                        data-autoplay="true"
                        href="https://youtu.be/BS4TUd7FJSg"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="case-study-single-box">
                  <div className="case-study-thumb">
                    <img src="assets/images/project/case2.png" alt />
                    <div className="case-study-content">
                      <div className="case-study-title">
                        <h6> Consulting </h6>
                        <h3>
                          {" "}
                          <Link legacyBehavior href="/portfolio-details">
                            <a> Consulting for Business Organizations</a>
                          </Link>
                        </h3>
                      </div>
                      <div className="case-button">
                        <Link legacyBehavior href="/portfolio-details">
                          <a>
                            Read More <i className="bi bi-plus" />{" "}
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="video-icon style-two">
                      <a
                        className="video-vemo-icon venobox vbox-item"
                        data-vbtype="youtube"
                        data-autoplay="true"
                        href="https://youtu.be/BS4TUd7FJSg"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="case-study-single-box">
                  <div className="case-study-thumb">
                    <img src="assets/images/project/case3.png" alt />
                    <div className="case-study-content">
                      <div className="case-study-title">
                        <h6> Consulting </h6>
                        <h3>
                          {" "}
                          <Link legacyBehavior href="/portfolio-details">
                            <a> Strategy and Planning Building Idea</a>
                          </Link>
                        </h3>
                      </div>
                      <div className="case-button">
                        <Link legacyBehavior href="/portfolio-details">
                          <a>
                            Read More <i className="bi bi-plus" />{" "}
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="video-icon style-two">
                      <a
                        className="video-vemo-icon venobox vbox-item"
                        data-vbtype="youtube"
                        data-autoplay="true"
                        href="https://youtu.be/BS4TUd7FJSg"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="case-study-single-box">
                  <div className="case-study-thumb">
                    <img src="assets/images/project/case2.png" alt />
                    <div className="case-study-content">
                      <div className="case-study-title">
                        <h6> Consulting </h6>
                        <h3>
                          {" "}
                          <Link legacyBehavior href="/portfolio-details">
                            <a> Consulting for Business Organizations</a>
                          </Link>
                        </h3>
                      </div>
                      <div className="case-button">
                        <Link legacyBehavior href="/portfolio-details">
                          <a>
                            Read More <i className="bi bi-plus" />{" "}
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="video-icon style-two">
                      <a
                        className="video-vemo-icon venobox vbox-item"
                        data-vbtype="youtube"
                        data-autoplay="true"
                        href="https://youtu.be/BS4TUd7FJSg"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="case-study-single-box">
                  <div className="case-study-thumb">
                    <img src="assets/images/project/case3.png" alt />
                    <div className="case-study-content">
                      <div className="case-study-title">
                        <h6> Consulting </h6>
                        <h3>
                          {" "}
                          <Link legacyBehavior href="/portfolio-details">
                            <a>Strategy and Planning Building Idea</a>
                          </Link>
                        </h3>
                      </div>
                      <div className="case-button">
                        <Link legacyBehavior href="/portfolio-details">
                          <a>
                            Read More <i className="bi bi-plus" />{" "}
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="video-icon style-two">
                      <a
                        className="video-vemo-icon venobox vbox-item"
                        data-vbtype="youtube"
                        data-autoplay="true"
                        href="https://youtu.be/BS4TUd7FJSg"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen case study Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen process Area */}
      {/*==================================================*/}
      <div className="process-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="row process-bg">
                <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box">
                    <div className="process-number">
                      <span>1</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        Idea <span> Generate </span>
                      </h3>
                      <p>Appropriately enhance data centered innovation</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box upper">
                    <div className="process-number">
                      <span>2</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        {" "}
                        System <span> Design </span>
                      </h3>
                      <p>Appropriately enhance data centered innovation</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box upper1">
                    <div className="process-number">
                      <span>3</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        {" "}
                        24/7 <span> Support </span>
                      </h3>
                      <p>Appropriately enhance data centered innovation</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box upper2">
                    <div className="process-number">
                      <span>4</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        {" "}
                        Sales <span> Generate </span>
                      </h3>
                      <p>Appropriately enhance data centered innovation</p>
                    </div>
                  </div>
                </div>
                <div className="process-shape">
                  <div className="process-thumb">
                    <img src="assets/images/resource/process-shape.png" alt />
                  </div>
                  <div className="process-thumb1">
                    <img src="assets/images/resource/dreamit-shape.png" alt />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 pl-lg-50">
              <div className="consen-section-title mt-4 mt-lg-0">
                <h2> The Fatest Way To Achieve </h2>
                <h2>
                  {" "}
                  Technology <span> Consulting </span>
                </h2>
              </div>
              <div className="lines style-three pt-30 pb-10">
                <div className="line" />
              </div>
              <div className="dreamit-smart-title">
                <h4>
                  {" "}
                  For Choose <span>Consen</span> Before know who we are?{" "}
                </h4>
                <p>
                  Monotonectally brand worldwide value before in seamless
                  process data Collaboratively initiate strategic expertise
                  after functionalized models in. Synergistically synthesize
                  front-end convergence whereas resource tosynergy.
                  Collaboratively the expedite focused architectures rather than
                  resources. Enthusiastically extensive.
                </p>
              </div>
              <div className="about-button">
                <Link legacyBehavior href="/about">
                  <a>
                    {" "}
                    More About <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row pt-50">
            <div className="col-lg-12">
              <div className="dreamits-top-title">
                <h3> More Then 5K+ Brands with work Consen</h3>
              </div>
            </div>
          </div>
          <div className="row pt-30">
            <Swiper {...brandListProps} className="brand-list owl-carousel">
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/allian.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/figma.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/google.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/redit.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/allian.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/figma.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/google.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/redit.png" alt />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen process Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen Skills Area Css */}
      {/*==================================================*/}
      <div className="skill-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="extra-animation-div">
                <div className="consen-section-title white">
                  <h2> Join the Community to learn </h2>
                  <h2>
                    {" "}
                    About our <span>Company</span>
                  </h2>
                </div>
                <div className="lines style-three upper pt-30 pb-10">
                  <div className="line" />
                </div>
                <div className="dreamit-smart-title">
                  <p className="slill-text">
                    Continually generate 2.0 communities and client-focused
                    products. In synergize strategic manufactured products
                    whereas levera.
                  </p>
                </div>
              </div>
              <ProssessBar />
            </div>
            <div className="col-md-6">
              <div className="slill-single-thumb mt-4 mt-lg-0 pl-50 ml-1">
                <img src="assets/images/resource/skill.png" alt />
                {/* thumb content */}
                <div className="skill-thumb-content">
                  <div className="skill-title">
                    <h3 className="counter"> 17 </h3>
                    <span>+</span>
                    <h5> YEARS EXPERIENCE </h5>
                  </div>
                </div>
                {/* skill shape */}
                <div className="skill-shape dance">
                  <img src="assets/images/resource/skill-shape.png" alt />
                </div>
                <div className="skill-shape1 bounce-animate2">
                  <img src="assets/images/resource/all-shape.png" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen Skill Area Css */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen Blog Area */}
      {/*==================================================*/}
      <div className="blog-area blog-new">
        <div className="container">
          <div className="row align-items-center mb-40">
            <div className="col-lg-7 col-md-8">
              <div className="consen-section-title mobile-center">
                <h2> We’re here to share story </h2>
                <h2>
                  {" "}
                  from Latest <span> News </span>
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-4">
              <div className="consen-button text-right">
                <Link legacyBehavior href="/blog-grid">
                  <a>
                    {" "}
                    View all Blog <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <img src="assets/images/resource/blog1.png" alt />
                  <div className="blog-top-button">
                    <a href="#"> GRAPHIC </a>
                  </div>
                </div>
                <div className="em-blog-content">
                  <div className="meta-blog-text">
                    <p> August 25, 2023 </p>
                  </div>
                  <div className="em-blog-title">
                    <h2>
                      {" "}
                      <Link legacyBehavior href="/blog-details">
                        <a> Popular Consultants are big Meetup 2023 </a>
                      </Link>{" "}
                    </h2>
                  </div>
                  <div className="em-blog-icon">
                    <div className="em-blog-thumb">
                      <img src="assets/images/resource/blog-icon.png" alt />
                    </div>
                    <div className="em-blog-icon-title">
                      <h6> Alex Collins </h6>
                    </div>
                  </div>
                  <div className="blog-button">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        {" "}
                        Learn More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <img src="assets/images/resource/blog2.png" alt />
                  <div className="blog-top-button">
                    <a href="#"> DEVELOPMENT </a>
                  </div>
                </div>
                <div className="em-blog-content">
                  <div className="meta-blog-text">
                    <p> August 21, 2023 </p>
                  </div>
                  <div className="em-blog-title">
                    <h2>
                      {" "}
                      <Link legacyBehavior href="/blog-details">
                        <a> How to Increase Business Products Sales </a>
                      </Link>{" "}
                    </h2>
                  </div>
                  <div className="em-blog-icon">
                    <div className="em-blog-thumb">
                      <img src="assets/images/resource/blog-icon.png" alt />
                    </div>
                    <div className="em-blog-icon-title">
                      <h6> Julia Moris </h6>
                    </div>
                  </div>
                  <div className="blog-button">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        {" "}
                        Learn More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <img src="assets/images/resource/blog3.png" alt />
                  <div className="blog-top-button">
                    <a href="#"> DESIGN </a>
                  </div>
                </div>
                <div className="em-blog-content">
                  <div className="meta-blog-text">
                    <p> August 20, 2023 </p>
                  </div>
                  <div className="em-blog-title">
                    <h2>
                      {" "}
                      <Link legacyBehavior href="/blog-details">
                        <a> Top 10 Most Populars Google Chrome app</a>
                      </Link>
                    </h2>
                  </div>
                  <div className="em-blog-icon">
                    <div className="em-blog-thumb">
                      <img src="assets/images/resource/blog-icon.png" alt />
                    </div>
                    <div className="em-blog-icon-title">
                      <h6> Amantha </h6>
                    </div>
                  </div>
                  <div className="blog-button">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        {" "}
                        Learn More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Index;
