import React from "react";
import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Room from "./components/Room";

import Profile from "./components/Profile";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App(props) {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            {localStorage.getItem("token") ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/about">
            <AboutUs />
          </Route>
          <Route exact path="/room">
            <Room />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
