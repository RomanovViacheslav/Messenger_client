import React, { useEffect, useState, memo } from 'react';
import { Box, Typography } from '@mui/material';
import { Loader, TextField } from '../../components';
import { StyledBox, StyledButton, StyledLink, StyledList } from './Sidebar.styled';
import { ArrowIcon } from '../../ui';
import { useAppDispatch, useAppSelector } from '../../helpers';
import { ChatListItem } from './components';
import { tokenActions } from '../../shared';
import { theme } from '../../theme';
import { ChatMessageAgentInstance } from '../../network';
import { getAllChats, processLastMessage, resetSidebar } from './slice';

export const Sidebar = memo(() => {
  const dispatch = useAppDispatch();
  const { users, isLastMessage, lastMessages, unreadMessages } = useAppSelector(
    (state) => state.sidebar,
  );
  const message = useAppSelector((state) => state.lastMessage.message);
  const isConnected = useAppSelector((state) => state.socket.connected);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    dispatch(getAllChats());
  }, []);

  useEffect(() => {
    if (message) {
      dispatch(processLastMessage(message));
    }
  }, [message]);

  useEffect(() => {
    ChatMessageAgentInstance.getLastMessages();
    ChatMessageAgentInstance.on('lastMessage', (messages) => {
      dispatch(processLastMessage(messages));
    });
    return () => {
      dispatch(resetSidebar());
    };
  }, [isConnected]);

  return (
    <StyledBox>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <StyledButton
          onClick={() => {
            dispatch(tokenActions.logout());
          }}
        >
          Выход
        </StyledButton>
        <StyledLink to="#">
          <Typography variant="body1" color={theme.palette.text.secondary}>
            Profile
          </Typography>
          <ArrowIcon />
        </StyledLink>
      </Box>
      <TextField
        type="text"
        search
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {!isLastMessage ? (
        <Loader />
      ) : (
        <StyledList>
          {users
            ?.filter((user) => user.login.includes(searchText))
            .map((user) => {
              const chat = lastMessages[Number(user.id)];

              return (
                <ChatListItem
                  key={user.id}
                  userId={user.id}
                  login={user.login}
                  lastMessage={chat?.content}
                  date={chat?.date}
                  unreadMessages={unreadMessages[Number(user.id)]}
                />
              );
            })}
        </StyledList>
      )}
    </StyledBox>
  );
});
