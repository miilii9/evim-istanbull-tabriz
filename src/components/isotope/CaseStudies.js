import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";

const CaseStudies = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".image_load", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current_menu_item" : "");
  return (
    <Fragment>
      <div className="row case-study-bg">
        <div className="col-lg-12">
          <div className="consen-section-title upper text-center pb-50">
            <h5> Case Studies </h5>
            <h2> We Server the Best Works </h2>
            <h2>
              View <span> Case Studies </span>
            </h2>
          </div>
        </div>
        <div className="portfolio-shape">
          <div className="port-shape-thumb rotateme">
            <img src="assets/images/resource/red-dot.png" alt />
          </div>
          <div className="port-shape-thumb2 bounce-animate2">
            <img src="assets/images/resource/all-shape6.png" alt />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="portfolio_nav">
            <div className="portfolio_menu">
              <ul className="menu-filtering">
                <li
                  className={`c-pointer ${activeBtn("*")}`}
                  onClick={handleFilterKeyChange("*")}
                >
                  {" "}
                  All items{" "}
                </li>
                <li
                  className={`c-pointer ${activeBtn("physics")}`}
                  onClick={handleFilterKeyChange("physics")}
                >
                  {" "}
                  Stregy{" "}
                </li>
                <li
                  className={`c-pointer ${activeBtn("chemistry")}`}
                  onClick={handleFilterKeyChange("chemistry")}
                >
                  {" "}
                  Ficulties{" "}
                </li>
                <li
                  className={`c-pointer ${activeBtn("math")}`}
                  onClick={handleFilterKeyChange("math")}
                >
                  {" "}
                  Coaching{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row image_load">
        <div className="col-lg-4 col-md-6 grid-item physics english">
          <div className="case-study-single-box">
            <div className="case-study-thumb2">
              <img src="assets/images/project/study1.png" alt />
              {/* port icon */}
              <div className="single_portfolio_icon">
                <a
                  className="portfolio-icon venobox vbox-item"
                  data-gall="myportfolio"
                  href="assets/images/project/study1.png"
                >
                  <i className="bi bi-card-image" />
                </a>
              </div>
              <div className="case-study-content">
                <div className="case-study-content-inner">
                  <div className="case-study-title">
                    <h6> Consulting </h6>
                    <h3>
                      {" "}
                      <Link legacyBehavior href="/portfolio-details">
                        <a> Consulting for Business Organizations</a>
                      </Link>{" "}
                    </h3>
                  </div>
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
        </div>
        <div className="col-lg-4 col-md-6 grid-item physics chemistry math">
          <div className="case-study-single-box">
            <div className="case-study-thumb2">
              <img src="assets/images/project/study2.png" alt />
              {/* port icon */}
              <div className="single_portfolio_icon">
                <a
                  className="portfolio-icon venobox vbox-item"
                  data-gall="myportfolio"
                  href="assets/images/project/study2.png"
                >
                  <i className="bi bi-card-image" />
                </a>
              </div>
              <div className="case-study-content">
                <div className="case-study-content-inner">
                  <div className="case-study-title">
                    <h6> Consulting </h6>
                    <h3>
                      {" "}
                      <Link legacyBehavior href="/portfolio-details">
                        <a> Consulting for Business Organizations</a>
                      </Link>{" "}
                    </h3>
                  </div>
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
        </div>
        <div className="col-lg-4 col-md-6 grid-item chemistry english">
          <div className="case-study-single-box">
            <div className="case-study-thumb2">
              <img src="assets/images/project/study3.png" alt />
              {/* port icon */}
              <div className="single_portfolio_icon">
                <a
                  className="portfolio-icon venobox vbox-item"
                  data-gall="myportfolio"
                  href="assets/images/project/study3.png"
                >
                  <i className="bi bi-card-image" />
                </a>
              </div>
              <div className="case-study-content">
                <div className="case-study-content-inner">
                  <div className="case-study-title">
                    <h6> Consulting </h6>
                    <h3>
                      {" "}
                      <Link legacyBehavior href="/portfolio-details">
                        <a> Consulting for Business Organizations</a>
                      </Link>{" "}
                    </h3>
                  </div>
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
        </div>
        <div className="col-lg-4 col-md-6 grid-item math english">
          <div className="case-study-single-box">
            <div className="case-study-thumb2">
              <img src="assets/images/project/study4.png" alt />
              {/* port icon */}
              <div className="single_portfolio_icon">
                <a
                  className="portfolio-icon venobox vbox-item"
                  data-gall="myportfolio"
                  href="assets/images/project/study4.png"
                >
                  <i className="bi bi-card-image" />
                </a>
              </div>
              <div className="case-study-content">
                <div className="case-study-content-inner">
                  <div className="case-study-title">
                    <h6> Consulting </h6>
                    <h3>
                      {" "}
                      <Link legacyBehavior href="/portfolio-details">
                        <a> Consulting for Business Organizations</a>
                      </Link>{" "}
                    </h3>
                  </div>
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
        </div>
        <div className="col-lg-4 col-md-6 grid-item math physics">
          <div className="case-study-single-box">
            <div className="case-study-thumb2">
              <img src="assets/images/project/study5.png" alt />
              {/* port icon */}
              <div className="single_portfolio_icon">
                <a
                  className="portfolio-icon venobox vbox-item"
                  data-gall="myportfolio"
                  href="assets/images/project/study5.png"
                >
                  <i className="bi bi-card-image" />
                </a>
              </div>
              <div className="case-study-content">
                <div className="case-study-content-inner">
                  <div className="case-study-title">
                    <h6> Consulting </h6>
                    <h3>
                      {" "}
                      <Link legacyBehavior href="/portfolio-details">
                        <a> Consulting for Business Organizations</a>
                      </Link>{" "}
                    </h3>
                  </div>
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
        </div>
        <div className="col-lg-4 col-md-6 grid-item chemistry physics">
          <div className="case-study-single-box">
            <div className="case-study-thumb2">
              <img src="assets/images/project/study6.png" alt />
              {/* port icon */}
              <div className="single_portfolio_icon">
                <a
                  className="portfolio-icon venobox vbox-item"
                  data-gall="myportfolio"
                  href="assets/images/project/study6.png"
                >
                  <i className="bi bi-card-image" />
                </a>
              </div>
              <div className="case-study-content">
                <div className="case-study-content-inner">
                  <div className="case-study-title">
                    <h6> Consulting </h6>
                    <h3>
                      {" "}
                      <Link legacyBehavior href="/portfolio-details">
                        <a> Consulting for Business Organizations</a>
                      </Link>{" "}
                    </h3>
                  </div>
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
        </div>
      </div>
    </Fragment>
  );
};
export default CaseStudies;
