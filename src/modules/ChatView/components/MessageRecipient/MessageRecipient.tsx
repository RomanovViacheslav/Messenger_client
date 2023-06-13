import React, { memo } from 'react';
import { Typography } from '@mui/material';
import { StyledBox } from './MessageRecipient.styled';
import { MessageProps } from './MessageRecipient.types';
import { parseServerResponse } from '../../../../helpers';

export const MessageRecipient = memo(({ content, time }: MessageProps) => {
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
