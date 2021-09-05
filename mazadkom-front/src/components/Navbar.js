import React, { useContext, useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "./image/logo.png";
import "./css/home.css";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/context";

function NavBar(props) {
  const { user, setUser } = useContext(UserContext);
  const [nav, setNav] = useState("");

  // useEffect(() => {
  //   setNav(user);
  //   console.log("nav", user.user.data.token);
  // }, []);

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
    <Navbar
      className="nav"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand>
          <h1>
            <img className="logo" src={Logo} alt="logo"></img> Mazad
            <span>Kom</span>
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto w-100">
            <Nav.Link onClick={() => history.push("/")}>Home</Nav.Link>
            {/* <Nav.Link href="#product">Our-Products</Nav.Link> */}
            <Nav.Link onClick={() => history.push("/about")}>About-US</Nav.Link>
            {user?.user?.data?.token && (
              <Nav.Link onClick={() => history.push("/profile")}>
                Profile
              </Nav.Link>
            )}
            {!user?.user?.data?.token && (
              <>
                <Nav.Link eventKey={2} onClick={() => history.push("/login")}>
                  Log-In
                </Nav.Link>
                <Nav.Link
                  eventKey={2}
                  onClick={() => history.push("/register")}
                >
                  Sign-Up
                </Nav.Link>
              </>
            )}
            {user?.user?.data?.token && (
              <Nav.Link className="sing-out" onClick={logOut}>
                {" "}
                Sign-Out
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
