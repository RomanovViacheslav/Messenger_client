import React from 'react';
import { Box } from '@mui/system';
import { ChatView, Sidebar } from '../../modules';

export const ChatWindowPage = () => (
  <Box display="flex" justifyContent="space-between">
    <Sidebar />
    <ChatView />
  </Box>
);
