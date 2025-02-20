import React from 'react';
import { NavLink } from 'react-router-dom';
import FeatureHeroIllustration from '../pages/images/Feature Hero Illustration.svg';
import GroupOfPeopleSittingIndoors from '../pages/images/group-of-people-sitting-indoors-3184360.png';
import ManInBlueJacketLookingAtWhiteBoard from '../pages/images/man-in-blue-jacket-looking-at-white-board-7413916.png';
import LineIndicator from '../pages/images/Line Indicator.png';
import AManStandingInAnOffice from '../pages/images/a-man-standing-in-an-office-7792811.png';
import Icon13 from '../pages/images/Icon (13).png';
import Icon10 from '../pages/images/Icon (10).png';
import Icon8 from '../pages/images/Icon (8).png';
import Logo1 from '../pages/images/Logo 1.png';
import Logo2 from '../pages/images/Logo 2.png';
import Logo3 from '../pages/images/Logo 3.png';
import Logo4 from '../pages/images/Logo 4.png';
import Logo5 from '../pages/images/Logo 5.png';
import ManExplainingProblemsToFacelessPsychologist from '../pages/images/man-explaining-problems-to-faceless-psychologist-7176030.png';
import PhotoOfManHoldingABook from '../pages/images/photo-of-man-holding-a-book-927022.png';
import AManWorkingInACallCenter from '../pages/images/a-man-working-in-a-call-center-8867431.png';
import PersonUsingMacBookPro from '../pages/images/person-using-macbook-pro-3861964.png';
import "../css/feature.css"

const Features = () => {
  return (
    <>
      {/* Hero Section */}
      <div id="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h1>All the features you need</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button>
                <NavLink to="/pricing">View Pricing</NavLink>
              </button>
            </div>
            <div className="col-lg-6">
              <img src={FeatureHeroIllustration} alt="Feature Hero Illustration" />
            </div>
          </div>
        </div>
      </div>
      {/* Companies Section */}
      <div id="companies">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-2 d-flex flex-column justify-content-center">
              <h2>100.000+</h2>
              <p>Finsweet Users</p>
            </div>
            <div className="col-lg-10 d-flex align-items-center justify-content-around">
              <img src={Logo1} alt="Logo 1" />
              <img src={Logo2} alt="Logo 2" />
              <img src={Logo3} alt="Logo 3" />
              <img src={Logo4} alt="Logo 4" />
              <img src={Logo5} alt="Logo 5" />
            </div>
          </div>
        </div>
      </div>
      {/* Benefits Section */}
      <div id="benifits">
        <div className="container">
          <h2 className="text-center">The benefits of working with us</h2>
          <div className="row justify-content-between">
            <div className="col-lg-4 item">
              <img src={Icon13} alt="Icon 13" />
              <h3>Customize with ease</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim.
              </p>
            </div>
            <div className="col-lg-4 item">
              <img src={Icon10} alt="Icon 10" />
              <h3>Perfectly Responsive</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim.
              </p>
            </div>
            <div className="col-lg-4 item">
              <img src={Icon8} alt="Icon 8" />
              <h3>Friendly Support</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Support Section */}
      <div id="support">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center left">
              <p>Use Client-first</p>
              <h2>
                Top agencies and freelancers around the world use Client-first
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
            <div className="col-lg-5 right mx-auto">
              <img
                src={ManExplainingProblemsToFacelessPsychologist}
                alt="Man explaining problems to faceless psychologist"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="revision">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-6 d-flex flex-column justify-content-center ms-auto left">
              <p>Free Revision Rounds</p>
              <h2>Get free Revisions and one week of free maintenance</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <div className="col-lg-5 right me-auto">
              <img src={PhotoOfManHoldingABook} alt="Photo of man holding a book" />
            </div>
          </div>
        </div>
      </div>
      <div id="supp">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 me-auto left">
              <p>24/7 Support</p>
              <h2>Working with us, you will be getting 24/7 priority support</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <div className="col-lg-5 right me-auto">
              <img
                src={AManWorkingInACallCenter}
                alt="A man working in a call center"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="delivery">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-6 d-flex flex-column justify-content-center left">
              <p>Quick Delivery</p>
              <h2>Guaranteed 1 week delivery for standard five pager website</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <div className="col-lg-5 right me-auto">
              <img
                src={PersonUsingMacBookPro}
                alt="Person using MacBook Pro"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
