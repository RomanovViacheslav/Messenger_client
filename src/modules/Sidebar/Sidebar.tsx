import React from 'react';
import { Button, Link, TextField } from '../../components';
import { StyledBox, StyledLink } from './Sidebar.styled';
import { ArrowIcon } from '../../ui';
import { useAppDispatch } from '../../helpers';
import { tokenActions } from '../../shared';
import { ChatList } from './components';

export const Sidebar = () => {
  const dispatch = useAppDispatch();
  return (
    <StyledBox>
      <StyledLink to="#">
        <span>Profile</span>
        <ArrowIcon />
      </StyledLink>
      <TextField type="text" search placeholder="Search" />
      <Button
        buttonText="Выход"
        onClick={() => {
          dispatch(tokenActions.logout());
        }}
      />
      <ChatList />
    </StyledBox>
  );
};
