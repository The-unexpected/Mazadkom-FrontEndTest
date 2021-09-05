import React from 'react';
import { connect } from 'react-redux';
import { catChange, reset } from '../store/products.js';
import { addItem, remove } from '../store/simplecart.js';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    width: 1,
    maxWidth: '20ch',
    zIndex: 1000,
   
    fontSize: 20,
   
  },

 
  button: {
    background: '#38598b',
    borderWidth: 2,
    borderColor: '#a2a8d3',
    borderStyle: 'solid',
    fontSize: 13,
  }
}));

function SimpleCart(props) {
  const classes = useStyles();
  return (
    <>
      <List className={classes.root}>
      
        {props.cartReducer.cartList.map(product => {
          return (
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={product.image}/>
              </ListItemAvatar>
              <ListItemText
                className={classes.cartText}
                primary={product.name}
                secondary={
                  <React.Fragment>
                    <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                    >
                      ${product.price}
                    </Typography>
                    <Button className={classes.button} onClick={() => props.remove(product)} size="small">
                      Remove
                    </Button>
                  </React.Fragment>
                }
              />
            </ListItem>
          )
        })}
      </List>
    </>
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
  addItem: (product) => dispatch(addItem(product)),
  remove: (product) => dispatch(remove(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
