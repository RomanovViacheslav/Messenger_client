import { Box, Typography } from '@mui/material';
import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { UserAvatar } from '../../../../components';
import { generateColor } from '../../../../helpers';
import { StyledLink, StyledListItem } from './ChatListItem.styled';
import { ChatListItemProps } from './ChatListItem.type';
import { theme } from '../../../../theme';
import { PATHS } from '../../../../constants';

export const ChatListItem = memo(({ userId, login, img }: ChatListItemProps) => {
  const { id } = useParams();
  const colorUser = generateColor(login);
  const chatLink = `${PATHS.MAIN}${userId}`;
  return (
    <StyledListItem active={String(id === userId)}>
      <StyledLink to={chatLink} active={String(id === userId)}>
        <UserAvatar src={img} color={colorUser} login={login} />
        <Box display="flex" flexDirection="column">
          <Typography variant="body1" color={theme.palette.text.primary}>
            {login}
          </Typography>
          <Typography
            variant="body2"
            color={id !== userId ? theme.palette.text.secondary : theme.palette.text.primary}
            marginTop={4}
          >
            текст последнего сообщения чата
          </Typography>
        </Box>
      </StyledLink>
    </StyledListItem>
  );
});
