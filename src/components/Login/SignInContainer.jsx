import { login } from '../../redux/auth-reducer';
import React, { Component } from 'react';
import SignIn from './SignIn';
import { connect } from 'react-redux';
import {Redirect} from "react-router-dom";

class SignInContainer extends Component {
  render() {
    if (this.props.isAuth) {
      return <Redirect to="/"/>
    }
    return (
      <SignIn 
        login={this.props.login}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(
  mapStateToProps, 
  { login }
)(SignInContainer);