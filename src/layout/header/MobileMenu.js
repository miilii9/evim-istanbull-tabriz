import Link from "next/link";
import { Fragment, useState } from "react";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);


  return (
    <div className='mobile-menu-area d-sm-block d-md-block d-lg-none header____'>
      <div className='mobile-menu mean-container'>
        <div className='mean-bar'>
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

              {/* <li>
                <a href="#">Blog </a>
                <ul className="sub-menu" style={activeLi("Portfolio")}>
                  <li>
                    <Link legacyBehavior href="blog-grid">
                      Blog Gird
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="blog-list">
                      Blog List
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="blog-2column">
                      Blog-2Column
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="blog-details">
                      Blog Details
                    </Link>
                  </li>
                </ul>
                <a
                  className="mean-expand"
                  href="#"
                  onClick={() => activeMenuSet("Portfolio")}
                  style={{ fontSize: 18 }}
                >
                  {activeBtn("Portfolio")}
                </a>
              </li> */}
              <li className='mean-last'>
                <Link legacyBehavior href='contact'>
                  <a href='/contact'>ارتباط با ما</a>
                </Link>
              </li>
              <li className='mean-last'>
                <Link legacyBehavior href='about'>
                  <a href='#about'>درباره ما</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='mean-push' />
      </div>
    </div>
  );
};
export default MobileMenu;
