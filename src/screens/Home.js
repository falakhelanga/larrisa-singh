import React from "react";
import "./home.css";
import { Container, Button } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div className="home_wrapper">
        <Container className="home_container">
          <p className="text-capitalize text-white text-center">
            Artoneys,commissioner of oath and adminstrator Of estate
          </p>
          <h1 className="text-center text-white">Justice Is Served</h1>

          <div className="desc_div">
            <p className="desc_p mt-5">
              Law Offices Of Larrisa Singh is A female owned Law Firm servicing
              the community with effective legal services at affordable prices.
            </p>
          </div>

          <div className="cont_div ">
            <div className="mt-5 home_cont text-white">
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

            <div className="home_cont text-white">
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

          <div className="home_btn">
            <Button
              className="mt-5 text-uppercase btn-block bt"
              type="button"
              style={{
                backgroundColor: "black",
                fontWeight: "bold",
              }}
            >
              Free Consultation
            </Button>
          </div>
        </Container>
      </div>

      <div></div>
    </>
  );
};

export default Home;
