import React from 'react';
import { Box } from '@mui/system';
import { ChatView, Sidebar } from '../../modules';

const ChatWindowPage = () => (
  <Box display="flex" justifyContent="space-between">
    <Sidebar />
    <ChatView />
  </Box>
);

export default ChatWindowPage;
