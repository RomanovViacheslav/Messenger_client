import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { StyledBox, StyledBoxMessage } from './ChatView.styled';
import { FooterChatView, HeaderChatView, MessageRecipient, MessageSender } from './components';
import { useAppDispatch, useAppSelector } from '../../helpers';
import { ChatMessageAgentInstance } from '../../network';
import { USER_LOCALSTORAGE_KEY } from '../../constants';

export const ChatView = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { users } = useAppSelector((state) => state.sidebar);
  const { messagesRecipient } = useAppSelector((state) => state.chat);
  const filteredUser = users?.find((user) => user.id === id);

  useEffect(() => {
    ChatMessageAgentInstance.connect(localStorage.getItem(USER_LOCALSTORAGE_KEY) as string);
    ChatMessageAgentInstance.on('messageCreated', (message) => {
      console.log(message);
    });
    return () => {
      ChatMessageAgentInstance.disconnect();
    };
  }, []);

  useEffect(() => {
    ChatMessageAgentInstance.getMessagesByUsers(Number(id), (message) => {
      console.log(message);
    });
  }, [id]);

  return (
    <StyledBox bgcolor="light">
      {id && filteredUser && <HeaderChatView userId={filteredUser.id} login={filteredUser.login} />}
      {!id ? (
        <Typography
          variant="body1"
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          Выберите чат чтобы отправить сообщение
        </Typography>
      ) : (
        <StyledBoxMessage>
          <MessageRecipient
            time="12:00"
            content="Метод arr.concat создаёт новый массив, в который копирует данные из других массивов и дополнительные значения."
          />
          <MessageSender
            time="12:00"
            content="Метод arr.concat создаёт новый массив, в который копирует данные из других массивов и дополнительные значения."
          />
        </StyledBoxMessage>
      )}
      {id && <FooterChatView />}
    </StyledBox>
  );
};
