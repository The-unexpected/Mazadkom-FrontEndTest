import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./css/login.css"


export default class Register extends Component {


  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email:'',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...this.state,
      created_at: Date.now() / 1000,
    };

    // handleEmail =(e)=>{
    //   e.preventDefault();
    //   this.setState({ [e.target.email]: });
    //   console.log(this.state);
      
    // }

    const userDetails = {
      username: this.state.name,
      password: this.state.pswd,
      admin: this.state.admin
    }
    // const HOST = process.env.REACT_APP_SERVER;
    // const newUser = await axios.post(`${HOST}/signup`, userDetails);

    // console.log(newUser.data);
    // //localStorage.setItem();
    console.log('handle submit payload is = ', payload);
    // this.props.socket.emit('createTicket', payload);
  };



  render() {
    return (

      <div className="container">
      <div className="signin-form">
      <Form className="form"  onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName"  >
          <Form.Label>User Name </Form.Label>
          <Form.Control type="text" placeholder="Enter Your name" name="name" onChange={this.handleChange} />
          <Form.Text className="text-muted">
            We'll never share your personal infos with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ُEmail </Form.Label>
          <Form.Control type="email" placeholder="Enter Your Email" name="email"  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChange} autoComplete="current-password" />
        </Form.Group>


        <div className="button-login"><Button  variant="outline-secondary">SignUp</Button>{' '}</div>
      
      </Form>
      </div>
     
    </div>

    )
  }
}

