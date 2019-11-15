import { customersAPI } from "../../api/api.js";

const SET_CUSTOMERS = 'SET_CUSTOMERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING= 'TOGGLE_IS_FETCHING';
const SET_TOTAL_CUSTOMERS_COUNT = 'SET_TOTAL_CUSTOMERS_COUNT';

const initialState = {
  customers: [],
  currentPage: 1,
  pageSize: 3,
  totalCustomersCount: 0,
  isFetching: false
}

const customersReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_CUSTOMERS:
      return {
        ...state,
        customers: action.customers
      }

    case SET_CURRENT_PAGE: 
      return { ...state, currentPage: action.currentPage }

    case SET_TOTAL_CUSTOMERS_COUNT: 
      return { ...state, totalCustomersCount: action.count }

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }

    default:
      return state;
  }
};

export const setCustomers = customers => ({ type: SET_CUSTOMERS, customers });
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage });
export const setTotalCustomersCount = totalCustomersCount => ({type: SET_TOTAL_CUSTOMERS_COUNT, count: totalCustomersCount });
export const toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching });

export const requestCustomers = (pageNumber, pageSize) => dispatch => {
  dispatch(toggleIsFetching(true));
  customersAPI.getCustomers(pageNumber, pageSize).then(data => {
    dispatch(toggleIsFetching(false));
    dispatch(setCustomers(data.customers));
    dispatch(setTotalCustomersCount(data.totalCount));
  });
};

export default customersReducer;