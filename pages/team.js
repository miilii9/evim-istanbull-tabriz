import Breadcumb from "@/src/components/Breadcumb";
import ProgressBar from "@/src/components/ProgressBar";
import Layout from "@/src/layout/Layout";
import { brandListProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const Team = () => {
  return (
    <Layout>
      <Breadcumb pageName={"Our Team"} />

      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      <div className="about-area style-three upper1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 ">
              <div className="consen-section-title">
                <h5> About Consen </h5>
                <h2>
                  {" "}
                  We Are Global Stakeholder Over 2000+ <span> Companies </span>
                </h2>
                <p className="about-text1">
                  {" "}
                  Appropriately enhance principle-centered innovation rather
                  than high standards in platforms. Credibly orchestrate
                  functional.{" "}
                </p>
              </div>
              <div className="dreamit-icon-box">
                <div className="dreamit-icon-list">
                  <ul>
                    <li>
                      <i className="bi bi-arrow-right-circle" />{" "}
                      <span> Communicate orthogonal process</span>
                    </li>
                    <li>
                      <i className="bi bi-arrow-right-circle" />{" "}
                      <span> Professionally grow cutting-edge paradigms </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* progress bar */}
              <div className="progress-box">
                <ProgressBar value={95} />
                <div className="circle-progress-title">
                  <h4>
                    {" "}
                    Clients <br /> Satisfactions{" "}
                  </h4>
                </div>
                <div className="extra-progress">
                  <ProgressBar value={85} />
                  <div className="circle-progress-title">
                    <h4>
                      {" "}
                      Clients <br /> Satisfactions{" "}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="about-button">
                <Link legacyBehavior href="/about">
                  <a>
                    {" "}
                    <i className="bi bi-gear" /> More About{" "}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="dreamit-about-thumb">
                <img src="assets/images/about/about-2.png" alt />
                {/* about-shape */}
                <div className="about-shape-thumb1 bounce-animate2">
                  <img src="assets/images/about/about-shpe.png" alt />
                </div>
                <div className="about-shape-thumb3 bounce-animate4">
                  <img src="assets/images/about/about-shape4.png" alt />
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
      {/* Start Brand Section */}
      {/*===================================================*/}
      <div className="brand-section upper1">
        <div className="container">
          <div className="row">
            <Swiper {...brandListProps} className="brand-list owl-carousel">
              <SwiperSlide className="single-brand">
                <img src="assets/images/resource/brand-1.png" alt="Brand" />
              </SwiperSlide>
              <SwiperSlide className="single-brand">
                <img src="assets/images/resource/brand-2.png" alt="Brand" />
              </SwiperSlide>
              <SwiperSlide className="single-brand">
                <img src="assets/images/resource/brand-3.png" alt="Brand" />
              </SwiperSlide>
              <SwiperSlide className="single-brand">
                <img src="assets/images/resource/brand-4.png" alt="Brand" />
              </SwiperSlide>
              <SwiperSlide className="single-brand">
                <img src="assets/images/resource/brand-5.png" alt="Brand" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start consen Team Area */}
      {/*==================================================*/}
      <div className="team_area style-two upp">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="consen-section-title upper text-center pb-60">
                <h5> Team Member </h5>
                <h2>
                  {" "}
                  Let’s Meet with Our <span> Experts </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single_team">
                <div className="single_team_thumb1">
                  <img src="assets/images/resource/team-1.jpg" alt="logo" />
                </div>
                <div className="single_team_content">
                  <div className="team-title">
                    <h4>Silvia Garden</h4>
                    <span>Designer</span>
                  </div>
                  <div className="single_team_icon">
                    <a href="#">
                      {" "}
                      <i className="bi bi-facebook" />{" "}
                    </a>
                    <a href="#">
                      {" "}
                      <i className="bi bi-twitter" />{" "}
                    </a>
                    <a href="#">
                      <i className="bi bi-dribbble" />
                    </a>
                    <a href="#">
                      {" "}
                      <i className="bi bi-instagram"> </i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_team">
                <div className="single_team_thumb1">
                  <img src="assets/images/resource/team-2.jpg" alt="image" />
                </div>
                <div className="single_team_content">
                  <div className="team-title">
                    <h4> Monalisha Shen </h4>
                    <span> IT-Executive </span>
                  </div>
                  <div className="single_team_icon">
                    <a href="#">
                      {" "}
                      <i className="bi bi-facebook" />{" "}
                    </a>
                    <a href="#">
                      {" "}
                      <i className="bi bi-twitter" />{" "}
                    </a>
                    <a href="#">
                      <i className="bi bi-dribbble" />
                    </a>
                    <a href="#">
                      {" "}
                      <i className="bi bi-instagram"> </i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_team">
                <div className="single_team_thumb1">
                  <img src="assets/images/resource/team-3.jpg" alt="image" />
                </div>
                <div className="single_team_content">
                  <div className="team-title">
                    <h4>Bubli Khanam</h4>
                    <span>Developer</span>
                  </div>
                  <div className="single_team_icon">
                    <a href="#">
                      {" "}
                      <i className="bi bi-facebook" />{" "}
                    </a>
                    <a href="#">
                      {" "}
                      <i className="bi bi-twitter" />{" "}
                    </a>
                    <a href="#">
                      <i className="bi bi-dribbble" />
                    </a>
                    <a href="#">
                      {" "}
                      <i className="bi bi-instagram"> </i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_team">
                <div className="single_team_thumb1">
                  <img src="assets/images/resource/team-1.jpg" alt="logo" />
                </div>
                <div className="single_team_content">
                  <div className="team-title">
                    <h4>Silvia Garden</h4>
                    <span>Designer</span>
                  </div>
                  <div className="single_team_icon">
                    <a href="#">
                      {" "}
                      <i className="bi bi-facebook" />{" "}
                    </a>
                    <a href="#">
                      {" "}
                      <i className="bi bi-twitter" />{" "}
                    </a>
                    <a href="#">
                      <i className="bi bi-dribbble" />
                    </a>
                    <a href="#">
                      {" "}
                      <i className="bi bi-instagram"> </i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_team">
                <div className="single_team_thumb1">
                  <img src="assets/images/resource/team-2.jpg" alt="image" />
                </div>
                <div className="single_team_content">
                  <div className="team-title">
                    <h4> Monalisha Shen </h4>
                    <span> IT-Executive </span>
                  </div>
                  <div className="single_team_icon">
                    <a href="#">
                      {" "}
                      <i className="bi bi-facebook" />{" "}
                    </a>
                    <a href="#">
                      {" "}
                      <i className="bi bi-twitter" />{" "}
                    </a>
                    <a href="#">
                      <i className="bi bi-dribbble" />
                    </a>
                    <a href="#">
                      {" "}
                      <i className="bi bi-instagram"> </i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_team">
                <div className="single_team_thumb1">
                  <img src="assets/images/resource/team-3.jpg" alt="image" />
                </div>
                <div className="single_team_content">
                  <div className="team-title">
                    <h4>Bubli Khanam</h4>
                    <span>Developer</span>
                  </div>
                  <div className="single_team_icon">
                    <a href="#">
                      {" "}
                      <i className="bi bi-facebook" />{" "}
                    </a>
                    <a href="#">
                      {" "}
                      <i className="bi bi-twitter" />{" "}
                    </a>
                    <a href="#">
                      <i className="bi bi-dribbble" />
                    </a>
                    <a href="#">
                      {" "}
                      <i className="bi bi-instagram"> </i>{" "}
                    </a>
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
export default Team;
