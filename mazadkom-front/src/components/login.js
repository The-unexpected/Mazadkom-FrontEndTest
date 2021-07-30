import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Login extends Component {
  render() {
    return (

      <div>

        <Form id="signin-form" onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail"  >

            <Form.Label>Name </Form.Label>
            <Form.Control type="text" placeholder="Enter Your name" name="name" onChange={this.handleChange} />
            <Form.Text className="text-muted">
              We'll never share your credentials with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="pswd" onChange={this.handleChange} autoComplete="current-password" />
          </Form.Group>


          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>

    )
  }
}
