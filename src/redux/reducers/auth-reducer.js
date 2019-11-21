import { authAPI } from "../../api/api";

const SET_USER_DATA = ' SET_USER_DATA';

const initialState = {
  userId: null,
  email: null,
  login: null,
  role: 'guest',
  isAuth: false
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

export const setAuthUserData = (userId, email, login, role, isAuth) => ({
  type: SET_USER_DATA, 
  payload: {userId, email, login, role, isAuth}
});

export const requestAuthUserData = () => async dispatch => {
  try {
    const { data: { id, email, login, role } } = await authAPI.me();
    dispatch(setAuthUserData(id, email, login, role, true));
  } catch(e) {}
}
export const login = (email, password) => async (dispatch) => {
  await authAPI.login(email, password);
  dispatch(requestAuthUserData());
}
export const logout = () => async (dispatch) => {
  try {
    await authAPI.logout();
  } catch (e) {}
  dispatch(setAuthUserData(null, null, null, null, false));
}

export default authReducer;