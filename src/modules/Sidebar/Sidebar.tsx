import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import { Button, TextField } from '../../components';
import { StyledBox, StyledLink, StyledList } from './Sidebar.styled';
import { ArrowIcon } from '../../ui';
import { useAppDispatch, useAppSelector } from '../../helpers';
import { ChatListItem } from './components';
import { getAllChats } from './slice/SidebarSlice';
import { tokenActions } from '../../shared';

export const Sidebar = () => {
  const dispatch = useAppDispatch();
  const { users, status } = useAppSelector((state) => state.sidebar);

  useEffect(() => {
    dispatch(getAllChats());
    console.log(status);
  }, []);

  console.log(users);
  return (
    <StyledBox>
      <StyledLink to="#">
        <Typography variant="body1" color="secondary">
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
      <StyledList>
        {users?.map((user) => (
          <ChatListItem key={user.id} id={user.id} login={user.login} />
        ))}
      </StyledList>
    </StyledBox>
  );
};
