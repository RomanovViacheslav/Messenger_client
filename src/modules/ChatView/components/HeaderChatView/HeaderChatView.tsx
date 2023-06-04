import React, { memo } from 'react';
import { Typography } from '@mui/material';
import { StyledBox } from './HeaderChatView.styled';
import { UserAvatar } from '../../../../components';
import { HeaderChatViewProps } from './HeaderChatView.type';
import { generateColor } from '../../../../helpers';

export const HeaderChatView = memo(({ userId, login }: HeaderChatViewProps) => {
  const colorUser = generateColor(login);
  return (
    <StyledBox>
      <UserAvatar color={colorUser} login={login} />
      <Typography>{login}</Typography>
    </StyledBox>
  );
});
