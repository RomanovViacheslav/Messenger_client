import React, { memo } from 'react';
import { IconButton } from '@mui/material';
import { StyledBox, StyledInput } from './FooterChatView.styled';
import { SendMessageIcon } from '../../../../ui';

export const FooterChatView = memo(() => (
  <StyledBox>
    <StyledInput placeholder="Message..." fullWidth multiline />
    <IconButton>
      <SendMessageIcon />
    </IconButton>
  </StyledBox>
));
