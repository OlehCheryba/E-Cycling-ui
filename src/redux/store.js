import productsReducer from "./products-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  productsPage: productsReducer,
  auth: authReducer,
  app: appReducer
});

const store = createStore(
  reducers,  
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

window.store = store;

export default store;