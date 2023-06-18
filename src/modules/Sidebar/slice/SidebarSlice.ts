import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SidebarState } from '../Sidebar.type';

import { getAllChats } from './SidebarThunk';

const initialState: SidebarState = {
  status: 'loading',
  error: '',
  users: null,
  lastMessages: {},
  isLastMessage: false,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setLastMessage: (state, action) => {
      const { userId, lastMessage } = action.payload;
      state.lastMessages[userId] = lastMessage;
    },
    isLastMessage: (state) => {
      state.isLastMessage = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllChats.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getAllChats.fulfilled, (state, action) => {
        state.status = 'success';
        state.users = action.payload;
      })
      .addCase(getAllChats.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message ?? 'Ошибка';
      });
  },
});

export const { setLastMessage, isLastMessage } = sidebarSlice.actions;
export default sidebarSlice.reducer;
