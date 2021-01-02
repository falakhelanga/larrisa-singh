import React from "react";
import "./footer.css";
import { Container, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer_wrapper py-5 ">
      <Container className="footer_container">
        <div className="contact_div">
          <h3 className="text-white">Contact</h3>
          <div
            className=" home_contl"
            style={{
              color: "white",
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
          </div>

          <div
            style={{
              color: "white",
            }}
            className="home_contl"
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
          </div>
        </div>
        <div className="practice_area">
          <h3 className="text-white">Practice Areas </h3>

          <p className="text-white text-capitalize mt-3">
            Adminstration of deceased estates
          </p>
          <p className="text-white text-capitalize mt-3">Conveyancing</p>
          <p className="text-white text-capitalize">Family Law</p>
          <p className="text-white text-capitalize">Civil Litigation</p>
        </div>
        <div className="form_div  mt-3">
          <form className="w-100">
            <input
              type="text"
              placeholder="name"
              className="pl-2"
              style={{
                backgroundColor: "transparent",
                border: "1px solid rgb(0,123,255)",
                width: "100%",
              }}
            />
            <input
              type="text"
              placeholder="email"
              className="pl-2 mt-2"
              style={{
                backgroundColor: "transparent",
                border: "1px solid rgb(0,123,255)",
                width: "100%",
              }}
            />
            <textarea
              rows="4"
              placeholder="Please write your message"
              className="pl-2 mt-2"
              style={{
                backgroundColor: "transparent",
                border: "1px solid rgb(0,123,255)",
                width: "100%",
              }}
            />
            <div className="footer_btn">
              <Button
                className="mt-1 text-uppercase btn-block bt"
                type="button"
                style={{
                  backgroundColor: "black",
                  fontWeight: "bold",
                }}
              >
                submit
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
