import React from 'react';
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';
import './css/Footer.css'



class Footer extends React.Component {
  render() {
    return (
      <>

        <div className='space'></div>
        <div class="w3hubs-footer">

          <div class="w3hubs-icon">
            <ul>
              <li><SocialIcon network="facebook" url="https://github.com/Haneenabonser" className = 'soc-icon'/></li>
              <li><SocialIcon network="instagram" url="https://github.com/Haneenabonser" className = 'soc-icon'/>
              </li>
              <li>
              <SocialIcon network="twitter" url="https://github.com/Haneenabonser" className = 'soc-icon'/>
              </li>
              <li>
              <SocialIcon network="google" url="https://github.com/Haneenabonser" className = 'soc-icon'/>
              </li>
            </ul>
          </div>
          <div class="w3hubs-nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              {/* <li>
              <Link to="/about">Profile</Link>
              </li>
              <li>
              <Link to="/contact">Converter</Link>
              </li>
              <li>
              <Link to="/contact">Contact Us</Link>
              </li>
              <li>
              <Link to="/contact">About Us</Link>
              </li> */}



            </ul>

            <div className='ftr-logo'>
            <h3>Mazad<span>Kom</span></h3>
          </div>
            <h4>
            En-crypto <i class="fa fa-copyright" aria-hidden="true"></i> 2021
          </h4>
          </div>

          <div class="w3hubs-nav2">
            <ul>

              <li><a href="#top" title="To Top"><i class="fa fa-chevron-down"></i></a></li>


            </ul>
          </div>
        </div>

        {/* <FontAwesomeIcon icon={["fal", "coffee"]} />
        <footer className="footer-distributed">

          <div className='ftr-flex'>
            <div className="footer-left">

            </div>

            <div className="footer-center">

              <div>
                <i className="fa fa-map-marker"></i>
                <p>Mecca street Amman, Jordan</p>
              </div>

              <div>
                <i className="fa fa-phone"></i>
                <p>+962 650 50000</p>
              </div>

              <div>
                <i className="fa fa-envelope"></i>
                <p><a href="mailto:forex-hub@gmail.com">forex-hub@gmail.com</a></p>
              </div>

            </div>

            <div className="footer-right">

              <p className="footer-company-about">
                <span>About the App : </span>
                  We aspire to give you various sevices about currencies , and what relates to it .
                </p>

              <div className="footer-icons">

                

              </div>

            </div>

          </div>
          <hr></hr>
          <p className="footer-company-name">ForexHub © 2021</p>
        </footer> */}
      </>
    )
  }
}

export default Footer;
