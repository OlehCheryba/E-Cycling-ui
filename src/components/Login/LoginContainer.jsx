import { login } from '../../redux/reducers/auth-reducer';
import React from 'react';
import Login from './Login';
import { connect } from 'react-redux';

const LoginContainer = (props) => {
    return (
      <Login
        {...props}
      />
    )
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(
  mapStateToProps, 
  { login }
)(LoginContainer);