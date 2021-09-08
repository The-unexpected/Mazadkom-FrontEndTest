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
      <h1 style={{textAlign:'center',marginTop:'3rem',color:'rgb(211, 51, 51)',fontFamily: ' serif',fontWeight:'bold'}}>Our Exhibit</h1>
      <h5 style={{textAlign:'center',marginTop:'1rem'}}>You can start bidding from here . Choose the product you like and join its bidding room</h5>

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
                      <p><span style={{color:'rgb(211, 51, 51)'}}>Price:</span> {element.startingPrice}$</p>
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

                  >
                    Join Room
                  </Button>{" "}
                  {/* </Card> */}
                </Col>

                </Card>
              </div>

            );
        
          })}
        </Row>

      
    </div>
  );
}

export default OurCard;
