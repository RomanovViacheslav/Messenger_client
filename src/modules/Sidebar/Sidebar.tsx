import React from 'react';
import { Typography } from '@mui/material';
import { Button, TextField } from '../../components';
import { StyledBox, StyledLink, StyledList } from './Sidebar.styled';
import { ArrowIcon } from '../../ui';
import { useAppDispatch } from '../../helpers';
import { tokenActions } from '../../shared';
import { ChatListItem } from './components';

export const Sidebar = () => {
  const dispatch = useAppDispatch();
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
        <ChatListItem
          id="1"
          img="https://cdnn1.inosmi.ru/img/24985/10/249851004_0:196:2030:1211_1920x0_80_0_0_78318b59d4ce0cde91f76a1b092765e7.jpg"
          login="Valera"
        />
        <ChatListItem id="2" login="Sirius" />
        <ChatListItem id="3" login="Печенег" />
      </StyledList>
    </StyledBox>
  );
};
