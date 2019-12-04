import { requestCart } from "./cart-reducer";
import { requestCustomerData } from "./customer-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
const OPEN_DRAWER = 'OPEN_DRAWER';
const CLOSE_DRAWER = 'CLOSE_DRAWER';
const OPEN_CART = 'OPEN_CART';
const CLOSE_CART = 'CLOSE_CART';

const initialState = {
  initialized: false,
  isDrawerOpen: false,
  isCartOpen: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_DRAWER:
      return {
        ...state,
        isDrawerOpen: true
      }
    case CLOSE_DRAWER:
      return {
        ...state,
        isDrawerOpen: false
      }
    case OPEN_CART:
      return {
        ...state,
        isCartOpen: true
      }
    case CLOSE_CART:
      return {
        ...state,
        isCartOpen: false
      }
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }
    default:
      return state;
  }
};

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });
export const openDrawer = () => ({ type: OPEN_DRAWER });
export const closeDrawer = () => ({ type: CLOSE_DRAWER });
export const openCart = () => ({ type: OPEN_CART });
export const closeCart = () => ({ type: CLOSE_CART });

export const initializeApp = () => async (dispatch) => {
  await Promise.all([
    dispatch(requestCustomerData()),
    dispatch(requestCart())
  ]);
  dispatch(initializedSuccess());
}

export default appReducer;