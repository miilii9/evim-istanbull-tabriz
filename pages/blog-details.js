import BlogSidebar from "@/src/components/BlogSidebar";
import Breadcumb from "@/src/components/Breadcumb";
import Layout from "@/src/layout/Layout";
const BlogDetails = () => {
  return (
    <Layout>
      <Breadcumb pageName={"Blog Details"} />

      <div className="blog-section style-two details">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="blog-single-items">
                <div className="blog-thumb">
                  <img src="assets/images/resource/blog-4.jpg" alt="Blog img" />
                </div>
                <div className="blog-content">
                  <div className="blog-content-text text-left">
                    <h5>Plan Your Project with Your Software</h5>
                    <div className="blog-meta">
                      <span>
                        <a href="#">consen</a>
                      </span>{" "}
                      - <span>March 24, 2023</span> -{" "}
                      <span>
                        <a href="#"> 0 Comments</a>
                      </span>
                    </div>
                    <p>
                      Meh synth Schlitz, tempor duis single-origin coffee ea
                      next level ethnic fingerstache. Incididunt ander labore
                      amar sonar bangla ami. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo. Bccaecat cupidatat{" "}
                    </p>
                    <p>
                      Bccaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum. Sed ut perspiciatis
                      unde omnis iste natus error sit voluptatem accusantium
                      doloremque laudantium, totam rem aperiam, eaque ipsa quae
                      ab illo inventore veritatis et quasi architecto beatae
                      vitae dicta sunt explicabo .
                    </p>
                    <div className="blog-thumb">
                      <img
                        src="assets/images/resource/blog-5.jpg"
                        alt="Blog img"
                      />
                    </div>
                    <p className="pt-30 pb-1">
                      Bccaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum. Sed ut perspiciatis
                      unde omnis iste natus error sit voluptatem accusantium
                      doloremque laudantium, totam rem aperiam, eaque ipsa quae
                      ab illo inventore veritatis et quasi architecto beatae
                      vitae dicta sunt explicabo .
                    </p>
                    <div className="block-quote">
                      <p>
                        To be yourself in a world that is constantly trying to
                        make you something else is the greatest accomplishment.
                      </p>
                      <div className="block-quoto-footer">
                        – Amanda Pollock, Google Inc.
                      </div>
                    </div>
                    <p className="mb-30">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt.
                    </p>
                    <h4>A cleansing hot shower or bath</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia.
                    </p>
                    <ol>
                      <li>Digital Strategy</li>
                      <li>Software Development</li>
                      <li>Interaction Design</li>
                    </ol>
                    <h4 className="mt-40 mb-0">
                      {" "}
                      Setting the mood with incense
                    </h4>
                    <p className="mb-40 mt-10">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia.
                    </p>
                    <div className="single-blog-social-icon hr-3">
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
                            <i className="fab fa-google-plus-g" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-pinterest" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-reddit" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="comment-form pt-50">
                  <div className="comment-title mb-40">
                    <h3>Leave Comment</h3>
                    <span />
                  </div>
                  <form onSubmit={(e) => e.preventDefault()} id="dreamit-form">
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="comment-box"
                          name="comment-name"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="email"
                          className="comment-box"
                          name="comment-email"
                          placeholder="Email"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="comment-box"
                          name="comment-phone"
                          placeholder="Phone"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="comment-box"
                          name="comment-website"
                          placeholder="Your Website"
                        />
                      </div>
                      <div className="col-md-12">
                        <textarea
                          name="comment-message"
                          className="mb-20"
                          id="comment-msg-box"
                          cols={30}
                          rows={4}
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-12">
                        <div className="form-group form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                          >
                            Save my name, email, and website in this browser for
                            the next time I comment.
                          </label>
                        </div>
                      </div>
                      <input
                        type="submit"
                        defaultValue="Post Comment"
                        className="submit-comment"
                      />
                    </div>
                  </form>
                  <div id="status" />
                </div>
              </div>
            </div>
            <BlogSidebar />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default BlogDetails;
