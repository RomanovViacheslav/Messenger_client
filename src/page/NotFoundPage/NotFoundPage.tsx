import React from 'react';
import { Box, Typography } from '@mui/material';

const NotFoundPage = () => (
  <Box display="flex" alignItems="center" justifyContent="center">
    <Box textAlign="center">
      <Typography variant="h2" gutterBottom>
        404
      </Typography>
      <Typography variant="h4" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        Уходите...
      </Typography>
    </Box>
  </Box>
);

export default NotFoundPage;
