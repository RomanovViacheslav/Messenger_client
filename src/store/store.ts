import { configureStore } from '@reduxjs/toolkit';
import { registrationSlice, loginSlice, sidebarSlice, chatViewSlice } from '../modules';
import { tokenSlice, socketConnectSlice } from '../shared';

export const store = configureStore({
  reducer: {
    registration: registrationSlice,
    login: loginSlice,
    token: tokenSlice,
    sidebar: sidebarSlice,
    chat: chatViewSlice,
    socket: socketConnectSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
