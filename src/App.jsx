import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";
import LoginContainer from './components/Login/LoginContainer.jsx';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import Footer from './components/Footer/Footer.jsx';
import { connect } from 'react-redux';
import ProductsContainer from './components/Products/ProductsContainer.jsx';
import { initializeApp } from './redux/reducers/app-reducer';
import {compose} from "redux";
import { Container } from 'react-bootstrap';
import AdminPanelContainer from './components/AdminPanel/AdminPanelContainer.jsx';
import ProductPageContainer from './components/ProductPage/ProductPageContainer.jsx';

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <b>Load</b>
    }
    return (
      <>
        <HeaderContainer/>
        <Container>
          <Route exact path='/' render={() => <ProductsContainer />}/>
          <Route exact path='/login' render={() => <LoginContainer />}/>
          <Route exact path='/admin' render={() => <AdminPanelContainer />}/>
          <Route exact path='/products/:productId?' render={() => <ProductPageContainer />}/>
        </Container>
        <Footer/>
      </>  
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose( 
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
