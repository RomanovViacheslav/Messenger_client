import { createSlice } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from '../../../constants';
import { UserAgentInstance } from '../../../network';

const initialState = {
  isAuth: false,
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setAuth: (state) => {
      state.isAuth = true;
      UserAgentInstance.setToken(localStorage.getItem(USER_LOCALSTORAGE_KEY));
    },
    initAuth: (state) => {
      if (localStorage.getItem(USER_LOCALSTORAGE_KEY)) {
        state.isAuth = true;
        UserAgentInstance.setToken(localStorage.getItem(USER_LOCALSTORAGE_KEY));
      }
    },
    logout: (state) => {
      state.isAuth = false;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
      UserAgentInstance.setToken(null);
    },
  },
});

export const { actions: tokenActions } = tokenSlice;
export default tokenSlice.reducer;
