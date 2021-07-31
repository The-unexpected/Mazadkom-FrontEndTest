import React, { Component } from 'react';
import { Card, Row, Col,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Monaliza from "./image/monaliza.jpg";
import Maddona from "./image/Madonna_of_the_Carnation.jpg";
import Portraite from "./image/Portrait_of_a_Musician.jpg"
import "./css/OurCard.css"

export class OurCard extends Component {

// constructor(props){
//   this.state={

//   }
// }

//   joinRoom=()=>{
//       this.setState({

//       })
//     }
//   }



  render() {
    return (
      <div className="container mb-5 mt-5 pt-5 pb-5">
     <Row xs={1} md={3} className="g-4">
    <Col>
      <Card className="image-card">
        <Card.Img variant="top" src={Monaliza}/>
        <Card.Body>
          <Card.Title >Mona Liza</Card.Title>
          <Card.Text>
          The Mona Lisa is an oil painting by Italian artist, inventor, and writer Leonardo da Vinci. Likely completed in 1506, the piece features a portrait of a seated woman set against an imaginary landscape. In addition to being one of the most famous works of art, it is also the most valuable.
          </Card.Text>
        </Card.Body>
          <Button className="button"  variant="outline-secondary" onClick={this.joinRoom}>Join Room</Button>{' '}
      </Card>
    </Col>
    <Col>
      <Card className="image-card">
        <Card.Img variant="top" src={Maddona} />
        <Card.Body>
          <Card.Title>Madonna of the Carnation</Card.Title>
          <Card.Text>
          This painting from the late 13th century by Italian painter Duccio di Buoninsega, in contrast, expresses the emotions of love and tenderness between mother and child. The infant Jesus returns the Madonna's placid but intense gaze
          </Card.Text>
        </Card.Body>
          <Button className="button" variant="outline-secondary" onClick={this.joinRoom}>Join Room</Button>{' '}
      </Card>
    </Col>
    <Col>
      <Card className="image-card">
        <Card.Img variant="top" src={Portraite} />
        <Card.Body>
          <Card.Title>Portrait of a Musician</Card.Title>
          <Card.Text>
          The Portrait of a Musician is an unfinished painting widely attributed to the Italian Renaissance artist Leonardo da Vinci, dated to circa 1483–1487. Produced while Leonardo was in Milan, the work is painted in oils, and perhaps tempera, on a small panel of walnut wood. 
          </Card.Text>
        </Card.Body>
        <Button className="button" variant="outline-secondary" onClick={this.joinRoom}>Join Room</Button>{' '}

      </Card>
    </Col>
  
</Row>
      </div>
    );
  }
}

export default OurCard;
