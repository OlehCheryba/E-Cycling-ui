import React  from 'react';
import Header from './Header.jsx';
import { connect } from 'react-redux';
import { logout } from '../../redux/reducers/auth-reducer';
import { openDrawer } from '../../redux/reducers/app-reducer';
import { openCart } from './../../redux/reducers/app-reducer';

const HeaderContainer = (props) => {
  return (
    <Header 
      {...props}
    />
  )
}

const mapStateToProps = (state) => ({
  login: state.customer.login,
  isAuth: state.auth.isAuth,
  role: state.customer.role,
  totalAmount: state.cart.totalAmount
})

export default connect(
  mapStateToProps,
  { logout, openDrawer, openCart }
)(HeaderContainer)