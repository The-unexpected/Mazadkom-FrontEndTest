import React, { useEffect, useState, useContext } from "react";
import { Card, Row, Col, Button, CardGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./css/OurCard.css";
import { UserContext } from "../context/context";
import { useHistory } from "react-router-dom";

function OurCard(props) {
  const { user, setUser, value, setValue } = useContext(UserContext);
  let history = useHistory();
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");

  useEffect((props) => {
    try {
      const name = localStorage.getItem("username");
      setUsername(name);
      axios.get(`http://localhost:5000/apiElement`).then((res) => {
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

    


        {/* <Card className="image-card"> */}
        <Row xs={1} md={3} className="g-4">
          {data.map((element,idx) => {
             

            return (
              <div className="cards">
                 <Card className="NewStyleCard">
                {/* // <Row xs={1} md={2} className="g-4"> */}
                <Col>
                  {/* <Card className="image-card"> */}
                  <Card.Img
                    variant="top"
                    className="pic"
                    src={element.picture}
                  />
                  <Card.Body >
                    <Card.Title className='titleStyle'>{element.title}</Card.Title>
                    <Card.Text>                     
                      <p>{element.description} </p> <br />
                      <p><span style={{color:'rgb(211, 51, 51)'}}>Price:</span> {element.startingPrice}</p>
                    </Card.Text>
                  </Card.Body>
                  <Button
                    className="buttonJoin"
                    variant="outline-secondary"
                    onClick={() => {

                      setValue(element._id);
                      console.log(value);
                      localStorage.setItem("header", idx);
                      history.push(`/room?name=${username}&room=${idx}`);

                    }}

                    // href={`/room?name=${username}&room=${idx}`}
                  >
                    Join Room
                  </Button>{" "}
                  {/* </Card> */}
                </Col>

                </Card>
              </div>


            );
           <br/>
       
          })}
        </Row>




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
