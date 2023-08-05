import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5 ">
        <div className="row">
          <div className="col-md-6">
          <h1 className="fw-bold mb-4" >About us</h1>
            <p className="lead">
              Welcome to EZi CHOICE, your one-stop destination for premium
              products and unparalleled shopping experiences. Since our
              inception, we have been driven by a passion for delivering
              top-notch items and exceptional service to our valued customers.
              Our carefully curated collection spans a myriad of categories,
              ensuring that you find exactly what you need, all in one place.
              With a strong commitment to customer satisfaction, seamless
              navigation, and secure transactions, we are dedicated to making
              your shopping journey with us smooth and enjoyable. Join our
              growing community of savvy shoppers and experience the convenience
              of online retail at its finest.
            </p>
            <NavLink to="/Contact" className="btn btn-outline-primary px-3">
              Contact us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src="/assets/about.jpg" alt="About us" height="400px" width="400px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
