import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SidebarState } from '../Sidebar.type';
import { UserEntity } from '../../../domains';
import { UserAgentInstance } from '../../../http';
import { mapAllUsers } from '../helpers';

const initialState: SidebarState = {
  status: 'loading',
  error: '',
  users: null,
};

export const getAllChats = createAsyncThunk(
  'sidebar/getAllChats',
  async (_, { rejectWithValue }) => {
    try {
      const response = await UserAgentInstance.getAllUser();
      return mapAllUsers(response);
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
      throw new Error('Ошибка');
    }
  },
);

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {},
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

export default sidebarSlice.reducer;
