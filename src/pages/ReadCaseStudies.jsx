import React from 'react'

function ReadCaseStudies() {
  return (
    <>
          {/* Details Section */}
          <div id="details">
          <div className="container">
            <div className="row">
              <div className="col-lg-11 ms-auto">
                <h4>Web design and development</h4>
                <h1>Finsweet Design case studies</h1>
                <p className="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse.
                </p>
              </div>
              <div className="col-lg-10 mx-auto">
                <img src={MainImage} alt="#main" />
              </div>
            </div>
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row justify-content-between">
                  <div className="col-lg-2">
                    <p>Client</p>
                    <h5>facebook.com</h5>
                  </div>
                  <div className="col-lg-3 mx-auto">
                    <p>Service</p>
                    <h5>Product Design</h5>
                  </div>
                  <div className="col-lg-3">
                    <p>Deliverable</p>
                    <h5>UI Screens, UX Flow & Prototype</h5>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About Section */}
        <div id="about">
          <div className="container">
            <div className="row">
              <div className="col-8 mx-auto">
                <div className="about">
                  <h2>About the project</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
                    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
                    <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
                  </ul>
                </div>
                <img src={Group2508} alt="#group" />
                <div className="work">
                  <h2>How we do it</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
                    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
                    <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Keyword Section */}
        <div id="keyword">
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto">
                <ul className="d-flex justify-content-between">
                  <li>Keywords</li>
                  <li>Design</li>
                  <li>UI/UX</li>
                  <li>Wireframing</li>
                  <li>Branding</li>
                  <li>Development</li>
                  <li>webflow</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Together Section */}
        <div id="together">
          <div className="container text-center">
            <h2>Let's build something great together</h2>
            <p>
              Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.
            </p>
            <button>
              <NavLink to="/contact-us">Contact Us</NavLink>
            </button>
          </div>
        </div>
        </>
  )
}

export default ReadCaseStudies