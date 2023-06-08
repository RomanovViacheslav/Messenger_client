import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { StyledBox } from './ChatView.styled';
import { FooterChatView, HeaderChatView } from './components';
import { useAppSelector } from '../../helpers';
import { ChatMessageAgentInstance } from '../../network';

export const ChatView = () => {
  const { id } = useParams();
  const { users } = useAppSelector((state) => state.sidebar);
  const filteredUser = users?.find((user) => user.id === id);

  useEffect(() => {
    ChatMessageAgentInstance.connect();
    return () => {
      ChatMessageAgentInstance.disconnect();
    };
  }, []);

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
