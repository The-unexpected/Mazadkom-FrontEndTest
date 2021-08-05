import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./css/login.css"
import {
  NotificationContainer
  , NotificationManager
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import axios from 'axios';



export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }

 
  handleChange = async (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...this.state,
      created_at: Date.now(),
    };

    const userDetails = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    }

    // const HOST = process.env.REACT_APP_SERVER;
    // console.log(HOST);
    const newUser = await axios.post(`http://localhost:5000/signup`, userDetails).catch((error) => {
      console.log(error.response);
      alert(error.response.data.error);
    });
    console.log(newUser);

    // console.log('handle submit payload is = ', payload);
    NotificationManager.success('success','Sign-Up');
  };



  render() {
    return (
      <>
      <NotificationContainer/>
      <div className="container">
        <div className="signin-form">
          <Form className="form" onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName"  >
              <Form.Label>User Name </Form.Label>
              <Form.Control type="text" placeholder="Enter Your name" name="username" onChange={this.handleChange} autoComplete="on" />
              <Form.Text className="text-muted">
                We'll never share your personal infos with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control type="email" placeholder="Enter Your Email" name="email" onChange={this.handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChange} autoComplete="current-password" />
            </Form.Group>


            <div className="button-login"><Button variant="outline-secondary" type="submit">SignUp</Button></div>

          </Form>
        </div>

      </div>
      </>
    )
  }
}
