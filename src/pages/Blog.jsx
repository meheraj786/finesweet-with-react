import React from 'react';
import { NavLink } from 'react-router-dom';
import MainImage from '../pages/images/Main image.png';
import Group2508 from '../pages/images/Group 2508.png';
import "../css/blog.css";

const Blog = () => {
  return (
    <>
      {/* nav end */}
      {/* case study start */}
      <div id="study">
        <div className="container text-center">
          <h1>A UX Case Study on Creating a Studious Environment for Students</h1>
          <p>Andrew Jonson <b>Posted on 27th January 2021</b></p>
          <img src={MainImage} alt="#study" />
          <p className="p">Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
          <a href="./read-blog.html">Read more</a>
        </div>
      </div>
      {/* case study end */}
      <div id="blog">
        <div className="container">
          <h2 className="text-center">Our Blog</h2>
          <div className="row">
            <div className="col-lg-4">
              <img src={Group2508} alt="" />
              <div className="blog-details">
                <p>27 Jan 2021</p>
                <h2>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h2>
                <p className="p">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                <a href="./read-blog.html">Read More <span><img src={Group2508} alt="" /></span></a>
              </div>
            </div>
            <div className="col-lg-4">
              <img src={Group2508} alt="" />
              <div className="blog-details">
                <p>27 Jan 2021</p>
                <h2>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h2>
                <p className="p">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                <a href="./read-blog.html">Read More <span><img src={Group2508} alt="" /></span></a>
              </div>
            </div>
            <div className="col-lg-4">
              <img src={Group2508} alt="" />
              <div className="blog-details">
                <p>27 Jan 2021</p>
                <h2>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h2>
                <p className="p">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                <a href="./read-blog.html">Read More <span><img src={Group2508} alt="" /></span></a>
              </div>
            </div>
            <div className="col-lg-4">
              <img src={Group2508} alt="" />
              <div className="blog-details">
                <p>27 Jan 2021</p>
                <h2>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h2>
                <p className="p">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                <a href="./read-blog.html">Read More <span><img src={Group2508} alt="" /></span></a>
              </div>
            </div>
            <div className="col-lg-4">
              <img src={Group2508} alt="" />
              <div className="blog-details">
                <p>27 Jan 2021</p>
                <h2>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h2>
                <p className="p">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                <a href="./read-blog.html">Read More <span><img src={Group2508} alt="" /></span></a>
              </div>
            </div>
            {/* Repeat the above block for other blog entries, changing the image source and content as needed */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;