import Link from "next/link";
import { Fragment, useState } from "react";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [subMenus, setSubMenus] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeBtn = (value) => (value === activeMenu ? "-" : "+"),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" },
    setSub = (value, motherMenu) =>
      motherMenu === activeMenu && value == subMenus
        ? setSubMenus("")
        : setSubMenus(value),
    activeSub = (value) =>
      value === subMenus ? { display: "block" } : { display: "none" };
  return (
    <div className="mobile-menu-area d-sm-block d-md-block d-lg-none header____">
      <div className="mobile-menu mean-container">
        <div className="mean-bar">
          <a
            href="#nav"
            className={`meanmenu-reveal ${toggle ? "meanclose" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              "X"
            ) : (
              <Fragment>
                <span /> <span /> <span />
              </Fragment>
            )}
          </a>
          <nav className="mean-nav">
            <ul
              className="nav_scroll"
              style={{ display: toggle ? "block" : "none" }}
            >
              <li>
                <a href="#">Home </a>
                <ul className="sub-menu" style={activeLi("Home")}>
                  <li>
                    <Link legacyBehavior href="/">
                      IT Consulting
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="index-2">
                      Finance Consulting
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/index-3">
                      <a>IT Solution</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/landing-1">
                      <a>Landing Page</a>
                    </Link>
                  </li>
                </ul>
                <a
                  className="mean-expand"
                  href="#"
                  onClick={() => activeMenuSet("Home")}
                  style={{ fontSize: 18 }}
                >
                  {activeBtn("Home")}
                </a>
              </li>
              <li>
                <a href="#">Company </a>
                <ul className="sub-menu" style={activeLi("Company")}>
                  <li>
                    <Link legacyBehavior href="about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="service">
                      Our Service
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="pricing">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="team">
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="portfolio">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="portfolio-details">
                      Portfolio Details
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="404">
                      404
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
                <a
                  className="mean-expand"
                  href="#"
                  onClick={() => activeMenuSet("Company")}
                  style={{ fontSize: 18 }}
                >
                  {activeBtn("Company")}
                </a>
              </li>
              <li>
                <a href="#">Services </a>
                <ul className="sub-menu" style={activeLi("Services")}>
                  <li>
                    <Link legacyBehavior href="service">
                      Our Service
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="service-details">
                      Service Details
                    </Link>
                  </li>
                </ul>
                <a
                  className="mean-expand"
                  href="#"
                  onClick={() => activeMenuSet("Services")}
                  style={{ fontSize: 18 }}
                >
                  {activeBtn("Services")}
                </a>
              </li>
              <li>
                <Link legacyBehavior href="portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
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
              </li>
              <li className="mean-last">
                <Link legacyBehavior href="contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mean-push" />
      </div>
    </div>
  );
};
export default MobileMenu;
