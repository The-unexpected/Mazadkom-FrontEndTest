import React, { Component, useContext, useEffect } from "react";
import "./css/home.css";

import Cards from "./OurCard";
import { UserContext } from "../context/context";
import { Carousel } from "react-bootstrap";
// import './Home.css';
import first from "./image/15.jpg";
import second from "./image/9.jpg";
import third from "./image/bid2.jpg";

import Logo from "./image/logo.png";
function Home(props) {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    const parsed = JSON.parse(localStorage.getItem("user"));
    setUser(parsed);
  }, []);

  return (
    <div>
      <div>
        <br />
        <br />
        <br />
        <br />

        <br />
        <Carousel interval={5000} className="carousel-slide">
          <Carousel.Item>
            <img
              style={{
                width: "100%",
                height: "80vh",
                //  marginTop: '120.6px',
                objectFit: "cover",
              }}
              src={first}
              alt="https://via.placeholder.com/1920x1000"
            />
            <Carousel.Caption>
              <div className="div-1">
                <div className="HomeText">
                  <p className="text-div1">
                    Welcome to <span>Mazad</span>Kom 👋 <br />
                    Get the best price for your product.{" "}
                  </p>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{
                width: "100%",
                height: "80vh",
                // marginTop: '-55.6px',
                objectFit: "cover",
              }}
              src={second}
              alt="https://via.placeholder.com/1920x1080"
            />

            {/* <Carousel.Caption>
              <div className="div-1">
                <div className="HomeText">
                  <p className="text-div1">
                    Auction quotations <br />
                    An auctioneer is a person who proclaims with a hammer that
                    he has picked a pocket with his tongue.
                  </p>
                </div>
              </div>
              <br />
              <br />
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{
                width: "100%",
                height: "80vh",
                // marginTop: '-55.6px',
                objectFit: "cover",
              }}
              src={third}
              alt="https://via.placeholder.com/1920x1080"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <Cards />
    </div>
  );
}

export default Home;
