import React, { FormEvent, FormEventHandler, memo, useState } from 'react';
import { StyledBox, StyledIconButton, StyledInput } from './FooterChatView.styled';
import { SendMessageIcon } from '../../../../ui';
import { FooterChatViewProps } from './FooterChatView.type';

export const FooterChatView = memo(({ onSendMessage }: FooterChatViewProps) => {
  const [value, setValue] = useState('');
  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (value.trim() !== '') {
      onSendMessage(value);
      setValue('');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && event.ctrlKey) {
      // eslint-disable-next-line prefer-template
      setValue(value + '\n');
    } else if (event.key === 'Enter') {
      event.preventDefault();

      if (value.trim() !== '') {
        onSendMessage(value);
        setValue('');
      }
    }
  };

  return (
    <StyledBox component="form" onSubmit={handleSubmit}>
      <StyledInput
        value={value}
        onChange={handleMessageChange}
        placeholder="Message..."
        onKeyDown={handleKeyDown}
        fullWidth
        multiline
      />
      <StyledIconButton type="submit">
        <SendMessageIcon />
      </StyledIconButton>
    </StyledBox>
  );
});
