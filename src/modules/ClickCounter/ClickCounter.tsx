import React from 'react';
import { Alert, Box } from '@mui/material';
import { Button, Loader } from '../../components';
import { useClickCounter } from './hooks';
import { ClickCounterResult } from './components';

export const ClickCounter = () => {
  const { data, count, error, isLoading, handleClick } = useClickCounter();

  return (
    <Box display="flex" justifyContent="center" flexDirection="column" gap="16px">
      <Button disabled={isLoading} buttonText="КЛИКНУТЬ" onClick={handleClick} />
      <Alert severity="info">{`Кликнули ${count} раз`}</Alert>
      {isLoading ? <Loader /> : <ClickCounterResult error={error} data={data} />}
    </Box>
  );
};
