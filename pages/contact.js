import Breadcumb from "@/src/components/Breadcumb";
import Layout from "@/src/layout/Layout";
const Contact = () => {
  return (
    <Layout>
      <Breadcumb pageName={"Contact Us"} />
      {/*==================================================*/}
      {/* Start Appoinment Section */}
      {/*===================================================*/}
      <div className="contact-us pt-90 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 pl-0 pr-0">
              <div className="contact_from_box">
                <div className="contact_title pb-4">
                  <h3>Get In Touch</h3>
                </div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  method="POST"
                  id="dreamit-form"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input type="text" name="name" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input type="text" name="web" placeholder="Website" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_box mb-30">
                        <textarea
                          name="message"
                          id="message"
                          cols={30}
                          rows={10}
                          placeholder="Your Message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="quote_button">
                        <button className="btn" type="submit">
                          {" "}
                          <i className="bi bi-gear" /> Free Consultant
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div id="status" />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 pl-0 pr-0">
              <div className="cda-content-area">
                <div className="cda-single-content d-flex">
                  <div className="cda-icon">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div className="cda-content-inner">
                    <h4>Company Location</h4>
                    <p>
                      Durham Street Hialeah, <br />
                      FL 33010, USA
                    </p>
                  </div>
                </div>
                <div className="cda-single-content hr d-flex">
                  <div className="cda-icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="cda-content-inner">
                    <h4>Telephone Number</h4>
                    <p>
                      +880 636 524 265, <br />
                      +880 636 524 265,{" "}
                    </p>
                  </div>
                </div>
                <div className="cda-single-content hr d-flex">
                  <div className="cda-icon">
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="cda-content-inner">
                    <h4>Our Email Address</h4>
                    <p>
                      yourinfo@gmail.com <br />
                      yourmail@gmail.com
                    </p>
                  </div>
                </div>
                <div className="cda-single-content hr d-flex"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start Contact Location Section */}
      {/*===================================================*/}
      <div className="map-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48384.367867189205!2d-74.01058227968896!3d40.71751035716885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1609671967457!5m2!1sen!2sbd"
                width={1920}
                height={350}
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
