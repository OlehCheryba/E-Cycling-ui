import { productsAPI } from "../../api/api.js";

const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING= 'TOGGLE_IS_FETCHING';
const SET_TOTAL_PRODUCTS_COUNT = 'SET_TOTAL_PRODUCTS_COUNT';
const TOGGLE_IN_CART = 'TOGGLE_IN_CART';

const initialState = {
  products: [],
  currentPage: 1,
  pageSize: 6,
  totalProductsCount: 0,
  isFetching: false
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IN_CART: 
      return {
        ...state, 
        products: state.products.map(product => {
          if (product.id === action.productToChangeId) {
            product.id = !product.id
          }

          return product
        })
      }
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.products
      }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case SET_TOTAL_PRODUCTS_COUNT: {
      return { ...state, totalProductsCount: action.count }
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }
    default:
      return state;
  }
};



export const addToCartSuccess = (productToChangeId) => ({ 
  type: TOGGLE_IN_CART,
  productToChangeId 
});
export const deleteFromCartSuccess = (productToChangeId) => ({ 
  type: TOGGLE_IN_CART, 
  productToChangeId 
});
export const setProducts = products => ({ type: SET_PRODUCTS, products });
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage });
export const setTotalProductsCount = totalProductsCount => ({type: SET_TOTAL_PRODUCTS_COUNT, count: totalProductsCount });
export const toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching });

export const requestProducts = (pageNumber, pageSize) => async(dispatch, getState) => {
  dispatch(toggleIsFetching(true));
  const { data: { products, totalCount } } = await productsAPI.getProducts(pageNumber, pageSize);
  const { cart: { cartProducts } } = getState();

  const mappedProducts = products.map((product) => {
    product.inCart = Boolean(
      cartProducts.find(
        (cartProduct) => cartProduct.id === product.id
      )
    );

    return product;
  });

  dispatch(toggleIsFetching(false));
  dispatch(setProducts(mappedProducts));
  dispatch(setTotalProductsCount(totalCount));
};

export default productsReducer;