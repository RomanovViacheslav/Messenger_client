import React, { memo } from 'react';
import { Typography } from '@mui/material';
import { StyledBox } from './MessageSender.styled';
import { MessageProps } from './MessageSender.types';
import { parseServerResponse } from '../../../../helpers';

export const MessageSender = memo(({ content, time }: MessageProps) => {
  const date = parseServerResponse(time);
  return (
    <StyledBox>
      <Typography variant="body2">{content}</Typography>
      <Typography variant="caption" color="secondary">
        {date.time}
      </Typography>
    </StyledBox>
  );
});
