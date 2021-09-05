import React, { Component } from 'react';



import { Carousel } from 'react-bootstrap';



export class Home extends Component {

    render() {
     
        return (
            <div>

                <Carousel interval={800}>
            
                    <Carousel.Item>

                        <img
                            className="d-block w-100"
                            style={{
                                width: '100%',
                                height: '100vh',

                                objectFit: 'cover',
                            }}
                            src="https://www.artmajeur.com/medias/hd/l/e/leliademello/artwork/9413260_beautifulsky.jpg"
                            alt="https://via.placeholder.com/1920x1080"
                        />
                        <Carousel.Caption>
                        <h1>Fantasy</h1>
              <h3>You can look at a picture for a week and never think of it again. You can also look at the picture for a second and think of it all your life. Joan Miro</h3>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{
                                width: '100%',
                                height: '100vh',
                                // marginTop: '-55.6px',
                                objectFit: 'cover',
                            }}
                            src='https://www.zastavki.com/pictures/originals/2013/Emo__039176_.jpg'
                            alt="https://via.placeholder.com/1920x1080"
                        />

                        <Carousel.Caption>
                        <h1>Architecture</h1>
              <h3>Every act of creation is first an act of destruction</h3>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{
                                width: '100%',
                                height: '100vh',
                                // marginTop: '-55.6px',
                                objectFit: 'cover',
                            }}
                            src="https://th.bing.com/th/id/OIP.V_iHAY56CgqcW3OyZSBdFgHaDw?pid=ImgDet&rs=1"
                            alt="https://via.placeholder.com/1920x1080"
                        />

                        <Carousel.Caption>
                        <h1>Botany</h1>
              <h3>The power of nature is such that it’s what all art strives to be. The more we can get in tune with the harmony of the planet, the more our art can benefit from that relationship</h3>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
                        

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>


            </div>
        );
    }
}

export default (Home);
