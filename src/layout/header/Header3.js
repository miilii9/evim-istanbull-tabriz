import Link from "next/link";
import { Fragment } from "react";
import { DaskTopMenusMenus } from "./Menus";
const Header3 = () => {
  return (
    <Fragment>
      <div className="header-top-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="header-top-address">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fas fa-envelope" /> example@example.com
                    </a>
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt" />{" "}
                    <span>1st Floor New World.</span>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-phone" /> +880 320 432 242
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="header-top-social">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="fab fa-dribbble" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start Consen Main Menu Area */}
      {/*==================================================*/}
      <div
        id="sticky-header"
        className="consen_nav_manu style-three header____"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="logo">
                <Link legacyBehavior href="/">
                  <a className="logo_img" title="consen">
                    <img src="assets/images/logo2.png" alt="logo" />
                  </a>
                </Link>
                <Link legacyBehavior href="/">
                  <a className="main_sticky" title="consen">
                    <img src="assets/images/logo2.png" alt="logo" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-9 pl-0 pr-0">
              <nav className="consen_menu">
                <DaskTopMenusMenus />
                <div className="header-button">
                  <Link legacyBehavior href="contact">
                    Get A Quote
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Header3;
