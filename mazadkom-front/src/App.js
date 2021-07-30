import React, { Component } from 'react'
import Register from './components/register';
import Login from './components/login';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>hello !</h1>
        <Register />
        <Login />
      </div>
    )
  }
}

