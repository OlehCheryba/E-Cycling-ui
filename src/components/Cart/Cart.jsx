import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';
import CartProduct from './CartProduct';

const useStyles = makeStyles(theme => ({
  paper: {
    overflow: 'auto',
    position: 'fixed',
    top: '5%',
    bottom: '5%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Cart = ({ products, totalPrice, isCartOpen, closeCart, deleteCartProducts, putCartProduct, deleteCartProduct }) => {
  const classes = useStyles();

  return (
    <>
      <Modal
        open={isCartOpen}
        onClose={closeCart}
      >
        <div className={classes.paper}>
          <button onClick={closeCart}>Go back</button>
          <h2>Cart</h2>
          <div>
            {products.map((product) => (
              <CartProduct 
                key={product.id}
                product={product} 
                deleteCartProduct={deleteCartProduct}
                putCartProduct={putCartProduct}
              />)
            )}
          </div>
          <p>
            Total price: {totalPrice}
          </p>
          <button onClick={closeCart}>Close cart</button>
          <button onClick={deleteCartProducts}>Clear cart</button>
        </div>
      </Modal>
    </>
  );
}

export default Cart