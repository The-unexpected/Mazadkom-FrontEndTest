import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { catChange, reset } from '../store/products.js';
import { reset, addItem } from '../store/simplecart.js';
import { selectProduct } from '../store/prodDetails.js';
import * as actions from '../store/api-actions.js';
import { NavLink } from 'react-router-dom';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';




const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
   
  },
  card: {
    display: 'inline-block',
    width: 300,
    height: 450,
    padding: 20,
    margin: 37,
    borderWidth: 3,
    borderColor: 'rgb(150, 30, 30)',
    borderStyle: 'solid',
  },
  media: {
    padding: '50%',
   
 
  },
  content: {
    height: 300,
  },
  categoryName: {
    textAlign: 'center',
    fontSize: 36,
    color:'rgb(150, 30, 30)',
    border:'60px'
  },
  prodText: {
    fontSize: 15,
  },
  cardButton: {
    fontSize: 13,
    color:'rgb(150, 30, 30)',
  },
  desc: {
    fontSize: 12,
  }
}));


const Products = props => {

  const fetchData = (e) => {
    e && e.preventDefault();
    props.get();
  }

  useEffect(() => {
    fetchData();
  }, []);

  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="md">
      <Typography className={classes.categoryName}>{props.catReducer.activeCategory}</Typography>
        {props.apiReducer.results.map(product => {
          if (product.catugary === props.catReducer.activeCategory)
          return (
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={product.image}
                  title="image thumbnail"
                />
                <CardContent>
                  <Typography className={classes.prodText} gutterBottom component="h2">
                    {product.name} ${product.price}
                  </Typography>
                  <Typography className={classes.desc} variant="body2" color="textSecondary" component="p">
                    {product.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button className={classes.cardButton} size="small" color="primary" onClick={() => props.addItem(product)}>
                  Add to Cart!
                </Button>
                <Button className={classes.cardButton} size="small" color="primary" onClick={(product) => props.selectProduct(product)}>
                  <NavLink to={{
                    pathname: `/details/:${product.id}`,
                    state: product,
                    }}
                  >
                    View Details
                  </NavLink>
                </Button>
              </CardActions>
            </Card>
          )
        })}
    </Container>
  )
}


const mapStateToProps = state => ({
  prodReducer: state.prodReducer,
  catReducer: state.catReducer,
  cartReducer: state.cartReducer,
  apiReducer: state.apiReducer,
  detailReducer: state.detailReducer
})

const mapDispatchToProps = (dispatch, getState) => ({
  get: () => dispatch(actions.getRemoteData()),
  reset: () => dispatch(reset()),
  addItem: (product) => dispatch(addItem(product)),
  selectProduct: (product) => dispatch(selectProduct(product)),  
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
