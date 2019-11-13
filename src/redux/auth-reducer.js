import { authAPI } from "../api/api";

const SET_USER_DATA = ' SET_USER_DATA';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
      case SET_USER_DATA:
          return {
              ...state,
              ...action.payload
          }
      default:
          return state;
  }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA, 
  payload: {userId, email, login, isAuth}
});

export const getAuthUserData = () => async dispatch => {
  let {_id, email, login} = await authAPI.me();
  if (_id) dispatch(setAuthUserData(_id, email, login, true));
}
export const login = (email, password) => dispatch => {
  authAPI.login(email, password)
    .then(() => {
      dispatch(getAuthUserData());
    });
}
export const logout = () => dispatch => {
  authAPI.logout()
    .then(() => {
      dispatch(setAuthUserData(null, null, null, false));
    });
}

export default authReducer;