import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import SignIn from './components/SignIn.jsx';
import Header from './components/Navbar/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import ProductsContainer from './components/Products/ProductsContainer.jsx';

function App() {
  return (
    <>
      <Header/>
      <Route exact path='/' render={() => <ProductsContainer />}/>
      <Route exact path='/signin' render={() => <SignIn />}/>
      <Footer/>
    </>  
  )
}

export default App