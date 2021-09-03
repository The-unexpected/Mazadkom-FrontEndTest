import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Profile() {
  const [username, setUsername] = useState("");
  // const [image, setImage] = useState("");
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  const [bids, setBids] = useState([]);
  const [addP, setAddP] = useState({
    title: "",
    description: "",
    picture: "",
    startingPrice: "",
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setAddP((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...addP,
      created_at: Date.now(),
    };
    const productData = {
      title: addP.title,
      description: addP.description,
      picture: addP.picture,
      startingPrice: addP.startingPrice,
    };
    const id = localStorage.getItem("id");
    console.log("id=", id);
    const newProduct = await axios
      .post(`http://localhost:5000/posts/${id}`, productData)
      .then((res) => {
        let response = JSON.parse(JSON.stringify(res));
        console.log('newProduct', response);

        // setImage(response.data.UserInfo[0].image);
        // setBids(response.data.UserInfo[0].bids[0]);
      });


    const apiProduct = await axios
      .post(`http://localhost:5000/apiElement`, productData)
      .catch((error) => {
        console.log(error.response);
        alert(error.response.data.error);
      });
    console.log(apiProduct);



  };

  useEffect((props) => {
    const id = localStorage.getItem("id");
    // console.log("id=", id);
    try {
      const request = axios
        .get(`http://localhost:5000/user/${id}`)
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

      <Form className="form-product" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Product title"
            name="title"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>description </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter a short description"
            name="description"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Picture URL </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter URL"
            name="picture"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Starting Price </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your name"
            name="startingPrice"
            onChange={handleChange}
          />
        </Form.Group>

        <div className="button-login">
          <Button variant="outline-secondary" type="submit">
            Add Product
          </Button>{" "}
        </div>
      </Form>

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
