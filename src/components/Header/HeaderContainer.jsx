import React  from 'react';
import Header from './Header.jsx';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer';

const HeaderContainer = (props) => {
  return (
    <Header {...props} />
  )
}

const mapStateToProps = (state) => ({
  login: state.auth.login,
  userId: state.auth.userId,
  isAuth: state.auth.isAuth,
})

export default connect(
  mapStateToProps,
  { logout }
)(HeaderContainer)