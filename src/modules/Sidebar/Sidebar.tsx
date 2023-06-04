import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import { Button, Loader, TextField } from '../../components';
import { StyledBox, StyledLink, StyledList } from './Sidebar.styled';
import { ArrowIcon } from '../../ui';
import { useAppDispatch, useAppSelector } from '../../helpers';
import { ChatListItem } from './components';
import { getAllChats } from './slice/SidebarSlice';
import { tokenActions } from '../../shared';
import { theme } from '../../theme';

export const Sidebar = () => {
  const dispatch = useAppDispatch();
  const { users, status } = useAppSelector((state) => state.sidebar);

  useEffect(() => {
    dispatch(getAllChats());
  }, []);

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
      {status === 'loading' ? (
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
