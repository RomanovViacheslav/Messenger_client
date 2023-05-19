import React from 'react';
import { Outlet } from 'react-router-dom';
import { StyledBox } from './AuthLayout.styled';

export const AuthLayout = () => (
  <StyledBox margin="2rem auto 0 auto" mb="16px" component="main">
    <Outlet />
  </StyledBox>
);
