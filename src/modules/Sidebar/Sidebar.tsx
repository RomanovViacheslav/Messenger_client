import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import { Button, Loader, TextField } from '../../components';
import { StyledBox, StyledLink, StyledList } from './Sidebar.styled';
import { ArrowIcon } from '../../ui';
import { useAppDispatch, useAppSelector } from '../../helpers';
import { ChatListItem } from './components';
import { tokenActions } from '../../shared';
import { theme } from '../../theme';
import { ChatMessageAgentInstance } from '../../network';
import { getAllChats, processLastMessage } from './slice';

export const Sidebar = () => {
  const dispatch = useAppDispatch();
  const { users, status, isLastMessage } = useAppSelector((state) => state.sidebar);
  const isConnected = useAppSelector((state) => state.socket.connected);

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
      <TextField type="text" search placeholder="Search" />
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
          {users?.map((user) => (
            <ChatListItem key={user.id} userId={user.id} login={user.login} />
          ))}
        </StyledList>
      )}
    </StyledBox>
  );
};
