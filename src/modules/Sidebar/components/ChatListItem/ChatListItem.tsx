import { Box, Typography } from '@mui/material';
import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { UserAvatar } from '../../../../components';
import { generateColor, parseServerResponse, useAppSelector } from '../../../../helpers';
import { StyledLink, StyledListItem } from './ChatListItem.styled';
import { ChatListItemProps } from './ChatListItem.type';
import { theme } from '../../../../theme';
import { PATHS } from '../../../../constants';
import { getDisplayDate, truncateText } from '../../helpers';
import { MessageIndicator } from '../MessageIndicator';

export const ChatListItem = memo(({ userId, login, img, lastMessage, date }: ChatListItemProps) => {
  const { id } = useParams();
  const colorUser = generateColor(login);
  const chatLink = `${PATHS.MAIN}${userId}`;

  // const lastMessage = useAppSelector((state) => state.sidebar.lastMessages[Number(userId)]);

  const displayText = lastMessage ? truncateText(lastMessage, 40) : 'напишите сообщение';
  const displayDate = getDisplayDate(date);

  return (
    <StyledListItem active={String(id === userId)}>
      <StyledLink to={chatLink} active={String(id === userId)}>
        <UserAvatar src={img} color={colorUser} login={login} />
        <Box marginLeft="10px" display="flex" justifyContent="space-between" width="100%">
          <Box display="flex" flexDirection="column">
            <Typography variant="body1" color={theme.palette.text.primary}>
              {login}
            </Typography>
            <Typography
              variant="body2"
              color={id !== userId ? theme.palette.text.secondary : theme.palette.text.primary}
              marginTop={4}
            >
              {displayText}
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="end"
          >
            <Typography
              color={id !== userId ? theme.palette.text.secondary : theme.palette.text.primary}
              variant="caption"
            >
              {displayDate}
            </Typography>
            <MessageIndicator counter="1" />
          </Box>
        </Box>
      </StyledLink>
    </StyledListItem>
  );
});
