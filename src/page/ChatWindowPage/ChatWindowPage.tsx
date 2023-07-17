import React, { useEffect } from 'react';
import { Box } from '@mui/system';
import { ChatView, Sidebar } from '../../modules';
import { useAppDispatch, useAppSelector } from '../../helpers';
import { addMessage, connect, disconnect } from '../../shared';
import { ChatMessageAgentInstance, ChatMessageResponseSuccess } from '../../network';

const ChatWindowPage = () => {
  const dispatch = useAppDispatch();
  const isConnected = useAppSelector((state) => state.socket.connected);

  useEffect(() => {
    dispatch(connect());
    return () => {
      dispatch(disconnect());
    };
  }, []);

  useEffect(() => {
    const handleMessageCreated = (message: ChatMessageResponseSuccess) => {
      dispatch(addMessage(message));
    };

    ChatMessageAgentInstance.on('messageCreated', handleMessageCreated);

    return () => {
      ChatMessageAgentInstance.off('messageCreated');
    };
  }, [isConnected]);

  return (
    <Box display="flex" justifyContent="space-between">
      <Sidebar />
      <ChatView />
    </Box>
  );
};

export default ChatWindowPage;
