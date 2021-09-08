import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import "./css/Footer.css";

function Footer() {
  return (
    <div>
      <div className="space"></div>
      <div className="w3hubs-footer">
        <div className="w3hubs-icon">
          <ul>
            <li>
              <SocialIcon network="facebook" url="" className="soc-icon" />
            </li>
            <li>
              <SocialIcon network="instagram" url="" className="soc-icon" />
            </li>
            <li>
              <SocialIcon network="twitter" url="" className="soc-icon" />
            </li>
            <li>
              <SocialIcon network="google" url="" className="soc-icon" />
            </li>
          </ul>
        </div>
        <div className="w3hubs-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">OurTeam</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
          <p>&copy;Un-Expected Team 2021</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
