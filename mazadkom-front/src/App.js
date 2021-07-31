import React from 'react';
import NavBar from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer'; 
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/about">
              <AboutUs />
          </Route>
          {/* <Route exact path = '/feed'>
          <Feeder/>
          </Route> */}
        </Switch>
        <Footer />
      </Router>
      // add OurCard to products route
    );
  }
}

export default App;
