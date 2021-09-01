import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

function Profile() {
  const [username, setUsername] = useState("");
  // const [image, setImage] = useState("");
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  const [bids, setBids] = useState([]);

  useEffect((props) => {
    const id = localStorage.getItem("id");
    console.log("id=", id);
    try {
      const request = axios
        .get(`https://mazadkom.herokuapp.com/user/${id}`)
        .then((res) => {
          let response = JSON.parse(JSON.stringify(res));
          console.log(response);
          setUsername(response.data.UserInfo[0].username);
          // setImage(response.data.UserInfo[0].image);
          setBids(response.data.UserInfo[0].bids[0]);
        });
    } catch (e) {
      console.log(e.message);
    }
  }, []);
  return (
    <div>
      <h1>Greetings {username} ! </h1>

      {bids && (
        <Card
          bg="primary"
          text="white"
          style={{ width: "18rem" }}
          className="mb-2"
        >
          <Card.Header>Claimed bid</Card.Header>
          <Card.Body>
            <Card.Title>{bids.title} </Card.Title>
            <Card.Text>{bids.description}</Card.Text>
          </Card.Body>
          <Card.Footer>{bids.startingPrice}</Card.Footer>
        </Card>
      )}
    </div>
  );
}

export default Profile;
