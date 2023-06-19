import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { log } from 'console';
import { SidebarState } from '../Sidebar.type';
import { UserEntity } from '../../../domains';
import { mapAllUsers } from '../helpers';
import { ChatMessageResponseSuccess, UserAgentInstance } from '../../../network';
import { isLastMessage, setLastMessage, sortUsers } from './SidebarSlice';

export const getAllChats = createAsyncThunk(
  'sidebar/getAllChats',
  async (_, { rejectWithValue }) => {
    try {
      const response = await UserAgentInstance.getAllUser();
      const users = mapAllUsers(response);

      return users;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
      throw new Error('Ошибка');
    }
  },
);

export const processLastMessage = createAsyncThunk(
  'sidebar/processLastMessage',
  async (
    messages: ChatMessageResponseSuccess[] | ChatMessageResponseSuccess,
    { dispatch, getState },
  ) => {
    const processMessage = (message: ChatMessageResponseSuccess) => {
      dispatch(
        setLastMessage({
          userId: message.senderId,
          lastMessage: message.content,
          date: message.createdAt,
        }),
      );
      dispatch(
        setLastMessage({
          userId: message.receiverId,
          lastMessage: message.content,
          date: message.createdAt,
        }),
      );
    };

    if (Array.isArray(messages)) {
      messages.forEach(processMessage);
      dispatch(isLastMessage());
    } else {
      processMessage(messages);
    }

    dispatch(sortUsers());
  },
);
