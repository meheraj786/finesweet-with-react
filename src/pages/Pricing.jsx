import React from 'react';
import { NavLink } from 'react-router-dom';
import "../css/pricing.css"

const Pricing = () => {
  return (
    <>
      {/* Plans Section */}
      <div id="plans">
        <div className="container">
          <div className="details mx-auto text-center">
            <h1>Our Pricing Plans</h1>
            <p>
              When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.
            </p>
          </div>
          <div className="row justify-content-between">
            <div className="col-lg-4">
              <div className="price d-flex align-items-center">
                <h2>$299</h2>
                <p>Per Design</p>
              </div>
              <h3>Landing Page</h3>
              <p className="p">When you’re ready to go beyond prototyping in Figma,</p>
              <ul>
                <li>All limited links</li>
                <li>Own analytics platform</li>
                <li>Chat support</li>
                <li className="disable">Optimize hashtags</li>
                <li className="disable">Unlimited users</li>
              </ul>
              <button>Get Started</button>
            </div>
            <div className="col-lg-4">
              <div className="price d-flex align-items-center">
                <h2>$499 +</h2>
                <p>Per Design</p>
              </div>
              <h3>Complex Project</h3>
              <p className="p">When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.</p>
              <ul>
                <li>All limited links</li>
                <li>Own analytics platform</li>
                <li>Chat support</li>
                <li>Optimize hashtags</li>
                <li>Unlimited users</li>
              </ul>
              <button>Get Started</button>
            </div>
            <div className="col-lg-4">
              <div className="price d-flex align-items-center">
                <h2>$299</h2>
                <p>Per Design</p>
              </div>
              <h3>Landing Page</h3>
              <p className="p">When you’re ready to go beyond prototyping in Figma,</p>
              <ul>
                <li>All limited links</li>
                <li>Own analytics platform</li>
                <li>Chat support</li>
                <li>Optimize hashtags</li>
                <li>Unlimited users</li>
                <li>Assist and Help</li>
              </ul>
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 left">
              <h2>Frequently asked questions</h2>
              <NavLink to="/contact-us">Contact us for more info</NavLink>
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
