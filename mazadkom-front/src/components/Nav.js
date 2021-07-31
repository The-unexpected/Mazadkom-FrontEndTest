import React, { Component } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Logo from "./image/logo.png"
import './css/home.css'



class NavBar extends Component {
  render() {
    return (
      <Navbar className="nav" collapseOnSelect expand="lg" bg="light" variant="light" >
        <Container>
          <Navbar.Brand href="/">
           
            <h1><img className="logo" src={Logo}></img> Mazad<span>Kom</span> </h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="ml-auto " >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#product">Our-Products</Nav.Link>
              <Nav.Link href="/about">About US</Nav.Link>
              <Nav.Link href="/room">Room</Nav.Link>
              <Nav.Link eventKey={2} href="/login">
                Log-In
              </Nav.Link>
              <Nav.Link eventKey={2} href="/register">
                Sign-Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default NavBar;
