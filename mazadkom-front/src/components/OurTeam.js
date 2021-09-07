import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";
// import { Card, Jumbotron, Container } from 'react-bootstrap';
import Alaa from "./image/Alaa.jpg";
import Mohammad from "./image/mohammad.png";
import Ayah from "./image/Ayah.jpg";
import Sara from "./image/sara.jpg";
import Dana from "./image/dana.jpg";
import "./css/OurTeam.css";
import { SocialIcon } from "react-social-icons";
import { Row, Col } from "react-bootstrap";
import { UserContext } from "../context/context";

function OurTeam(props) {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="img-cards">
      <br/>
          <br/>

          <br/>
          <br/>
          <br/>
          <h2>Meet Our Team</h2>
          <br/>
          <br/>

        

      <div id="img-cards1">
       
        <Card className="img-card" style={{ width: "18rem" }}>
          <Row>
            <Card.Img
              variant="top"
              src={Alaa}
              alt="mohammadImg"
              className="card-img"
            />
          </Row>

        
            <Card.Body>
              <Card.Title className="name">
              Alaa <br></br> Abu Isaa
              </Card.Title>

              <Card.Text>
               
                <h6>A Civil engineer who has a passion for programming</h6>
          
                <div className="social-con">
                  
                  <SocialIcon
                    className="social-icon"
                    style={{ height: 40, width: 40 }}
                    url="https://www.linkedin.com/in/alaa-abu-issa-53a211172/"
                  />
              
                  <SocialIcon
                    className="social-icon"
                    style={{ height: 40, width: 40 }}
                    url="https://www.facebook.com/alaaabuissa"
                  />
               
                  <SocialIcon
                    className="social-icon"
                    style={{ height: 40, width: 40 }}
                    network="github"
                    url="https://github.com/Alaa-AbuIssa"
                  />
              
              </div>
                
              </Card.Text>
            </Card.Body>
         
        </Card>

        <Card className="img-card" style={{ width: "18rem" }}>
          <Row>
            <Card.Img
              variant="top"
              src={Mohammad}
              alt="mohammadImg"
              className="card-img"
            />
          </Row>

        
            <Card.Body>
              <Card.Title className="name">
                Mohammad <br></br> Tamimi
              </Card.Title>

              <Card.Text>
               
                  <h6>I am a mechanical engineer and my goal is to kick-start a career path in software development</h6>
               

                  <div className="social-con">
                
               
                      <SocialIcon
                        className="social-icon"
                        style={{ height: 40, width: 40 }}
                        url="https://www.linkedin.com/in/mohammadaltamimi98/"
                      />
                    
                      <SocialIcon
                        className="social-icon"
                        style={{ height: 40, width: 40 }}
                        url="https://www.facebook.com/m98altamimi?_rdc=1&_rdr"
                      />
                   
                      <SocialIcon
                        className="social-icon"
                        style={{ height: 40, width: 40 }}
                        network="github"
                        url="https://github.com/MohammadAltamimi98"
                      />
                  
                  </div>
      
              </Card.Text>
            </Card.Body>
        
        </Card>

        <Card className="img-card" style={{ width: "18rem" }}>
          <Row>
            <Card.Img
              variant="top"
              src={Ayah}
              alt="AyahImg"
              className="card-img"
            />
          </Row>

         
            <Card.Body>
              <Card.Title className="name">
                Ayah <br></br> Zaareer
              </Card.Title>

              <Card.Text>
              
                  <h6>I'm Communication Engineer and full stack developer , a graduate from Yarmouk University</h6>
             

            
                  <div className="social-con">
                  <br/>
                
                  <br/>
                      <SocialIcon
                        className="social-icon"
                        style={{ height: 40, width: 40 }}
                        url="https://www.linkedin.com/in/ayah-zaareer/ "
                      />
                    
                      <SocialIcon
                        className="social-icon"
                        style={{ height: 40, width: 40 }}
                        url="https://www.facebook.com/ayah.zaareer"
                      />
                  
                      <SocialIcon
                        className="social-icon"
                        style={{ height: 40, width: 40 }}
                        network="github"
                        url="https://github.com/AyahZaareer"
                      />
                 
                  </div>
               
              </Card.Text>
            </Card.Body>
       
        </Card>
        <Card className="img-card" style={{ width: "18rem" }}>
          <Row>
            <Card.Img
              variant="top"
              src={Dana}
              alt="MotasimImg"
              className="card-img"
            />
          </Row>

  
            <Card.Body>
              <Card.Title className="name">
                Dana <br></br> Younis
              </Card.Title>

              <Card.Text>
              
                  <h6>I'm a full stack developer with background in  civil engineer </h6>
              
                  <div className="social-con">
                  <br/>
                  <br/>
               
                      <SocialIcon
                        className="social-icon"
                        style={{ height: 40, width: 40 }}
                        url="https://www.linkedin.com/in/dana-younis/"
                      />
                   
                      <SocialIcon
                        className="social-icon"
                        style={{ height: 40, width: 40 }}
                        url="https://www.facebook.com/dana.abdallah.9693/"
                      />
                  
                      <SocialIcon
                        className="social-icon"
                        style={{ height: 40, width: 40 }}
                        network="github"
                        url="https://github.com/dana-younis"
                      />
                 
                  </div>
                
              </Card.Text>
            </Card.Body>
       
        </Card>
        <Card className="img-card" style={{ width: "18rem" }}>
          <Row>
            <Card.Img
              variant="top"
              src={Sara}
              alt="SaraImg"
              className="card-img"
            />
          </Row>

         
            <Card.Body>
              <Card.Title className="name">
                Sara <br></br> Al-Taweel
              </Card.Title>

              <Card.Text>
              
                  <h6>Computer Information Systems</h6>
               

              
                  <div className="social-con">
                  <br/>
                  <br/>
                
                    {/* <Col style={{ border: "none" }}> */}
                      <SocialIcon
                        className="social-icon"
                        style={{ height: 40, width: 40 }}
                        url="https://www.linkedin.com/in/alaa-abu-issa-53a211172/"
                      />
                    {/* </Col> */}
                    {/* <Col style={{ border: "none" }}> */}
                      <SocialIcon
                        className="social-icon"
                        style={{ height: 40, width: 40 }}
                        url="https://www.facebook.com/sara.altaweelbataineh.7"
                      />
                    {/* </Col>
                    <Col style={{ border: "none" }}> */}
                      <SocialIcon
                        className="social-icon"
                        style={{ height: 40, width: 40 }}
                        network="github"
                        url="https://github.com/Saraaltaweel"
                      />
                    {/* </Col> */}
                  </div>
              
              </Card.Text>
            </Card.Body>
         
        </Card>

      </div>

    </div>
  );
}

export default OurTeam;
