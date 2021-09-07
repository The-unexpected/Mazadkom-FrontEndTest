import React, { Component, useContext, useEffect } from "react";
import "./css/home.css";

import Cards from "./OurCard";
import { UserContext } from "../context/context";
import { Carousel } from "react-bootstrap";
// import './Home.css';
import second from "./image/aa.jpg";
import first from "./image/rr.jpg";
import third from "./image/ww.jpg";
import homeF from "./image/333.jpg";
import our from "./image/our2.jpg";
import win from "./image/win.jpg";
import win2 from "./image/win2.jpg";
import win3 from "./image/win3.jpg";
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

      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <Cards /> */}

    
      <img
        style={{
          width: "30rem",
          height: "57vh",

          marginLeft: "4.5rem"
        }}
        src={our}

      /><h3 className="homeH3">Why people like shopping from  online auction sites?</h3>

      <p className="homeP3">There are so many reasons as to why people find online auction sites with amazing deals of the day  to be very beneficial. First of all, it is through online auction sites that a consumer can be able to purchase an item at a price that is so much lower than what it would originally cost in other street chains. Aside from that, these online auction sites can also be able to offer a much more exciting way of shopping. The competition in getting the specific product is one of the things that bidders love and enjoy. It can be really exhilarating for a bidder to win the product.</p> 
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    
    
    
    
      <br />
      <br />
      <img
        style={{
          width: "30rem",
          height: "57vh",

          marginLeft: "50rem",
          marginBottom:"10rem",
          
        }}
        src={homeF}
        alt="https://via.placeholder.com/1920x1080"
      />
      <h3 className="homeH32">Why do you have to use our website to bid?</h3>

<p className="homeP32">Easy to use and also allows you to chat during bidding and also our site not only allows to bid and win products at competitive prices but also allows you to offer your own product for people to bid on it within a certain period and the person who offers the highest price will win. </p> 

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
        <br />
      <br />
    
    
     
        <br />
        {/* <img
        style={{
          width: "20rem",
          height: "20vh",

        
          
        }}
        src={win}
        alt="https://via.placeholder.com/1920x1080"
      />
              <img
        style={{
          width: "20rem",
          height: "20vh",

        
          
        }}
        src={win2}
        alt="https://via.placeholder.com/1920x1080"
      />
               <img
        style={{
          width: "20rem",
          height: "20vh",

        
          
        }}
        src={win3}
        alt="https://via.placeholder.com/1920x1080"
      />
                 <img
        style={{
          width: "20rem",
          height: "20vh",

        
          
        }}
        src={win2}
        alt="https://via.placeholder.com/1920x1080"
      />
       */}




{/* 

      <img
        style={{
          width: "100%",
          height: "80vh",
          // marginTop: '-55.6px',
          objectFit: "cover",
        }}
        src={third}
        alt="https://via.placeholder.com/1920x1080"
      /> */}

    </div>
  );
}

export default Home;
