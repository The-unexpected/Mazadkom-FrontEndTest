
import React, { Component, useContext, useEffect } from "react";
import "./css/home.css";

import Cards from "./OurCard";
import { UserContext } from "../context/context";
import { Carousel } from 'react-bootstrap';
// import './Home.css';
import first from './image/15.jpg';
import second from './image/9.jpg';
import third from './image/bid2.jpg';


import Logo from "./image/logo.png";
function Home(props) {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    const parsed = JSON.parse(localStorage.getItem("user"));
    setUser(parsed);
  }, []);

  return (
    
    <div>
   
       <Carousel interval={2000}>
          <Carousel.Item>
            <img
           
              style={{
                width: '100%',
                height: '100vh',
              //  marginTop: '120.6px',
                objectFit: 'cover',
              }}
              src={first}
              alt="https://via.placeholder.com/1920x1000"
            />
            <Carousel.Caption>
            <div >
            <img className="logo" src={Logo} alt="logo"></img>
                <h1>
                 
                </h1>
                <p className='HomeTesxt' >
                What is <span>Mazad</span>Kom? <br />
                  MazadKom enables you to enter and bidding on some of the
                  global Leonardo Da Vinci paintings online in a secure, easy to
                  use platform. 
                  </p>
              </div>
           
            </Carousel.Caption>
          </Carousel.Item>
         
        
          <Carousel.Item>
            <img
            
              style={{
                width: '100%',
                height: '100vh',
                // marginTop: '-55.6px',
                objectFit: 'cover',
              }}
              src={second}
              alt="https://via.placeholder.com/1920x1080"
            />

            <Carousel.Caption>
            <img className="logo" src={Logo} alt="logo"></img>
          
            <p className='HomeTesxt'>" Auction quotations <br/>An auctioneer is a man who proclaims with a hammer that he has picked a pocket with his tongue"</p>
              <br />
              
              <br />
           
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
        
              style={{
                width: '100%',
                height: '100vh',
                // marginTop: '-55.6px',
                objectFit: 'cover',
              }}
              src={third}
              alt="https://via.placeholder.com/1920x1080"
            />

            <Carousel.Caption>
           
              <p className='HomeTesxt'><span>Mazad</span>Kom?<br />is usually a process of buying and selling goods or services by offering them up for bid, taking bids, and then selling the item to the highest bidder or buying the item from the lowest bidder. Some exceptions to this definition exist and are described in the section about different types.</p>
            
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    
      <Cards />
    </div >
  );
}

export default Home;
