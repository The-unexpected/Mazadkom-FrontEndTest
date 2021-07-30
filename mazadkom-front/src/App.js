import React from 'react'
import NavBar from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends React.Component {

 
  render() {
  
    return (
      
      <Router>
        <NavBar />
        <Switch>
            <Route exact path="/">
             <Home/>
            </Route>
          {/* <Route exact path="/profile">
            <Profile/>
          </Route> */}
          {/* <Route exact path="/contact">
            <Form/>
          </Route> */}
          {/* <Route exact path="/about">
              <AboutUs />
          </Route> */}
          {/* <Route exact path = '/feed'>
          <Feeder/>
          </Route> */}
        </Switch>
        {/* <Footer /> */}
      </Router>
    )
  }
}

export default (App);
