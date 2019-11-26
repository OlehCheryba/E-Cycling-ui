import { customersAPI } from "../../api/api.js";
import { setIsAuth } from './auth-reducer';

const SET_CUSTOMER_DATA = 'SET_CUSTOMER_DATA';

const initialState = {
  id: null,
  role: null,
  login: null,
  email: null
}

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CUSTOMER_DATA: 
      return { 
        ...state, 
        ...action.customerData
      }
    default:
      return state;
  }
};

export const setCustomerData = (customerData) => ({ type: SET_CUSTOMER_DATA, customerData });

export const requestCustomerData = () => async (dispatch) => {
  try {
  const { data } = await customersAPI.getCustomerData();
  dispatch(setCustomerData(data));
  dispatch(setIsAuth(true));
  } catch (e) {
    dispatch(setCustomerData({ role: 'guest' }));
  }
};

export default customerReducer;