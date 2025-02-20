import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import "../css/index.css"
import banner from "../pages/images/Illustration.svg"
import arrow from "../pages/images/Arrow 1.png"
import point1 from "../pages/images/pointer 1.svg"
import blueArrow from "../pages/images/Arrow 2.png"
import point2 from "../pages/images/pointer 1.png"
import point3 from "../pages/images/pointer 1 (1).png"
import point4 from "../pages/images/pointer 1 (2).png"
import blackArrow from "../pages/images/Arrow 1 (1).png"
import work1 from "../pages/images/Card.png"
import work2 from "../pages/images/Rectangle 1313.png"
import work3 from "../pages/images/Card (1).png"
import goldArrow from "../pages/images/Arrow 2 (1).png"
import icon1 from "../pages/images/Icon (8).png"
import icon2 from "../pages/images/Icon (9).png"
import icon3 from "../pages/images/Icon (10).png"
import icon4 from "../pages/images/Icon (11).png"
import icon5 from "../pages/images/Icon (12).png"
import icon6 from "../pages/images/Icon (13).png"
import vp from "../pages/images/Mask Group.png"
import blogImg1 from "../pages/images/arabic-businessman-standing-on-street-and-using-laptop-9623794.png"
import blogImg2 from "../pages/images/woman-in-white-sleeveless-shirt-using-macbook-air-on-brown-wooden-table-3766189.png"
import blogImg3 from "../pages/images/apple-monitors-326518.png"






