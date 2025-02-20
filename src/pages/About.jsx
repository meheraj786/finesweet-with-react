import React from 'react';
import "../css/about.css"
import bannerImg from "../pages/images/group-of-people-sitting-indoors-3184360.png"
import goalImg from "../pages/images/man-in-blue-jacket-looking-at-white-board-7413916.png"
import line from "../pages/images/Line Indicator.png"
import missionImg1 from "../pages/images/a-man-standing-in-an-office-7792811.png"
import missionImg2 from "../pages/images/group-of-people-sitting-indoors-3184360.png"
import icon1 from "../pages/images/Icon (13).png"
import icon2 from "../pages/images/Icon (10).png"
import icon3 from "../pages/images/Icon (8).png"
import logo1 from "../pages/images/Logo 1.png"
import logo2 from "../pages/images/Logo 2.png"
import logo3 from "../pages/images/Logo 3.png"
import logo4 from "../pages/images/Logo 4.png"
import logo5 from "../pages/images/Logo 5.png"
import member1 from "../pages/images/man-in-black-suit-holding-a-calling-card-3785104.png"
import member2 from "../pages/images/serious-man-3760373.png"
import member3 from "../pages/images/man-in-white-shirt-wearing-blue-bucket-hat-6626874.png"
import member4 from "../pages/images/transgender-model-touching-forehead-in-neon-light-7613875.png"

const About = () => {
  return (
    <div>
      {/* hero start */}
      <div id="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 left">
              <p>About us</p>
              <h1>Our designs solve problems</h1>
              <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className="col-lg-5 ms-auto right">
              <img src={bannerImg} alt="#group" />
            </div>
          </div>
        </div>
      </div>
      {/* hero end */}
      {/* goal start */}
      <div id="goal">
        <div className="container">
          <div className="row justify-content-lg-evenly">
            <div className="col-lg-5 left">
              <p>Who we are</p>
              <h2>Goal focussed</h2>
              <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="col-lg-5 d-flex justify-content-end align-items-start flex-column right">
              <h2>Continuous improvement</h2>
              <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="img d-flex justify-content-center">
          <img src={goalImg} alt="#image" />
        </div>
      </div>
      {/* goal end */}
      {/* process start */}
      <div id="process">
        <div className="container">
          <h2 className="text-center">The process we follow</h2>
          <div className="row">
            <div className="col-lg-3 item">
              <div className="shape"><span></span><img src={line} alt="#line" /></div>
              <h3>Planning</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
            <div className="col-lg-3 item">
              <div className="shape"><span></span><img src={line} alt="#line" /></div>
              <h3>Conception</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
            <div className="col-lg-3 item">
              <div className="shape"><span></span><img src={line} alt="#line" /></div>
              <h3>Design</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
            <div className="col-lg-3 item">
              <div className="shape"><span></span><img src={line} alt="#line" /></div>
              <h3>Development</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
          </div>
        </div>
      </div>
      {/* process end */}
      {/* mission start */}
      <div id="mission">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center left">
              <p>Our Mission </p>
              <h2>Inspire, Innovate, Share</h2>
              <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="col-lg-5 right ms-auto">
              <img src={missionImg1} alt="" />
            </div>
          </div>
          <div className="row flex-row-reverse">
            <div className="col-lg-6 d-flex flex-column justify-content-center left">
              <p>Our Vision </p>
              <h2>Laser focus</h2>
              <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="col-lg-5 right me-auto">
              <img src={missionImg2} alt="#group" />
            </div>
          </div>
        </div>
      </div>
      {/* mission end */}
      {/* benefits start */}
      <div id="benifits">
        <div className="container">
          <h2 className="text-center">The benefits of working with us</h2>
          <div className="row justify-content-between">
            <div className="col-lg-4 item">
              <img src={icon1} alt="#icon" />
              <h3>Customize with ease</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
            </div>
            <div className="col-lg-4 item">
              <img src={icon2} alt="#icon" />
              <h3>Perfectly Responsive</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
            </div>
            <div className="col-lg-4 item">
              <img src={icon3} alt="#icon" />
              <h3>Friendly Support</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
            </div>
          </div>
        </div>
      </div>
      {/* benefits end */}
      {/* companies start */}
      <div id="companies">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-2 d-flex flex-column justify-content-center">
              <h2>100.000+</h2>
              <p>Finsweet Users</p>
            </div>
            <div className="col-lg-10 d-flex align-items-center justify-content-around">
              <img src={logo1} alt="#logo" />
              <img src={logo2} alt="#logo" />
              <img src={logo3} alt="#logo" />
              <img src={logo4} alt="#logo" />
              <img src={logo5} alt="#logo" />
            </div>
          </div>
        </div>
      </div>
      {/* companies end */}
      {/* team start */}
      <div id="team">
        <div className="container">
          <h2 className="text-center">Meet our team</h2>
          <div className="row justify-content-around">
            <div className="col-lg-2 text-center">
              <div className="img">
                <img src={member1} alt="#member" />
                <div className="pop">
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-twitter"></i>
                  <i className="bi bi-linkedin"></i>
                </div>
              </div>
              <h3>John Smith</h3>
              <p>CEO</p>
            </div>
            <div className="col-lg-2 text-center">
              <div className="img">
                <img src={member2} alt="#member" />
                <div className="pop">
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-twitter"></i>
                  <i className="bi bi-linkedin"></i>
                </div>
              </div>
              <h3>Simon Adams</h3>
              <p>CTO</p>
            </div>
            <div className="col-lg-2 text-center">
              <div className="img">
                <img src={member3} alt="#member" />
                <div className="pop">
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-twitter"></i>
                  <i className="bi bi-linkedin"></i>
                </div>
              </div>
              <h3>Paul Jones</h3>
              <p>Design Lead</p>
            </div>
            <div className="col-lg-2 text-center">
              <div className="img">
                <img src={member4} alt="#member" />
                <div className="pop">
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-twitter"></i>
                  <i className="bi bi-linkedin"></i>
                </div>
              </div>
              <h3>Sara Hardin</h3>
              <p>Project Manager</p>
            </div>
          </div>
        </div>
      </div>
      {/* team end */}
    </div>
  );
};

export default About;