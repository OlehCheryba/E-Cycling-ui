import React, { Component } from 'react';
import Cart from './Cart';
import { connect } from 'react-redux';
import { requestCartItems } from '../../redux/reducers/cart-reducer';
import { toggleIsCartOpen } from './../../redux/reducers/app-reducer';

class CartContainer extends Component {
  componentDidMount() {
    this.props.requestCartItems();
  }
  
  render() {
    return (
      <Cart 
        {...this.props}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.cart.items,
  isCartOpen: state.app.isCartOpen
}) 

export default connect(
  mapStateToProps,   
  { requestCartItems, toggleIsCartOpen }
)(CartContainer)