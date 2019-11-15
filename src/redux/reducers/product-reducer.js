import { productsAPI } from "../../api/api.js";

const SET_PRODUCT_INFO = 'SET_PRODUCT_INFO';

const initialState = {
  productInfo: null
}

const productReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_PRODUCT_INFO: 
      return { ...state, productInfo: action.product }
    default:
      return state;
  }
};

export const setProductInfo = product => ({ type: SET_PRODUCT_INFO, product });

export const requestProductInfo = (productId) => async(dispatch) => {
  const product = await productsAPI.getProductInfo(productId);
  dispatch(setProductInfo(product));
};
/*export const orderProduct = (productId, p) => (dispatch) => {
  productsAPI.orderProduct(productId)
}*/

export default productReducer;