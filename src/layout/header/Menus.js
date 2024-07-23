import Link from "next/link";

export const DaskTopMenusMenus = () => {
  return (
    <ul className="nav_scroll">
      {" "}
      <li>
        <a href="#">
          Home{" "}
          <span>
            <i className="fas fa-angle-down" />
          </span>
        </a>
        <ul className="sub-menu">
          {" "}
          <li>
            <Link legacyBehavior href="/">
              IT Consulting
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="index-2">
              Finance Consulting
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="/index-3">
              <a>IT Solution</a>
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="/landing-1">
              <a>Landing Page</a>
            </Link>
          </li>
        </ul>
      </li>{" "}
      <li>
        <a href="#">
          Company{" "}
          <span>
            <i className="fas fa-angle-down" />
          </span>
        </a>
        <ul className="sub-menu">
          {" "}
          <li>
            <Link legacyBehavior href="about">
              About Us
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="service">
              Our Service
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="pricing">
              Pricing
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="team">
              Our Team
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="portfolio">
              Portfolio
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="portfolio-details">
              Portfolio Details
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="404">
              404
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </li>{" "}
      <li>
        <a href="#">
          Services{" "}
          <span>
            <i className="fas fa-angle-down" />
          </span>
        </a>
        <ul className="sub-menu">
          {" "}
          <li>
            <Link legacyBehavior href="service">
              Our Service
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="service-details">
              Service Details
            </Link>
          </li>
        </ul>
      </li>{" "}
      <li>
        <Link legacyBehavior href="portfolio">
          Portfolio
        </Link>
      </li>{" "}
      <li>
        <a href="#">
          Blog{" "}
          <span>
            <i className="fas fa-angle-down" />
          </span>
        </a>
        <ul className="sub-menu">
          {" "}
          <li>
            <Link legacyBehavior href="blog-grid">
              Blog Gird
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="blog-list">
              Blog List
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="blog-2column">
              Blog-2Column
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="blog-details">
              Blog Details
            </Link>
          </li>
        </ul>
      </li>{" "}
      <li>
        <Link legacyBehavior href="contact">
          Contact
        </Link>
      </li>
    </ul>
  );
};
