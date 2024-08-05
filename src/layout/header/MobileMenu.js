import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='mobile-menu-area d-sm-block d-md-block d-lg-none header____'>
      <div className='mobile-menu mean-container'>
        <div className={`mean-bar ${toggle ? "toggleOn" : ""}`}>
          <Image
            height={60}
            width={60}
            src='/assets/images/evim-logo.png'
            alt='logo'
            style={{ width: "60px" }}
            className={`${toggle ? "hideLogo" : ""}`}
          />{" "}
          <div>
            <a
              href='#nav'
              className={`meanmenu-reveal ${toggle ? "meanclose" : ""}`}
              onClick={() => setToggle(!toggle)}>
              {toggle ? (
                "X"
              ) : (
                <Fragment>
                  <span /> <span /> <span />
                </Fragment>
              )}
            </a>
            <nav className='mean-nav'>
              <ul
                className='nav_scroll'
                style={{ display: toggle ? "block" : "none" }}>
                <li>
                  <a href='/'>خانه </a>
                </li>
                <li className='mean-last'>
                  <Link legacyBehavior href='contact'>
                    <a href='/contact'>ارتباط با ما</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className='mean-push' />
      </div>
    </div>
  );
};
export default MobileMenu;
