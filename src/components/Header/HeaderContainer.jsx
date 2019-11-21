import React  from 'react';
import Header from './Header.jsx';
import { connect } from 'react-redux';
import { logout } from '../../redux/reducers/auth-reducer';
import { toggleIsDrawerOpen } from '../../redux/reducers/app-reducer';

const HeaderContainer = ({ toggleIsDrawerOpen, ...props}) => {
  const handleDrawerOpen = () => {
    toggleIsDrawerOpen(true);
  }
  return (
    <Header 
      {...props} 
      handleDrawerOpen={handleDrawerOpen}
    />
  )
}

const mapStateToProps = (state) => ({
  login: state.auth.login,
  userId: state.auth.userId,
  isAuth: state.auth.isAuth,
  role: state.auth.role
})

export default connect(
  mapStateToProps,
  { logout, toggleIsDrawerOpen }
)(HeaderContainer)