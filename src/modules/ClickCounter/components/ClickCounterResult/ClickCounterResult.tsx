import React from 'react';
import { Alert } from '@mui/material';
import { ClickCounterResultProps } from './ClickCounterResult.types';

export const ClickCounterResult = ({ error, data }: ClickCounterResultProps) =>
  !error ? (
    <Alert severity="warning">{`По версии сервера: ${data} раз`}</Alert>
  ) : (
    <Alert severity="error">{error}</Alert>
  );
