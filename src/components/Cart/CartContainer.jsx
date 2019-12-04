import React from 'react';
import Cart from './Cart';
import { connect } from 'react-redux';
import { closeCart } from './../../redux/reducers/app-reducer';
import { deleteCartProducts, putCartProduct, deleteCartProduct } from './../../redux/reducers/cart-reducer';

const CartContainer = (props) => {
  return (
    <Cart 
      {...props}
    />
  )
}

const mapStateToProps = (state) => ({
  cartProducts: state.cart.cartProducts,
  totalPrice: state.cart.totalPrice,
  isCartOpen: state.app.isCartOpen
}) 

export default connect(
  mapStateToProps,   
  { closeCart, deleteCartProducts, putCartProduct, deleteCartProduct }
)(CartContainer)