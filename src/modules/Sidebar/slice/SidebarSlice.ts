import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SidebarState } from '../Sidebar.type';

import { getAllChats } from './SidebarThunk';

const initialState: SidebarState = {
  status: 'loading',
  error: '',
  users: [],
  lastMessages: {},
  isLastMessage: false,
  unreadMessages: {},
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setLastMessage: (state, action) => {
      const { userId, lastMessage, date } = action.payload;
      state.lastMessages = {
        ...state.lastMessages,
        [userId]: {
          content: lastMessage,
          date,
        },
      };
    },
    setUnreadMessage: (state, action) => {
      const { userId } = action.payload;

      if (state.unreadMessages[userId]) {
        state.unreadMessages[userId] += 1;
      } else {
        state.unreadMessages[userId] = 1;
      }
    },

    isLastMessage: (state) => {
      state.isLastMessage = true;
    },
    resetUnreadMessages: (state, action) => {
      const userId = action.payload;
      state.unreadMessages[userId] = 0;
    },
    sortUsers: (state) => {
      const sortedUsers = [...state.users].sort((a, b) => {
        const aLastMessage = state.lastMessages[Number(a.id)];
        const bLastMessage = state.lastMessages[Number(b.id)];

        if (aLastMessage && bLastMessage) {
          return new Date(bLastMessage.date).getTime() - new Date(aLastMessage.date).getTime();
        }
        if (aLastMessage) {
          return -1;
        }
        if (bLastMessage) {
          return 1;
        }
        return 0;
      });

      state.users = sortedUsers;
    },
    resetSidebar: (state) => initialState,
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

export const {
  setLastMessage,
  isLastMessage,
  sortUsers,
  resetUnreadMessages,
  setUnreadMessage,
  resetSidebar,
} = sidebarSlice.actions;
export default sidebarSlice.reducer;
