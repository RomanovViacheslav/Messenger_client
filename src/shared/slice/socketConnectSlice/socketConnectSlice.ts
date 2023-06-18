import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatMessageAgentInstance } from '../../../network';
import { USER_LOCALSTORAGE_KEY } from '../../../constants';

interface SocketState {
  connected: boolean;
}

const initialState: SocketState = {
  connected: false,
};

const socketConnectSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    connect(state) {
      ChatMessageAgentInstance.connect(localStorage.getItem(USER_LOCALSTORAGE_KEY) as string);
      state.connected = true;
    },
    disconnect(state) {
      ChatMessageAgentInstance.disconnect();
      state.connected = false;
    },
  },
});

export const { connect, disconnect } = socketConnectSlice.actions;
export default socketConnectSlice.reducer;
