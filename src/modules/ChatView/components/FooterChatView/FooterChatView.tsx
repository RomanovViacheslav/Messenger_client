import React, { FormEvent, FormEventHandler, memo, useState } from 'react';
import { IconButton } from '@mui/material';
import { StyledBox, StyledInput } from './FooterChatView.styled';
import { SendMessageIcon } from '../../../../ui';
import { ChatMessageAgentInstance } from '../../../../network';

export const FooterChatView = memo(() => {
  const [value, setValue] = useState('');
  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    async function name() {
      const jopa = await ChatMessageAgentInstance.createMessage({
        content: value,
        senderId: 4,
        receiverId: 1,
      });
      console.log(jopa);
    }
    name();
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
