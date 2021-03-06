import productsReducer from "./reducers/products-reducer";
import authReducer from "./reducers/auth-reducer";
import appReducer from "./reducers/app-reducer";
import productReducer from "./reducers/product-reducer";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import adminReducer from "./reducers/admin-reducer";
import customerReducer from "./reducers/customer-reducer";
import cartReducer from "./reducers/cart-reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  cart: cartReducer,
  customer: customerReducer,
  adminPanel: adminReducer,
  productPage: productReducer,
  productsPage: productsReducer,
  auth: authReducer,
  app: appReducer
});

const store = createStore(
  reducers,  
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;