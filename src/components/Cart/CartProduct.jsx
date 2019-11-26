import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  card: {
    padding: '15px',
    margin: '15px',
    display: 'grid',
    gridTemplateColumns: 'auto 200px 1fr auto auto',
    gridGap: '10px',
    border: '1px solid black',
    borderRadius: '5px',
  },
  image: {
    width: '200px'
  },
  productName: {
    textDecoration: 'none',
    color: 'black'
  }
}));

const CartProduct = ({ product, putCartProduct, deleteCartProduct }) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <div>
        <IconButton 
          aria-label="delete item" 
          onClick={() => {
            deleteCartProduct(product.id);
          }}
        >
          <HighlightOffIcon />
        </IconButton>
      </div>
      <NavLink to={`products/${product.id}`}>
        <img 
          className={classes.image}
          src={`http://localhost:3000/images/${product.info.photoSrc || 'product-default.jpg'}`} 
        />
      </NavLink>
      <div>
        <NavLink to={`products/${product.id}`}>
          <h4 className={classes.productName}>
            {product.info.name}
          </h4>
        </NavLink>
        <p>
          {product.info.price}
        </p>
      </div>
      <div>
        <IconButton 
          aria-label="add to favorites"
          onClick={() => {
            product.amount--;
            if (product.amount === 0) {
              return deleteCartProduct(product.id)
            }
            putCartProduct(product);
          }}
        >
          <RemoveCircleOutlineIcon />
        </IconButton>
        {product.amount}
        <IconButton 
          aria-label="share"
          onClick={() => {
            product.amount++;
            putCartProduct(product);
          }}
        >
          <ControlPointIcon />
        </IconButton>
      </div>
      <div>
        <p>
          Price
        </p>
        <p>
          {product.amount * product.info.price}
        </p>
      </div>
    </div>
  );
}

export default CartProduct