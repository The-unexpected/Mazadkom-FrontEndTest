import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { addItem, increment } from '../store/simplecart.js';
import { catChange, reset } from '../store/products.js';
import Logo from "./images/online.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    background: '#F8F9FA',
    height: 110,
    borderWidth: 2,
    borderColor: 'rgb(150, 30, 30)',
    borderStyle: 'solid',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {


    color: 'black',
  },
}));



function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className="header-bar">
        <Toolbar className={classes.bar}>
        <h1>
            <img className="logoS" src={Logo} alt="logo"></img>  
          </h1>
          <Typography className="logo" id="headerTitle" variant="h3"  className={classes.title}>
            Online Store
          </Typography>
          <NavLink to="/cart" id="cartButton" color="inherit">Cart({props.cartReducer.cartList.length})</NavLink>
       
 
            <NavLink id="cartButton" color="inherit"  to='/cat'>Show catagery</NavLink>
        
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapStateToProps = state => ({
  prodReducer: state.prodReducer,
  catReducer: state.catReducer,
  cartReducer: state.cartReducer
})

const mapDispatchToProps = dispatch => ({
  catChange: (name) => dispatch(catChange(name)),
  reset: () => dispatch(reset()),
  increment: (product) => dispatch(increment(product)),
  addItem: (product) => dispatch(addItem(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);


