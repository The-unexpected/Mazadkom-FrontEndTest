import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./css/login.css"
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...this.state,
      created_at: Date.now(),
    };

    console.log(payload);
    const userDetails = {
      username: this.state.username,
      password: this.state.password
    }

    const loggedInUser = await axios.post(`http://localhost:5000/signin`, {}, {
      auth: {
        username: this.state.username,
        password: this.state.password
      }
    }).catch(err => {
      console.log(err.response);
      alert(err.response.data.err);
    });

    console.log(loggedInUser);
    if (loggedInUser) {
      localStorage.setItem("token", loggedInUser.data.token);
      this.setState({ user: loggedInUser.data.user.admin })
      // this.setState({ redirect: true })
    };
  };


  render() {
    return (

      <div className="container">
        <div className="signin-form">
          <Form className="form" onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail"  >

              <Form.Label>Name </Form.Label>
              <Form.Control type="text" placeholder="Enter Your name" name="username" onChange={this.handleChange} />
              <Form.Text className="text-muted">
                We'll never share your personal infos with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChange} autoComplete="current-password" />
            </Form.Group>


            <div className="button-login"><Button variant="outline-secondary" type="submit">LogIn</Button>        </div>

          </Form>
        </div>

      </div>

    )
  }
}
