import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../css/index.css'

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <img src="images/Logo.png" alt="#logo" />
            <p>
              We are always open to discuss your project and improve your online
              presence.
            </p>
            <div className="contact">
              <div className="d-flex align-items-center">
                <div className="mail">
                  <h3>Email me at</h3>
                  <p>contact@website.com</p>
                </div>
                <div className="call">
                  <h3>Call us</h3>
                  <p>0927 6277 28525</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 right ms-auto">
            <h2>Lets Talk!</h2>
            <p>
              We are always open to discuss your project, improve your online
              presence and help with your UX/UI design challenges.
            </p>
            <div className="icon">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-linkedin"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <p><NavLink to="/privacy-policy">Copyright 2022, Finsweet.com</NavLink></p>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-end">
              <ul className="d-flex align-items-center">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about-us">About Us</NavLink></li>
                <li><NavLink to="/features">Features</NavLink></li>
                <li><NavLink to="/pricing">Pricing</NavLink></li>
                <li><NavLink to="/faq">FAQ</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
