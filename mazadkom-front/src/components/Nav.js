import React, { Component } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

import Logo from "./image/logo.png"
import './css/home.css'



class NavBar extends Component {
  logOut() {
    localStorage.clear();
    console.log("logged out");
    window.location.reload();
    window.location.href = "/";
  }
  render() {
    return (
      <Navbar className="nav" collapseOnSelect expand="lg" bg="light" variant="light" >
        <Container>
          <Navbar.Brand href="/">

            <h1><img className="logo" src={Logo}></img> Mazad<span>Kom</span> </h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="ml-auto w-100" >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#product">Our-Products</Nav.Link>
              <Nav.Link href="/about">About-US</Nav.Link>
              {localStorage.getItem('token') && <Nav.Link href="/profile">Profile</Nav.Link>}

              {!localStorage.getItem('token') &&
                <>
                  <Nav.Link eventKey={2} href="/login">
                    Log-In
                  </Nav.Link>
                  <Nav.Link eventKey={2} href="/register">
                    Sign-Up
                  </Nav.Link>
                </>}

        {
          localStorage.getItem('token') &&
          <Button  className="sing-out" onClick={this.logOut}> Sign-Out</Button>
        }

            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar >
    )
  }
}

export default NavBar;
