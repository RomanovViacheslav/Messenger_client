import React from 'react';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { StyledBox } from './ChatView.styled';
import { FooterChatView, HeaderChatView } from './components';
import { useAppSelector } from '../../helpers';

export const ChatView = () => {
  const { id } = useParams();
  const { users } = useAppSelector((state) => state.sidebar);
  const filteredUser = users?.filter((user) => user.id === id)[0];

  return (
    <StyledBox bgcolor="light">
      {id && filteredUser && <HeaderChatView userId={filteredUser.id} login={filteredUser.login} />}
      {!id && (
        <Typography
          variant="body1"
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          Выберите чат чтобы отправить сообщение
        </Typography>
      )}
      {id && <FooterChatView />}
    </StyledBox>
  );
};
