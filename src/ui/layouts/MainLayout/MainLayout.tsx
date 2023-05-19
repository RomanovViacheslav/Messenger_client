import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => (
  <Box maxWidth="300px" margin="2rem auto 0 auto" mb="16px" component="div">
    <Outlet />
  </Box>
);
