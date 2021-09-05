import React from 'react';
import './styles/style.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header.js';


import App from './app.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#c7e6f0',
  }
}));


function Main() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Header />
      <App className={classes.root} />

    </BrowserRouter>
  )
}

export default Main;