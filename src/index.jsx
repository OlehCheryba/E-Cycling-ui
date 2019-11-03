import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import store from './redux/store.js'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.querySelector('#root')
);