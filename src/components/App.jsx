import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Home from './Home.jsx';
import SignIn from './SignIn.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ProductList from './ProductList.jsx';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/signin' component={SignIn}/>
        <Footer/>
      </Router>
    </>  
  )
}

export default App