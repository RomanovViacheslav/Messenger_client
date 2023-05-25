import React from 'react';
import { Typography } from '@mui/material';
import { AuthForm } from '../../modules';

export const AuthPage = () => (
  <>
    <Typography variant="h2" component="h2" mb="20px" textAlign="center">
      Sign in
    </Typography>
    <AuthForm />
  </>
);
