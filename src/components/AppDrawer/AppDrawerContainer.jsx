import React from 'react';
import AppDrawer from './AppDrawer';
import { connect } from 'react-redux';
import { toggleIsDrawerOpen } from '../../redux/reducers/app-reducer';
import { logout } from '../../redux/reducers/auth-reducer';

const AppDrawerContainer = ({ toggleIsDrawerOpen, ...props }) => {
  const handleDrawerClose = () => {
    toggleIsDrawerOpen(false);
  }

  return (
    <AppDrawer
      {...props}
      handleDrawerClose={handleDrawerClose}
    />
  )
}

const mapStateToProps = (state) => ({
  isDrawerOpen: state.app.isDrawerOpen,
  login: state.auth.login,
  isAuth: state.auth.isAuth,
  role: state.auth.role,
  userId: state.auth.userId
})

export default connect(
  mapStateToProps,
  { toggleIsDrawerOpen, logout }
)(AppDrawerContainer)