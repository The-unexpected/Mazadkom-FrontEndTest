import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./css/login.css";
import axios from "axios";
import { UserContext } from "../context/context";
import { useHistory } from "react-router-dom";

function Login(props) {
  let history = useHistory();
  const [state, setState] = useState({ username: "", password: "" });
  const { user, setUser } = useContext(UserContext);

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
      localStorage.setItem("user", JSON.stringify(loggedInUser));
      localStorage.setItem("token", loggedInUser.data.token);
      localStorage.setItem("username", loggedInUser.data.user.username);
      localStorage.setItem("id", loggedInUser.data.user._id);
      const parsed = JSON.parse(localStorage.getItem("user"));
      setUser(parsed);
    }
    await history.push("/");
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
              Log in
            </Button>{" "}
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
