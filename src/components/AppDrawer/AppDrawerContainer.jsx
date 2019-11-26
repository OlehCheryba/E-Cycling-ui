import React from 'react';
import AppDrawer from './AppDrawer';
import { connect } from 'react-redux';
import { closeDrawer } from '../../redux/reducers/app-reducer';
import { logout } from '../../redux/reducers/auth-reducer';

const AppDrawerContainer = (props) => {
  return (
    <AppDrawer
      {...props}
    />
  )
}

const mapStateToProps = (state) => ({
  isDrawerOpen: state.app.isDrawerOpen,
  login: state.customer.login,
  isAuth: state.auth.isAuth,
  role: state.customer.role
})

export default connect(
  mapStateToProps,
  { closeDrawer, logout }
)(AppDrawerContainer)