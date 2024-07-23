import Breadcumb from "@/src/components/Breadcumb";
import Layout from "@/src/layout/Layout";
const PortfolioDetails = () => {
  return (
    <Layout>
      <Breadcumb pageName={"Portfolio Detials"} />
      <div className="case-study-details">
        <div className="container">
          <div className="case-study-intro">
            <div className="row align-items-center">
              <div className=" col-sm-12 col-md-6 col-lg-6">
                <div className="csd-thumb">
                  <img
                    src="assets/images/resource/portfolio-details.jpg"
                    alt="thumb"
                  />
                </div>
              </div>
              <div className=" col-sm-12 col-md-6 col-lg-6">
                <div className="csd-info">
                  <div className="csd-title pt-30 mb-4">
                    <h3>Portfolio Information</h3>
                  </div>
                  <ul>
                    <li>
                      <strong>Project</strong>{" "}
                      <span>Creative template design</span>{" "}
                    </li>
                    <li className="hr-4">
                      <strong>Category </strong>{" "}
                      <span>Graphics design / Web design</span>
                    </li>
                    <li className="hr-4">
                      <strong>Client </strong> <span>Jhon Doe</span>{" "}
                    </li>
                    <li className="hr-4">
                      <strong>Completed </strong> <span>01 March, 2023</span>{" "}
                    </li>
                    <li className="hr-4">
                      <strong>Skills </strong>{" "}
                      <span>Photoshop / Illustrator</span>{" "}
                    </li>
                  </ul>
                  <div className="share-text">
                    <h4>Share:</h4>
                  </div>
                  <div className="csd-social-icon">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="case-study-intro upp">
            <div className="csd-content">
              <div className="csd-title pb-10">
                <h2>Growth Strategies</h2>
              </div>
              <p>
                Whether you are building an enterprise web portal or a
                state-of-the-art website, you always need the right modern
                tools. Well-builtst and maintained PHP frameworks provide those
                tools maintained PHP frameworks provide those tools in
                abundance, allowing thiatse developers to save time, re-use
                code, and streamlin the back end. As software development tools
                continuously change to follow the latest. Despite the
                competition from startups and the ever-present economic
                challenges, the banking industry is gradually adopting what the
                latest technologies have to offer. From cloud technology to
                cyber risk management to machine learning thats investment
                banking, join us as we explore the banking industry trends for
                2023 and beyond. Cloud is one of the industry trends as well.
              </p>
              <img
                className="my-4"
                src="assets/images/case/1.jpg"
                alt="Case image"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus incidunt voluptatem ratione assumenda tenetur nam
                quod quaerat eligendi! Soluta dolores eaque ab, omnis temporibus
                consectetur repellat nisi error atque eveniet culpa totam,
                voluptas minima perspiciatis. Sunt eveniet magni culpa explicabo
                mollitia asperiores omnis modi dolorem obcaecati totam veniam,
                animi consequuntur Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nihil dolore consequatur ducimus tempore
                expedita? Neque, consequuntur. Enim, harum! Quas, sit.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nostrum odit, quasi culpa commodi temporibus laboriosam! Sit at
                fuga non, totam doloremque voluptas delectus possimus error?
                Ullam adipisci fuga deserunt blanditiis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default PortfolioDetails;
