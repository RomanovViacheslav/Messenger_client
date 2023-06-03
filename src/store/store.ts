import { configureStore } from '@reduxjs/toolkit';
import { registrationSlice, loginSlice, sidebarSlice } from '../modules';
import { tokenSlice } from '../shared';

export const store = configureStore({
  reducer: {
    registration: registrationSlice,
    login: loginSlice,
    token: tokenSlice,
    sidebar: sidebarSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
