import React, { memo } from 'react';
import { Typography } from '@mui/material';
import { StyledBox } from './MessageRecipient.styled';
import { MessageProps } from './MessageRecipient.types';

export const MessageRecipient = memo(({ content, time }: MessageProps) => (
  <StyledBox>
    <Typography variant="body2">{content}</Typography>
    <Typography variant="caption" color="secondary">
      {time}
    </Typography>
  </StyledBox>
));
