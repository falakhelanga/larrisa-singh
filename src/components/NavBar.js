import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";

const NavBar = ({ handleClose }) => {
  return (
    <div className="navbar_wrapper">
      <Container fluid className="navbar_container ">
        <div className="logo_div">
          <h1 className="text-capitalize">Law Offices of larissa singh</h1>
        </div>
        <div className="navigation">
          <div className="logo_div2 py-3">
            <h1 className="text-capitalize">Law Offices of larissa singh</h1>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/home" className="link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="link">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/lawyers" className="link">
                  Lawyers
                </NavLink>
              </li>
              <li>
                <NavLink to="/practice" className="link">
                  Practice Areas
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="link">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/reviews" className="link">
                  Reviews
                </NavLink>
              </li>
              <li
                className="link"
                style={{
                  cursor: "pointer",
                }}
              >
                <i class="fas fa-phone-square  mr-2  "></i>
                <span
                  style={{
                    fontWeight: "normal !important",
                    fontSize: "0.5rem !important",
                  }}
                >
                  084 223 2279
                </span>
              </li>
              <li
                className="link"
                style={{
                  cursor: "pointer",
                }}
              >
                <i class="fa fa-envelope mr-2" aria-hidden="true"></i>
                <span
                  style={{
                    fontWeight: "normal !important",
                    fontSize: "0.5rem !important",
                  }}
                >
                  larissaandreasingh@yahoo.com
                </span>
              </li>
            </ul>
          </nav>
        </div>
        <div className="menu_icon">
          <i
            class="fas fa-bars    "
            onClick={() => {
              handleClose(false);
            }}
          ></i>
        </div>
      </Container>
      <hr />
    </div>
  );
};

export default NavBar;
