import { customersAPI } from "../../api/api.js";

const SET_CUSTOMER_INFO = 'SET_CUSTOMER_INFO';

const initialState = {
  customerInfo: null
}

const customerReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_CUSTOMER_INFO: 
      return { ...state, customerInfo: action.customer }
    default:
      return state;
  }
};

export const setCustomerInfo = customer => ({ type: SET_CUSTOMER_INFO, customer });

export const requestCustomerInfo = (customerId) => async(dispatch) => {
  const { data } = await customersAPI.getCustomerInfo(customerId);
  dispatch(setCustomerInfo(data));
};

export default customerReducer;