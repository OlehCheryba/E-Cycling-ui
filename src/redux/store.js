import productsReducer from "./products-reducer";
import { combineReducers, createStore } from "redux";

const reducers = combineReducers({
  productsPage: productsReducer
});

const store = createStore(reducers);

export default store;