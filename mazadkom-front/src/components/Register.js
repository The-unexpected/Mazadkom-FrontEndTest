import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./css/login.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import axios from "axios";

function Register(props) {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [state, setState] = useState({ username: "", password: "", email: "" });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...state,
      created_at: Date.now(),
    };
    const userDetails = {
      username: state.username,
      password: state.password,
      email: state.email,
    };

    // const HOST = process.env.REACT_APP_SERVER;
    // console.log(HOST);
    const newUser = await axios
      .post(`https://mazadkom.herokuapp.com/signup`, userDetails)
      .catch((error) => {
        console.log(error.response);
        alert(error.response.data.error);
      });
    console.log(newUser);

    // console.log('handle submit payload is = ', payload);
    NotificationManager.success("success", "Sign-Up");
  };

  return (
    <div>
      <NotificationContainer />
      <div className="container">
        <div className="signin-form">
          <Form className="form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>User Name </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your name"
                name="username"
                onChange={handleChange}
                autoComplete="on"
              />
              <Form.Text className="text-muted">
                We'll never share your personal infos with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Your Email"
                name="email"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                autoComplete="current-password"
              />
            </Form.Group>

            <div className="button-login">
              <Button variant="outline-secondary" type="submit">
                SignUp
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
