import { productsAPI } from "../../api/api";

const SET_ORDERS = 'SET_ORDERS';

const initialState = {
  orders: []
}

const adminReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_ORDERS:
      return {
        ...state,
        orders: action.orders
      }
    default:
      return state;
  }
};

export const setOrders = (orders) => ({ type: SET_ORDERS, orders });

export const addProduct = (name, price) => async (dispatch) => {
  productsAPI.addProduct(name, price);
}

export default adminReducer;