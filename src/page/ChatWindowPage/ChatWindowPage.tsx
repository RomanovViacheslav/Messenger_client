import React, { useEffect } from 'react';
import { Box } from '@mui/system';
import { ChatView, Sidebar } from '../../modules';
import { useAppDispatch, useAppSelector } from '../../helpers';
import { connect, disconnect } from '../../shared';

const ChatWindowPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(connect());
    return () => {
      dispatch(disconnect());
    };
  }, []);

  return (
    <Box display="flex" justifyContent="space-between">
      <Sidebar />
      <ChatView />
    </Box>
  );
};

export default ChatWindowPage;
