import React, { memo } from 'react';
import { Typography } from '@mui/material';
import { StyledBox } from './MessageSender.styled';
import { MessageProps } from './MessageSender.types';

export const MessageSender = memo(({ content, time }: MessageProps) => (
  <StyledBox>
    <Typography variant="body2">{content}</Typography>
    <Typography variant="caption" color="secondary">{time}</Typography>
  </StyledBox>
));
