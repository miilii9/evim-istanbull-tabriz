import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
const LandingHeader = ({ popUpHandler }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <div
        className='header_top_menu d-flex align-items-center landing_header '
        dir='rtl'>
        <div className='container'>
          <div className='row  d-flex align-items-cente'>
            <div className='col-lg-8 col-sm-8  d-flex'>
              <div className='header_top_menu_address'>
                <div className='header_top_menu_text'>
                  <p>به اویم استانبول خوش امدید</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-sm-4 pr-0'>
              <div className='header_top_menu_icon text-right '>
                <div className='menu-title'>
                  <h6>FOLLOW US</h6>
                </div>
                <div className='header_top_menu_icon_inner'>
                  <ul>
                    <li>
                      <a
                        className='social-icon-color2'
                        href='https://api.whatsapp.com/send?phone=905411852316'>
                        {" "}
                        <i className='bi bi-whatsapp' />{" "}
                      </a>
                    </li>
                    <li className='menu-icon'>
                      <a
                        className='social-icon-color'
                        href='https://www.instagram.com/evimistanbull.tab/'>
                        {" "}
                        <i className='bi bi-instagram'> </i>{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen Header Top Menu Area Css */}
      {/*===================================================*/}
      {/*==================================================*/}
      {/* Start consen Main Menu Area */}
      {/*==================================================*/}
      <div
        id='sticky-header'
        className='consen_nav_manu style-two header____ '
        dir='rtl'>
        <div className='container '>
          <div className='row header-bg align-items-center  d-flex'>
            <div className='col-lg-3 '>
              <div className='logo'>
                <Link legacyBehavior href='/'>
                  <a className='logo_img' title='consen'>
                    <Image
                      height={60}
                      width={60}
                      src='/assets/images/evim-logo.png'
                      alt='logo'
                      style={{ width: "60px" }}
                    />
                  </a>
                </Link>
                <Link legacyBehavior href='/'>
                  <a className='main_sticky' title='consen'>
                    <Image
                      height={80}
                      width={80}
                      src='/assets/images/evim-logo.png'
                      alt='logo'
                      style={{ width: "80px " }}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className='col-lg-9 pl-0 pr-0 d-flex  align-items-center justify-content-around  '>
              <nav className='consen_menu  d-flex align-items-center justify-content-between col-12'>
                <ul className='nav_scroll col-8  d-flex align-items-center'>
                  <li>
                    <a href='/'>خانه</a>
                  </li>
                  {/* <li>
                    <Link legacyBehavior href='about'>
                      <a href='#about'>درباره ما</a>
                    </Link>
                  </li> */}

                  {/* <li>
                    <a href='#blog'>Blog</a>
                  </li> */}
                  <li>
                    <Link legacyBehavior href='contact'>
                      <a href='/contact'>ارتباط با ما</a>
                    </Link>
                  </li>
                </ul>
                <div className=' d-flex align-items-center'>
                  <div className='search-box-btn search-box-outer'>
                    <div className='nav-btn navSidebar-button'>
                      <a className='c-pointer' onClick={() => setToggle(true)}>
                        <i className='fas fa-align-left' />
                      </a>
                    </div>
                  </div>
                  <div className='header-button' onClick={popUpHandler}>
                    <Link href=''>درخواست مشاوره</Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`xs-sidebar-group info-group ${toggle ? "isActive" : ""}`}
        dir='rtl'>
        <div
          className='xs-overlay xs-bg-black'
          onClick={() => setToggle(false)}
        />
        <div className='xs-sidebar-widget'>
          <div className='sidebar-widget-container'>
            <div className='widget-heading'>
              <a
                href='#'
                className='close-side-widget'
                onClick={() => setToggle(false)}>
                <i className='far fa-times-circle' />
              </a>
            </div>
            <div className='sidebar-textwidget'>
              {/* Sidebar Info Content */}
              <div className='sidebar-info-contents'>
                <div className='content-inner'>
                  <div className='nav-logo'>
                    <a href='/'>
                      <Image
                        height={50}
                        width={50}
                        src='/assets/images/evim-logo.png'
                        alt='logo'
                        style={{ width: "50px" }}
                      />{" "}
                    </a>
                  </div>
                  <div className='content-box'>
                    <h2>درباره ما</h2>
                    <p className='text'>
                      شرکت مهاجرتی اویم استانبول یک شرکت برجسته در زمینه ساخت و
                      فروش ملک به صورت بدون واسطه در سه کشور ترکیه، قبرس و دبی
                      می‌باشد. اویم استانبول با تکیه بر تجربه و تخصص تیم خود،
                      توانسته است اعتماد و رضایت مشتریان خود را جلب کند. به طور
                      کلی، شرکت مهاجرتی اویم استانبول با ارائه خدمات متنوع و با
                      کیفیت در زمینه‌های مختلف، توانسته است جایگاه ویژه‌ای در
                      بازار ترکیه، قبرس و دبی پیدا کند
                    </p>
                    <span
                      className='theme-btn btn-style-two'
                      onClick={() => {
                        setToggle(false);
                        popUpHandler();
                      }}>
                      <span>مشاوره</span> <i className='fas fa-heart' />
                    </span>
                  </div>
                  <div className='contact-info'>
                    <h2>ارتباط با ما</h2>
                    <ul className='list-style-one'>
                      <li>
                        <span className='bi  bi-geo-alt' />
                        استانبول ,بیلیکدوزو ,محله نازیم حکمت ,ساختمان مارمارا
                        کونسپت{" "}
                      </li>
                      <li>
                        <span>
                          {" "}
                          <i className='bi bi-telephone-inbound' />{" "}
                        </span>
                        905411852316+
                      </li>
                    </ul>
                    <ul className='list-style-one'>
                      <li>
                        <span className='bi  bi-geo-alt' />
                        تبریز، ولیعصر، برج تجارت جهانی
                      </li>
                      <li>
                        <span>
                          {" "}
                          <i className='bi bi-telephone-inbound' />{" "}
                        </span>
                        989020008804+{" "}
                      </li>
                      <li>
                        <span>
                          <i className='bi bi-geo-alt' />
                        </span>
                        evimstanbull.tab@
                      </li>
                    </ul>
                  </div>
                  {/* Social Box */}
                  <ul className='social-box'>
                    <li className=''>
                      <a
                        target='_blank'
                        className='social-icon-color2'
                        href='https://api.whatsapp.com/send?phone=905411852316'>
                        {" "}
                        <i className='bi bi-whatsapp' />{" "}
                      </a>{" "}
                    </li>
                    <li className=''>
                      <a
                        target='_blank'
                        className='social-icon-color'
                        href='https://www.instagram.com/evimistanbull.tab/'>
                        {" "}
                        <i className='bi bi-instagram'> </i>{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default LandingHeader;
