import { configureStore } from '@reduxjs/toolkit';
import { registrationSlice, loginSlice } from '../modules';

export const store = configureStore({
  reducer: {
    registration: registrationSlice,
    login: loginSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
