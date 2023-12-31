import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand text-primary fw-bold fs-4" to="/">
            EZi CHOICE
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active text-primary" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-primary" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-primary" to="/About">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-primary" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
                <NavLink to="/login" className="btn btn-outline-primary">
                   <i className="fa fa-sign-in me-1 ms-2"></i> Login </NavLink>
                   <NavLink to="/register" className="btn btn-outline-primary ms-2">
                   <i className="fa fa-shopping-cart me-1"></i> Register </NavLink>
                  
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
