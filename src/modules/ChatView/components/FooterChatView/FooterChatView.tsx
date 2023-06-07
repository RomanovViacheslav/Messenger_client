import React, { FormEvent, FormEventHandler, memo, useState } from 'react';
import { IconButton } from '@mui/material';
import { StyledBox, StyledInput } from './FooterChatView.styled';
import { SendMessageIcon } from '../../../../ui';

export const FooterChatView = memo(() => {
  const [value, setValue] = useState('');
  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(value);
  };

  return (
    <StyledBox component="form" onSubmit={onSubmit}>
      <StyledInput
        value={value}
        onChange={handleMessageChange}
        placeholder="Message..."
        fullWidth
        multiline
      />
      <IconButton type="submit">
        <SendMessageIcon />
      </IconButton>
    </StyledBox>
  );
});
