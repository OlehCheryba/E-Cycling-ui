import React, { Component } from 'react';
import { Route, withRouter, Switch } from "react-router-dom";
import LoginContainer from './components/Login/LoginContainer.jsx';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import Footer from './components/Footer/Footer.jsx';
import { connect } from 'react-redux';
import ProductsContainer from './components/Products/ProductsContainer';
import { initializeApp } from './redux/reducers/app-reducer';
import {compose} from "redux";
import { Container } from 'react-bootstrap';
import ProductPageContainer from './components/ProductPage/ProductPageContainer.jsx';
import CustomersContainer from './components/Customers/CustomersContainer.jsx';
import CustomerPageContainer from './components/CustomerPage/CustomerPageContainer.jsx';
import withSuspense from './hoc/withSuspense.jsx';
import AppDrawerContainer from './components/AppDrawer/AppDrawerContainer.jsx';
import Preloader from './components/common/Preloader.jsx';
const AdminPanelContainer = React.lazy(() => import('./components/AdminPanel/AdminPanelContainer.jsx'));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <>
        <HeaderContainer />
        <AppDrawerContainer /> 
        <Container>
          <Switch>
            <Route exact path='/' render={() => <ProductsContainer />}/>
            <Route path='/products/:productId?' render={() => <ProductPageContainer />}/>
            <Route exact path='/customers' render={() => <CustomersContainer />}/>
            <Route path='/customers/:customerId?' render={() => <CustomerPageContainer />}/>
            <Route path='/login' render={() => <LoginContainer />}/>
            <Route path='/admin' render={withSuspense(AdminPanelContainer)}/>
            <Route path='*' render={() => <b>404 Not found</b>}/>
          </Switch>
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
