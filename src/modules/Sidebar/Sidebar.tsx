import React, { useEffect, useState, memo } from 'react';
import { Typography } from '@mui/material';
import { Button, Loader, TextField } from '../../components';
import { StyledBox, StyledLink, StyledList } from './Sidebar.styled';
import { ArrowIcon } from '../../ui';
import { useAppDispatch, useAppSelector } from '../../helpers';
import { ChatListItem } from './components';
import { tokenActions } from '../../shared';
import { theme } from '../../theme';
import { ChatMessageAgentInstance } from '../../network';
import { getAllChats, processLastMessage, sortUsers } from './slice';

export const Sidebar = memo(() => {
  const dispatch = useAppDispatch();
  const { users, status, isLastMessage, lastMessages, unreadMessages } = useAppSelector(
    (state) => state.sidebar,
  );
  const isConnected = useAppSelector((state) => state.socket.connected);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    dispatch(getAllChats());
  }, []);

  useEffect(() => {
    ChatMessageAgentInstance.on('messageCreated', (message) => {
      dispatch(processLastMessage(message));
    });
    ChatMessageAgentInstance.getLastMessages();
    ChatMessageAgentInstance.on('lastMessage', (messages) => {
      dispatch(processLastMessage(messages));
    });
  }, [isConnected]);

  return (
    <StyledBox>
      <StyledLink to="#">
        <Typography variant="body1" color={theme.palette.text.secondary}>
          Profile
        </Typography>
        <ArrowIcon />
      </StyledLink>
      <TextField
        type="text"
        search
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Button
        buttonText="Выход"
        onClick={() => {
          dispatch(tokenActions.logout());
        }}
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
