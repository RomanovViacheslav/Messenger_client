import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatMessageResponseSuccess } from '../../../network';

interface lastMessageState {
  message: ChatMessageResponseSuccess | null;
}

const initialState: lastMessageState = {
  message: null,
};

const lastMessageSlice = createSlice({
  name: 'lastMessage',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<ChatMessageResponseSuccess>) => {
      state.message = action.payload;
    },
  },
});

export const { addMessage } = lastMessageSlice.actions;
export default lastMessageSlice.reducer;
