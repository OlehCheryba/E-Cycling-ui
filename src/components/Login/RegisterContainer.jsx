import { register } from '../../redux/reducers/auth-reducer';
import React from 'react';
import Register from './Register';
import { connect } from 'react-redux';

const RegisterContainer = (props) => {
    return (
      <Register
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
  { register }
)(RegisterContainer);