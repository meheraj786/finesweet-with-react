import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../css/index.css"
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
              <NavLink to="/contact-us">
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
    </>
  );
};

export default Home;
