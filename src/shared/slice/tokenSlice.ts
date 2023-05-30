import { createSlice } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from '../../constants';

const initialState = {
  isAuth: false,
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setAuth: (state) => {
      state.isAuth = true;
    },
    initAuth: (state) => {
      if (localStorage.getItem(USER_LOCALSTORAGE_KEY)) {
        state.isAuth = true;
      }
    },
    logout: (state) => {
      state.isAuth = false;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
});

export const { actions: tokenActions } = tokenSlice;
export default tokenSlice.reducer;
