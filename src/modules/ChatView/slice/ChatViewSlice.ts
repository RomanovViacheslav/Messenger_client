import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ChatViewState } from '../ChatView.type';
import { MessageEntity } from '../../../domains';
import { ChatMessageAgentInstance } from '../../../network';
import { mapMessages } from '../helpers';

const initialState: ChatViewState = {
  message: '',
  messagesRecipient: [],
};

// export const createMessage = createAsyncThunk(
//   'chat/createMessage',
//   async (message: ChatMessageEntity, { rejectWithValue }) => {
//     try {
//       const result = await ChatMessageAgentInstance.createMessage(message);
//       return result;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
// );

const chatViewSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
});

export default chatViewSlice.reducer;
