import React from 'react';
import { Typography } from '@mui/material';
import { RegistrationForm } from '../../modules';

export const RegPage = () => (
  <>
    <Typography variant="h2" component="h2" mb="20px" textAlign="center">
      Sign up
    </Typography>
    <RegistrationForm />
  </>
);
