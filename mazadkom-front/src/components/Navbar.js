import React, { useContext, useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "./image/logo.png";
import "./css/header.css";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/context";
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
function NavBar(props) {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    console.log(user);
  }, []);

  let history = useHistory();
  const logOut = () => {
    localStorage.clear();
    console.log("logged out");
    window.location.reload();
    history.push("/");
  };
  useEffect(() => {
    console.log("effect");
  }, []);
  return (
    <AppBar className="header-bar">
    <Navbar
    className="Navbar"
    collapseOnSelect
    
   
   
    >
      <Container>
        <Navbar.Brand   className="name">
          <h1>
            <img className="logo" src={Logo} alt="logo"></img> Mazad
            <span>Kom</span>
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto w-100">
            <Nav.Link className="HeaderLink"  onClick={() => history.push("/")}>Home</Nav.Link>
            {/* <Nav.Link href="#product">Our-Products</Nav.Link> */}
            <Nav.Link  className="HeaderLink"  onClick={() => history.push("/about")}>About-US</Nav.Link>
            {user?.data?.token && (
              <Nav.Link className="HeaderLink"  onClick={() => history.push("/profile")}>
                Profile
              </Nav.Link>
            )}
            {!user?.data?.token && (
              <>
                <Button className="button" >
                <Nav.Link eventKey={2} onClick={() => history.push("/login")}>
                  Log-In
                </Nav.Link>
                </Button>
                <Button className="button" >
                <Nav.Link
                  eventKey={2}
                  onClick={() => history.push("/register")}
                >
                  Sign-Up
                </Nav.Link>
                </Button>
              </>
            )}
            {user?.data?.token && (
            
              <Nav.Link className="sing-out" onClick={logOut}>
                {" "}
                Sign-Out
              </Nav.Link>
            
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </AppBar>
  );
}

export default NavBar;
