import { createAsyncThunk } from '@reduxjs/toolkit';

import { ChatMessageSendEntity, MessageEntity } from '../../../domains';
import { ChatMessageAgentInstance } from '../../../network';
import { addMessage, setLoading, setMessages } from './ChatViewSlice';
import { mapMessages, mapOneMessageToClient, mapOneMessageToServer } from '../helpers';

export const getMessagesByUsers = createAsyncThunk(
  'chat/getMessagesByUsers',
  async (receiverId: number, { dispatch }) => {
    dispatch(setLoading(true));
    return new Promise<MessageEntity[]>((resolve, reject) => {
      try {
        ChatMessageAgentInstance.getMessagesByUsers(receiverId, (messages) => {
          const result = mapMessages(messages);

          dispatch(setMessages(result));
          dispatch(setLoading(false));
          resolve(result);
        });
      } catch (error) {
        reject(error);
      }
    });
  },
);

export const sendMessage = createAsyncThunk(
  'chat/sendMessage',
  async (message: ChatMessageSendEntity) => {
    try {
      const newMessage = mapOneMessageToServer(message);
      ChatMessageAgentInstance.createMessage(newMessage);
    } catch (error) {
      throw new Error('Failed to send message');
    }
  },
);
