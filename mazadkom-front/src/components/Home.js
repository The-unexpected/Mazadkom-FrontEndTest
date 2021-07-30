import React, { Component } from 'react';
import './css/home.css'
import Image from './image/bidding.png'
 class Home extends Component {
    render() {
        return (
            <div>
              <div className="home">
                  <div className="container h-100">
                      <div className="display">
                          
                          <div className="image">
                              <img src={Image}></img>
                              <div className="header-text">
                                  <h1>What is <span>Mazad</span>Kom?</h1>
                                  <p>ForexHub enables you to convert and discover hundreds of global currencies online in a secure, easy-to-use platform. </p>
                                  </div>
                                   </div>
                          
                          
                      </div>
                  </div>
              <div className="custom-shape-divider-bottom-1627664528">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
                </div>  
            </div>
        )
    }
}

export default Home
