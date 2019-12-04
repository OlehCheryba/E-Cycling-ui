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

const CartProduct = ({ cartProduct, putCartProduct, deleteCartProduct }) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <div>
        <IconButton 
          aria-label="delete item" 
          onClick={() => {
            deleteCartProduct(cartProduct.id);
          }}
        >
          <HighlightOffIcon />
        </IconButton>
      </div>
      <NavLink to={`products/${cartProduct.id}`}>
        <img 
          className={classes.image}
          src={`http://localhost:3000/images/${cartProduct.info.photoSrc || 'product-default.jpg'}`} 
        />
      </NavLink>
      <div>
        <NavLink to={`products/${cartProduct.id}`}>
          <h4 className={classes.productName}>
            {cartProduct.info.name}
          </h4>
        </NavLink>
        <p>
          {cartProduct.info.price}
        </p>
      </div>
      <div>
        <IconButton 
          aria-label="add to favorites"
          onClick={() => {
            cartProduct.amount--;
            if (cartProduct.amount === 0) {
              return deleteCartProduct(cartProduct.id)
            }
            putCartProduct(cartProduct);
          }}
        >
          <RemoveCircleOutlineIcon />
        </IconButton>
        {cartProduct.amount}
        <IconButton 
          aria-label="share"
          onClick={() => {
            cartProduct.amount++;
            putCartProduct(cartProduct);
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
          {cartProduct.amount * cartProduct.info.price}
        </p>
      </div>
    </div>
  );
}

export default CartProduct