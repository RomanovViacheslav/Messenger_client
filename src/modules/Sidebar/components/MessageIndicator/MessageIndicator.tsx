import React from 'react';
import { Typography } from '@mui/material';
import { MessageIndicatorProps } from './MessageIndicator.type';
import { StyledBox } from './MessageIndicator.styled';

export const MessageIndicator = ({ counter }: MessageIndicatorProps) => (
  <StyledBox>
    <Typography variant="body2">{counter}</Typography>
  </StyledBox>
);
