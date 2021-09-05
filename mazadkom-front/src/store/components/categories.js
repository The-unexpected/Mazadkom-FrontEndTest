import React from 'react';
import { connect } from 'react-redux';
import { changeCategory, reset } from '../store/categories.js';
import { catChange } from '../store/products.js';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  buttonBar: {
    height: '0px',
    marginRight: '-900px'
  },
}));

const Categories = props => {
  const classes = useStyles();

  return (
    <AppBar className={classes.buttonBar} id="catBar" color="default" >
      <Tabs>
        {props.catReducer.categories.map(catugary => {
          return (
            <Button color="default" onClick={() => props.changeCategory(catugary.name)}>{catugary.displayName}</Button>
          )
        })}
      </Tabs>
    </AppBar>
  )
}

const mapStateToProps = state => ({
  catReducer: state.catReducer
})


const mapDispatchToProps = dispatch => ({
  changeCategory: (name) => dispatch(changeCategory(name)),
  catChange: (name) => dispatch(catChange(name)),
  reset: () => dispatch(reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
