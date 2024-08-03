import Link from "next/link";

const DefaultFooter = () => {
  return (
    <div className='footer-middle style-two' dir='rtl'>
      <div className='container'>
        <div className='footer-bg'>
          <div className='row'>
            <div className='col-lg-5 col-sm-6'>
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
            <div className='col-lg-3 col-6'>
              <div className='widget widget-nav-menu'>
                <h4 className='widget-title'>اویم استانبول</h4>
                <div className='menu-quick-link-content'>
                  <ul className='footer-menu'>
                    <li>
                      <Link legacyBehavior href='/landing-1'>
                        خانه
                      </Link>
                    </li>
                   
                    <li>
                      <Link legacyBehavior href='contact'>
                        ارتباط با ما
                      </Link>
                    </li>
                
                  </ul>
                </div>
              </div>
            </div>
            
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
