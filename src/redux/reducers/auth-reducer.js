import { authAPI } from "../../api/api";
import { requestCart } from "./cart-reducer";
import { setCustomerData, requestCustomerData } from "./customer-reducer";

const SET_IS_AUTH = 'SET_IS_AUTH';

const initialState = {
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_AUTH:
      return {
          ...state,
          isAuth: action.isAuth
      }
    default:
      return state;
  }
}

export const setIsAuth = (isAuth) => ({ type: SET_IS_AUTH, isAuth });

export const register = (login, email, password) => async (dispatch) => {
  await authAPI.register(login, email, password);
  await dispatch(requestCustomerData());
  await dispatch(requestCart());
}
export const login = (email, password) => async (dispatch) => {
  await authAPI.login(email, password);
  await dispatch(requestCustomerData());
  await dispatch(requestCart());
}
export const logout = () => async (dispatch) => {
  try {
    await authAPI.logout();
    dispatch(setIsAuth(false));
    dispatch(setCustomerData({ role: 'guest' }));
    dispatch(requestCart());
  } catch (e) {}
}

export default authReducer;