import { cartAPI, productsAPI } from "../../api/api";

const SET_CART_DATA = 'SET_CART_DATA';

const initialState = {
  cartProducts: [],
  totalAmount: 0,
  totalPrice: 0
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_DATA: 
      return { 
        ...state, 
        cartProducts: action.cart.cartProducts,
        totalAmount: action.cart.totalAmount,
        totalPrice: action.cart.totalPrice
      }
    default:
      return state;
  }
};

export const setCartData = cart => ({ type: SET_CART_DATA, cart });

export const requestCart = () => async (dispatch) => {
  const { data } = await cartAPI.getCartProducts();
  if (!data) {
    return;
  }

  const cartProducts = await Promise.all(
    data.products.map(async (product) => {
      const { data } = await productsAPI.getProductInfo(product.id);
      if (data) {
        product.info = data.product;
      } else {
        product.info = { name: 'Deleted product', price: 0 }
      }
      return product;
    })
  );

  const totalAmount = cartProducts.reduce(
    (sum, { amount }) => sum + amount, 0);
  const totalPrice = cartProducts.reduce(
    (sum, { info: { price }, amount }) => sum + price * amount, 0);

  dispatch(setCartData({ cartProducts, totalAmount, totalPrice }))
};
export const deleteCartProducts = () => (dispatch) => {
  cartAPI.deleteCartProducts();
  dispatch(setCartData({ products: [], totalAmount: 0, totalPrice: 0 }));
};
export const putCartProduct = (product) => async (dispatch) => {
  await cartAPI.putCartProduct(product);
  dispatch(requestCart());
};
export const deleteCartProduct = (productId) => async (dispatch) => {
  await cartAPI.deleteCartProduct(productId);
  dispatch(requestCart());
}


export default cartReducer;