import {requestAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
const TOGGLE_IS_DRAWER_OPEN = 'TOGGLE_IS_DRAWER_OPEN';
const TOGGLE_IS_CART_OPEN = 'TOGGLE_IS_CART_OPEN';

const initialState = {
  initialized: false,
  isDrawerOpen: false,
  isCartOpen: false
}

const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_IS_DRAWER_OPEN:
      return {
        ...state,
        isDrawerOpen: action.isDrawerOpen
      }
    case TOGGLE_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: action.isCartOpen
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
export const toggleIsDrawerOpen = (isDrawerOpen) => ({ type: TOGGLE_IS_DRAWER_OPEN, isDrawerOpen });
export const toggleIsCartOpen = (isCartOpen) => ({ type: TOGGLE_IS_CART_OPEN, isCartOpen });

export const initializeApp = () => (dispatch) => {
  dispatch(requestAuthUserData())
    .then(() => {
      dispatch(initializedSuccess());
    });
}

export default appReducer;