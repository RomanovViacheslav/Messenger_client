import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ChatViewState } from '../ChatView.type';
import { MessageEntity } from '../../../domains';
import { ChatMessageResponseSuccess } from '../../../network';
import { mapOneMessageToClient } from '../helpers';

const initialState: ChatViewState = {
  messages: [],
  isLoading: false,
};

const chatViewSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<MessageEntity[]>) => {
      state.messages = action.payload;
    },
    addMessage: (state, action: PayloadAction<ChatMessageResponseSuccess>) => {
        const result = mapOneMessageToClient(action.payload);
        state.messages.push(result);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setMessages, addMessage, setLoading } = chatViewSlice.actions;
export default chatViewSlice.reducer;
