import { Box, Typography } from '@mui/material';
import React from 'react';
import { UserAvatar } from '../../../../components';
import { generateColor } from '../../../../helpers';
import { StyledListItem } from './ChatListItem.styled';
import { ChatListItemProps } from './ChatListItem.type';

export const ChatListItem = ({ id, login, img }: ChatListItemProps) => {
  const colorUser = generateColor(login);
  return (
    <StyledListItem>
      <UserAvatar src={img} color={colorUser} login={login} />
      <Box display="flex" flexDirection="column">
        <Typography variant="body1">{login}</Typography>
        <Typography variant="body2" color="secondary" marginTop={4}>
          текст последнего сообщения чата
        </Typography>
      </Box>
    </StyledListItem>
  );
};
