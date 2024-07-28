import Link from "next/link";

const DefaultFooter = () => {
  return (
    <div className='footer-middle style-two' dir='rtl'>
      <div className='container'>
        <div className='footer-bg'>
          <div className='row'>
            <div className='col-lg-4 col-sm-6'>
              <div className='widget widgets-company-info mb-4 mb-lg-0'>
                <div className='company-info-desc pr-2'>
                  <h4 className='widget-title'> درباره ما </h4>
                  <p>
                    شرکت مهاجرتی اویم استانبول ( evim istanbul group ) صفر تا صد
                    شروع کار و زندگی و اقامت در استانبول ، مجری خرید و فروش واحد
                    های مسکونی و تجاری و اداری در ترکیه استانبول، اخذ انواع
                    اقامت بصورت تضمینی در ترکیه، اخذ چالیشما ایزنی (اجازه کار )
                    بصورت تضمینی، خدمات صرافی و مترجمی و ترنسفر از فرودگاه،
                    کاریابی با توجه به حرفه، اجاره واحد های مبله و خالی استانبول
                    بصورت سالانه و کوتاه مدت
                  </p>
                </div>
                <div className='follow-company-icon'>
                  <a
                    target='_blank'
                    className='social-icon-color'
                    href='https://api.whatsapp.com/send?phone=905411852316'>
                    {" "}
                    <i className='bi bi-whatsapp' />{" "}
                  </a>
                  <a
                    target='_blank'
                    className='social-icon-color2'
                    href='https://www.instagram.com/evimistanbull.tab/'>
                    {" "}
                    <i className='bi bi-instagram'> </i>{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-6'>
              <div className='widget widget-nav-menu'>
                <h4 className='widget-title'>اویم استانبول</h4>
                <div className='menu-quick-link-content'>
                  <ul className='footer-menu'>
                    <li>
                      <Link legacyBehavior href='/landing-1'>
                        خانه
                      </Link>
                    </li>
                    {/* <li>
                      <Link legacyBehavior href='about'>
                        درباره ما
                      </Link>
                    </li> */}
                    <li>
                      <Link legacyBehavior href='contact'>
                        ارتباط با ما
                      </Link>
                    </li>
                    {/* <li>
                      <Link legacyBehavior href='service'>
                        Service
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className='col-lg-3 col-6'>
              <div className='widget widget-nav-menu'>
                <h4 className='widget-title'> Services </h4>
                <div className='menu-quick-link-content'>
                  <ul className='footer-menu'>
                    <li>
                      <a href='#'> Strategy &amp; Planing </a>
                    </li>
                    <li>
                      <a href='#'> Consumer Market </a>
                    </li>
                    <li>
                      <a href='#'> Data Analysis </a>
                    </li>
                    <li>
                      <a href='#'> Corporate Finance </a>
                    </li>
                    <li>
                      <a href='#'> Market Research </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            {/* <div className='col-lg-3 col-sm-6'>
              <div id='em-recent-post-widget' className='mt-5 mt-sm-0'>
                <div className='single-widget-item'>
                  <h4 className='widget-title pb-2'>Popular Posts</h4>
                  <div className='contact-form-footer '>
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className='subscribe_form'>
                        <input
                          type='email'
                          name='email'
                          id='email'
                          className='form-control'
                          required=''
                          data-error='Please enter your email'
                          placeholder='Enter E-Mail'
                        />
                        <button type='submit' className='btn'>
                          {" "}
                          <i className='bi bi-send-check' />
                        </button>
                      </div>
                      <div className='subscribe_form_send'></div>
                    </form>
                  </div>
                  <div className='recent-post-item'>
                    <div className='recent-post-thumb1'>
                      <a href='#'>
                        <img
                          src='assets/images/resource/google-play.png'
                          alt=''
                        />
                      </a>
                    </div>
                    <div className='recent-post-thumb'>
                      <a href='#'>
                        <img
                          src='assets/images/resource/app-store.png'
                          alt=''
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className='foorer-shape'>
            <div className='footer-thumb'>
              <img src='assets/images/resource/red-dot.png' alt='' />
            </div>
            <div className='footer-thumb1 bounce-animate2'>
              <img src='assets/images/resource/all-shape.png' alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom-area d-flex align-items-center'>
        <div className='container'>
          <div className='row d-flex align-items-center'>
            <div className='col-md-4'>
              <div className='consen-logo'>
                <Link legacyBehavior href='/'>
                  <a className='logo_thumb' title='consen'>
                    <img
                      src='assets/images/evim-logo.png'
                      alt='logo'
                      style={{ width: "40px" }}
                    />{" "}
                  </a>
                </Link>
              </div>
            </div>
            <div className='col-md-8'>
              <div className='footer-bottom-content'>
                <div className='footer-bottom-content-copy'>
                  <p>
                    all rights reserved by <b>evim-istanbull-tab ©</b> .
                    Designed By{" "}
                    <a href='https://calagh.ir/'>
                      <span>Calagh</span>
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DefaultFooter;