const Home = () => {
  return (
    <>
      {/* Banner Start */}
      <div id="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h1>Building stellar websites for early startups</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <div className="buttons">
                <button>
                  <NavLink to="/work">View our work</NavLink>
                </button>
                <NavLink to="/pricing">
                  View Pricing
                  <span>
                    <img src={arrow} alt="#arrow" />
                  </span>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-7 d-flex justify-content-end m-auto">
              <img src={banner} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Banner End */}

      {/* Work Start */}
      <div id="work">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 left">
              <h2>How we work</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <NavLink to="/contact">
                Get in touch with us
                <span>
                  <img src={blueArrow} alt="" />
                </span>
              </NavLink>
            </div>
            <div className="col-lg-7 offset-lg-1 right d-flex flex-wrap">
              <div className="item">
                <img src={point1} alt="" />
                <h3>Strategy</h3>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam .
                </p>
              </div>
              <div className="item">
                <img src={point2} alt="" />
                <h3>Wireframing</h3>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam .
                </p>
              </div>
              <div className="item">
                <img src={point3} alt="" />
                <h3>Design</h3>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam .
                </p>
              </div>
              <div className="item">
                <img src={point4} alt="" />
                <h3>Development</h3>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Work End */}

      {/* Projects Start */}
      <div id="projects">
        <div className="container">
          <div className="p-text d-lg-flex align-items-center justify-content-between">
            <h2>View our projects</h2>
            <NavLink to="/work">
              View More
              <span>
                <img src={blackArrow} alt="" />
              </span>
            </NavLink>
          </div>
          <div className="row">
            <div className="col-xl-8 left">
              <img src={work1} alt="" />
              <div className="pop">
                <h3>Workhub office Webflow Webflow Design</h3>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam
                </p>
                <NavLink to="/read-case-studies">
                  View project
                  <span>
                    <img src={goldArrow}  alt="" />
                  </span>
                </NavLink>
              </div>
            </div>
            <div className="col-xl-4 d-flex flex-column justify-content-between align-items-center right">
              <div className="img2">
                <img src={work2} alt="" />
                <div className="pop2">
                  <h3>Unisaas Website Design</h3>
                  <NavLink to="/read-case-studies">
                    View project
                    <span>
                      <img src={goldArrow}  alt="" />
                    </span>
                  </NavLink>
                </div>
              </div>
              <div className="img2">
                <img src={work3} alt="" />
                <div className="pop2">
                  <h3>Unisaas Website Design</h3>
                  <NavLink to="/read-case-studies">
                    View project
                    <span>
                      <img src={goldArrow} alt="" />
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Projects End */}

      {/* Features Start */}
      <div id="feature">
        <div className="container">
          <div className="f-text text-center">
            <p>Features</p>
            <h2>Design that solves problems, one product at a time</h2>
          </div>
          <div className="row row-gap-4">
            <div className="col-lg-4 mx-auto item">
              <img src={icon1} alt="" />
              <h3>User Client First</h3>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.
              </p>
            </div>
            <div className="col-lg-4 mx-auto item">
              <img src={icon2} alt="" />
              <h3>Two Free Revision Round</h3>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.
              </p>
            </div>
            <div className="col-lg-4 mx-auto item">
              <img src={icon3} alt="" />
              <h3>Template Customization</h3>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.
              </p>
            </div>
            <div className="col-lg-4 mx-auto item">
              <img src={icon4} alt="" />
              <h3>24/7 Support</h3>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.
              </p>
            </div>
            <div className="col-lg-4 mx-auto item">
              <img src={icon5} alt="" />
              <h3>Quick Delivery</h3>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.
              </p>
            </div>
            <div className="col-lg-4 mx-auto item">
              <img src={icon6} alt="" />
              <h3>Hands-on approach</h3>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Features End */}
      {/* testimonial start  */}
      <div id="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 left">
              <h2>What our clients say about us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
            </div>
            <div className="col-lg-7 offset-lg-1 right">
              <div
                id="carouselExampleAutoplaying"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <blockquote>
                      "The best agency we’ve worked with so far. They understand
                      our product and are able to add new features with a great
                      focus."
                    </blockquote>
                    <div className="avatar d-flex align-items-center">
                      <img src={vp} alt="" />
                      <div className="avatar-details">
                        <h5>Jenny Wilson</h5>
                        <p>Vice President</p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <blockquote>
                      "The best agency we’ve worked with so far. They understand
                      our product and are able to add new features with a great
                      focus."
                    </blockquote>
                    <div className="avatar d-flex align-items-center">
                      <img src={vp} alt="" />
                      <div className="avatar-details">
                        <h5>Jenny Wilson</h5>
                        <p>Vice President</p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <blockquote>
                      "The best agency we’ve worked with so far. They understand
                      our product and are able to add new features with a great
                      focus."
                    </blockquote>
                    <div className="avatar d-flex align-items-center">
                      <img src={vp} alt="" />
                      <div className="avatar-details">
                        <h5>Jenny Wilson</h5>
                        <p>Vice President</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* testimonial start  */}
      {/* faq start  */}
      <div id="faq">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 left">
              <h2>Frequently asked questions</h2>
              <NavLink to="/contact">Contact us for more info</NavLink>
            </div>
            <div className="col-lg-8 right">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <span>01</span>How much time does it take?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <span>02</span>What is your class naming convention?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <span>03</span>How do you communicate?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <span>04</span>I have a bigger project. Can you handle it?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      <span>05</span>What is your class naming convention?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* faq end  */}
      {/* contact start  */}
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 left">
              <h2>Building stellar websites for early startups</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim.
              </p>
            </div>
            <div className="col-lg-6 right">
              <h3>Send inquiry</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Paste your Figma design URL" />
              <button>Send an Inquiry</button>
              <NavLink to="/contact">
                Get in touch with us
                <span>
                  <img src="images/Arrow 1.png" alt="" />
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* contact end  */}
      {/* blog start  */}
      <div id="blog">
      <div className="container">
        <h2>Our blog</h2>
        <div className="row">
          <div className="col-xl-4">
            <img
              src={blogImg1}
              alt=""
            />
            <div className="blog-details">
              <p>19 Jan 2022</p>
              <h2>
                How one Webflow user grew his single person consultancy from
                $0-100K in 14 months
              </h2>
              <p className="p">
                See how pivoting to Webflow changed one person’s sales strategy
                and allowed him to attract
              </p>
              <NavLink to="/read-blog">
                Read More
                <span>
                  <img src={blackArrow} alt="" />
                </span>
              </NavLink>
            </div>
          </div>
          <div className="col-xl-4">
            <img
              src={blogImg2}
              alt=""
            />
            <div className="blog-details">
              <p>19 Jan 2022</p>
              <h2>
                How one Webflow user grew his single person consultancy from
                $0-100K in 14 months
              </h2>
              <p className="p">
                See how pivoting to Webflow changed one person’s sales strategy
                and allowed him to attract
              </p>
              <NavLink to="/read-blog">
                Read More
                <span>
                  <img src={blackArrow} alt="" />
                </span>
              </NavLink>
            </div>
          </div>
          <div className="col-xl-4">
            <img src={blogImg3} alt="" />
            <div className="blog-details">
              <p>19 Jan 2022</p>
              <h2>
                How one Webflow user grew his single person consultancy from
                $0-100K in 14 months
              </h2>
              <p className="p">
                See how pivoting to Webflow changed one person’s sales strategy
                and allowed him to attract
              </p>
              <NavLink className="text-black" to="/read-blog">
                Read More
                <span>
                  <img src={blackArrow} alt="" />
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* blog end  */}
    </>
  );
};

export default Home;
