import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";
import SignInContainer from './components/Login/SignInContainer.jsx';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import Footer from './components/Footer/Footer.jsx';
import { connect } from 'react-redux';
import ProductsContainer from './components/Products/ProductsContainer.jsx';
import { initializeApp } from './redux/app-reducer';
import {compose} from "redux";
import { Container } from 'react-bootstrap';
import AdminPanelContainer from './components/AdminPanel/AdminPanelContainer.jsx';
import ItemContainer from './components/Item/ItemContainer.jsx';

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
          <Route exact path='/signin' render={() => <SignInContainer />}/>
          <Route exact path='/admin' render={() => <AdminPanelContainer />}/>
          <Route path='/item/:itemId?' render={() => <ItemContainer />}/>
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
