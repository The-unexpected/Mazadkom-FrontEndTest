import React, { Component } from 'react';
import { Navbar, Container ,Nav} from 'react-bootstrap';
import './css/home.css'
 


 class NavBar extends Component {
    render() {
        return (
<Navbar className="nav"  collapseOnSelect expand="lg" bg="light" variant="light" >
  <Container>
  <Navbar.Brand href="/"> 
  <h1>Mazad<span>Kom</span> </h1></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
      
    <Nav className="ml-auto " >
    <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="#product">Our Products</Nav.Link>
      {/* <Nav.Link href="/About">About US</Nav.Link> */}
      <Nav.Link eventKey={2} href="#memes">
        Log-In
      </Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
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
