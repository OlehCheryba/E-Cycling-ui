const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const initialState = {
  products: [],
  currentPage: 1
}

const productsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_PRODUCTS: {
      return {
        ...state,
        products: action.products
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.pageNumber
      }
    }
    default:
      return state;
  }
};

export const setProducts = products => ({
  type: SET_PRODUCTS, products
});
export const setCurrentPage = pageNumber => ({
  type: SET_CURRENT_PAGE, pageNumber
});

export default productsReducer;