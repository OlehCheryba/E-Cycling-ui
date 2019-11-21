import { cartAPI } from "../../api/api";

const SET_CART_ITEMS = 'SET_CART_ITEMS';

const initialState = {
  items: {}
}

const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_CART_ITEMS: 
      return { ...state, items: action.items }
    default:
      return state;
  }
};

export const setCartItems = items => ({ type: SET_CART_ITEMS, items });

export const addToCart = (itemId) => (dispatch) => {
  cartAPI.addItem(itemId);
  dispatch(requestCartItems());
};
export const requestCartItems = () => async(dispatch) => {
  const items = cartAPI.getItems();
  dispatch(setCartItems(items));
};

export default cartReducer;