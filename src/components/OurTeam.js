import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Jumbotron, Container } from 'react-bootstrap';
 import Alaa from "./image/Alaa.jpg";
 import Mohammad from "./image/mohammad.png";
 import Ayah from "./image/Ayah.jpg";
 import Sara from "./image/sara.jpg";
 import Dana from "./image/dana.jpg";
import './css/OurTeam.css';
import { SocialIcon } from 'react-social-icons';
import { Row, Col } from 'react-bootstrap';


class AboutUs extends React.Component {
  render() {
    return (
      <div className='img-cards'>
        <div className='jumb'>
          <div fluid id="team-intro">
            <Container style={{marginTop:'10rem'}}>
              <h1 style={{textAlign:'center',marginTop:'3rem',color:'rgb(211, 51, 51)',fontFamily: ' serif',fontWeight:'bold'}}>Meet Our Team</h1>
              <p id='para'>
                We are a sincere company with a straightforward vision . we believe that there is an amazing amount to be learned by working in the web production environment .<br></br>
              </p>
            </Container>
          </div>
        </div>

        <div id='img-cards1' style={{marginLeft:'18rem'}}>
          <Card className='img-card' style={{ width: '18rem',height:'40rem' }}>
            <Row   >

              
              <Card.Img variant="top" src={Alaa} alt="AlaaImg" className="card-img" />

            </Row>

            <Row className='nameR'>

              <Card.Body >


                <Card.Title className='name'>Alaa <br></br> Abu Isaa</Card.Title>

                <Card.Text>
                  <Row>

                    <h6>Civil Engineer</h6>
                  </Row>
                  <Row>

                    <div className='social-con'>
                      <Col id="alaa"style={{ border: 'none',height:'5rem' }}>
                        <SocialIcon className='social-icon' style={{ height: 40, width: 40 }} url="https://www.linkedin.com/in/alaa-abu-issa-53a211172/" />
                      </Col>
                      <Col style={{ border: 'none' ,height:'5rem'}}>
                        <SocialIcon className='social-icon' style={{ height: 40, width: 40 }} url="https://www.facebook.com/alaaabuissa" />
                      </Col>
                      <Col style={{ border: 'none' ,height:'5rem'}}>
                        <SocialIcon className='social-icon' style={{ height: 40, width: 40 }} network="github" url="https://github.com/Haneenabonser" />
                      </Col>
                    </div>
                  </Row>
                </Card.Text>

              </Card.Body>
            </Row>
          </Card>

          <Card className='img-card' style={{ width: '18rem',height:'40rem' }}>
            <Row   >

              <Card.Img variant="top" src={Mohammad} alt="mohammadImg" className="card-img" />

            </Row>

            <Row className='nameR'>

              <Card.Body>


                <Card.Title className='name'>Mohammad  <br></br> Tamimi</Card.Title>

                <Card.Text>
                  <Row>

                    <h6>Mechanical Engineer</h6>
                  </Row>

                  <Row>
                    <div className='social-con'>
                      <Col style={{ border: 'none',height:'5rem' }}>
                        <SocialIcon className='social-icon' style={{ height: 40, width: 40 }} url="https://www.linkedin.com/in/mohammadaltamimi98/" />
                      </Col>
                      <Col style={{ border: 'none',height:'5rem' }}>
                        <SocialIcon className='social-icon' style={{ height: 40, width: 40 }} url="https://www.facebook.com/m98altamimi?_rdc=1&_rdr"/>
                      </Col>
                      <Col style={{ border: 'none',height:'5rem' }}>
                        <SocialIcon className='social-icon' style={{ height: 40, width: 40 }} network="github" url="https://github.com/Alaa-AbuIssa" />
                      </Col>
                    </div>

                  </Row>
                </Card.Text>

              </Card.Body>
            </Row>
          </Card>

          <Card className='img-card' style={{ width: '18rem',height:'40rem' }}>
            <Row   >

              <Card.Img variant="top" src={Ayah} alt="AyahImg" className="card-img" />

            </Row>

            <Row className='nameR'>

              <Card.Body>


                <Card.Title className='name'>Ayah <br></br> Zaareer</Card.Title>

                <Card.Text>
                  <Row>

                    <h6> Communication Engineer</h6>
                  </Row>

                  <Row>
                    <div className='social-con'>
                      <Col style={{ border: 'none',height:'5rem' }}>
                        <SocialIcon className='social-icon' style={{ height: 40, width: 40 }} url="https://www.linkedin.com/in/maryam-najjar-112a98161 " />
                      </Col>
                      <Col style={{ border: 'none' ,height:'5rem'}}>
                        <SocialIcon className='social-icon' style={{ height: 40, width: 40 }} url="https://www.facebook.com/mariam.alnajjar.142" />
                      </Col>
                      <Col style={{ border: 'none',height:'5rem' }}>
                        <SocialIcon className='social-icon' style={{ height: 40, width: 40 }} network="github" url="https://github.com/Maryam-n98" />
                      </Col>
                    </div>
                  </Row>
                </Card.Text>

              </Card.Body>
            </Row>
          </Card>

        </div>

        <div id='img-cards2' style={{marginBottom:'3rem',marginLeft:'28rem'}}>
          <Card className='img-card' style={{ width: '18rem',height:'40rem' }}>
            <Row   >

              <Card.Img variant="top" src={Sara} alt="SaraImg" className="card-img" />

            </Row>

            <Row className='nameR'>

              <Card.Body>


                <Card.Title className='name'>Sara <br></br> Al-Taweel</Card.Title>

                <Card.Text>
                  <Row>

                    <h6>Computer Information Systems</h6>
                  </Row>

                  <Row>
                    <div className='social-con'>
                      <Col style={{ border: 'none',height:'5rem' }}>
                        <SocialIcon className='social-icon' style={{ height: 40, width: 40 }} url="https://www.linkedin.com/in/alaa-abu-issa-53a211172/" />
                      </Col>
                      <Col style={{ border: 'none',height:'5rem' }}>
                        <SocialIcon className='social-icon' style={{ height: 40, width: 40 }} url="https://www.facebook.com/alaaabuissa" />
                      </Col>
                      <Col style={{ border: 'none' ,height:'5rem'}}>
                        <SocialIcon className='social-icon' style={{ height: 40, width: 40 }} network="github" url="https://github.com/mmohiesen96" />
                      </Col>

                    </div>
                  </Row>
                </Card.Text>

              </Card.Body>
            </Row>
          </Card>

          <Card className='img-card' style={{ width: '18rem' ,height:'40rem'}}>
            <Row   >

              <Card.Img variant="top" src={Dana} alt="MotasimImg" className="card-img" />

            </Row>

            <Row className='nameR'>

              <Card.Body>


                <Card.Title className='name'>Dana <br></br> Younis</Card.Title>

                <Card.Text>
                  <Row>

                    <h6>Civil Engineer</h6>
                  </Row>

                  <Row>
                    <div className='social-con'>

                      <Col style={{ border: 'none' ,height:'5rem'}}>
                        <SocialIcon className='social-icon' style={{ height: 40, width: 40 }} url="https://www.linkedin.com/in/mo-tasim-al-azzam-3543b51a2/" />
                      </Col>
                      <Col style={{ border: 'none',height:'5rem' }}>
                        <SocialIcon className='social-icon' style={{ height: 40, width: 40 }} url="https://web.facebook.com/profile.php?id=100003494264820" />
                      </Col>
                      <Col style={{ border: 'none' ,height:'5rem'}}>
                        <SocialIcon className='social-icon' style={{ height: 40, width: 40 }} network="github" url="https://github.com/motasimalazzam" />
                      </Col>

                    </div>
                  </Row>
                </Card.Text>

              </Card.Body>
            </Row>
          </Card>
        </div>
      </div>



    )
  }
}

export default AboutUs
