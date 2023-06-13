import React, { FormEvent, FormEventHandler, memo, useState } from 'react';
import { IconButton } from '@mui/material';
import { StyledBox, StyledIconButton, StyledInput } from './FooterChatView.styled';
import { SendMessageIcon } from '../../../../ui';
import { ChatMessageAgentInstance } from '../../../../network';
import { FooterChatViewProps } from './FooterChatView.type';

export const FooterChatView = memo(({ onSendMessage }: FooterChatViewProps) => {
  const [value, setValue] = useState('');
  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSendMessage(value);
    setValue('');
  };

  return (
    <StyledBox component="form" onSubmit={handleSubmit}>
      <StyledInput
        value={value}
        onChange={handleMessageChange}
        placeholder="Message..."
        fullWidth
        multiline
      />
      <StyledIconButton type="submit">
        <SendMessageIcon />
      </StyledIconButton>
    </StyledBox>
  );
});
