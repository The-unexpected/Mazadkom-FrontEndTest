import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./css/login.css";
import axios from "axios";

function Login(props) {
  const [state, setState] = useState({ username: "", password: "" });

  const handleChange = (e) => {
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

    const loggedInUser = await axios
      .post(
        `https://mazadkom.herokuapp.com/signin`,
        {},
        {
          auth: {
            username: state.username,
            password: state.password,
          },
        }
      )
      .catch((err) => {
        console.log(err.response);
      });

    console.log(loggedInUser);
    if (loggedInUser) {
      localStorage.setItem("token", loggedInUser.data.token);
      localStorage.setItem("username", loggedInUser.data.user.username);
      localStorage.setItem("id", loggedInUser.data.user._id);
    }
    window.location.href = "/";
  };

  return (
    <div className="container">
      <div className="signin-form">
        <Form className="form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your name"
              name="username"
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your personal infos with anyone else.
            </Form.Text>
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
              LogIn
            </Button>{" "}
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
