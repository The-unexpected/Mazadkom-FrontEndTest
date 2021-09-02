import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button ,CardGroup} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Monaliza from "./image/monaliza.jpg";
import Maddona from "./image/Madonna_of_the_Carnation.jpg";
import Portraite from "./image/Portrait_of_a_Musician.jpg";
import axios from "axios";
import "./css/OurCard.css";

function OurCard(props) {
  const [data, setData] = useState([]);
  useEffect((props) => {
    try {
      axios.get(`https://mazadkom.herokuapp.com/apiElement`).then((res) => {
        let response = JSON.parse(JSON.stringify(res.data.productElementInfo));
        setData(response);
        console.log(response);
      });
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  return (
    <div className="container mb-5 mt-5 pt-5 pb-5">
      <CardGroup className="container mb-5 mt-5 pt-5 pb-5">
      <Card className="image-card">
      <Row xs={1} md={3} className="g-4">
        {data.map((element) => {
        return (
          // <Row xs={1} md={2} className="g-4">
            <Col>
              {/* <Card className="image-card"> */}
                <Card.Img variant="top" className="pic" src={element.picture} />
                <Card.Body>
                  <Card.Title>{element.title}</Card.Title>
                  <Card.Text>
                    <p>{element.description} </p> <br />
                    <p>{element.startingPrice}</p>
                  </Card.Text>
                </Card.Body>
                <Button
                  className="button"
                  variant="outline-secondary"
                  onClick={props.joinRoom}
                  href="/room"
                >
                  Join Room
                </Button>{" "}
              {/* </Card> */}
            </Col>
          // </Row>
       
        );
       
      })}
      </Row>
       </Card>
      </CardGroup>

      {/* <Col>
          <Card className="image-card">
            <Card.Img variant="top" src={Maddona} />
            <Card.Body>
              <Card.Title>Madonna of the Carnation</Card.Title>
              <Card.Text>
                This painting from the late 13th century by Italian painter
                Duccio di Buoninsega, in contrast, expresses the emotions of
                love and tenderness between mother and child. The infant Jesus
                returns the Madonna's placid but intense gaze
              </Card.Text>
            </Card.Body>
            <Button
              className="button"
              variant="outline-secondary"
              onClick={props.joinRoom}
            >
              Join Room
            </Button>{" "}
          </Card>
        </Col>
        <Col>
          <Card className="image-card">
            <Card.Img variant="top" src={Portraite} alt="portrait" />
            <Card.Body>
              <Card.Title>Portrait of a Musician</Card.Title>
              <Card.Text>
                The Portrait of a Musician is an unfinished painting widely
                attributed to the Italian Renaissance artist Leonardo da Vinci,
                dated to circa 1483–1487. Produced while Leonardo was in Milan,
                the work is painted in oils, and perhaps tempera, on a small
                panel of walnut wood.
              </Card.Text>
            </Card.Body>
            <Button
              className="button"
              variant="outline-secondary"
              onClick={props.joinRoom}
            >
              Join Room
            </Button>{" "}
          </Card> */}
      {/* </Col> */}
      {/* </Row> */}
    </div>
  );
}

export default OurCard;
