import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { StyledBox, StyledBoxMessage } from './ChatView.styled';
import { FooterChatView, HeaderChatView, MessageRecipient, MessageSender } from './components';
import { useAppDispatch, useAppSelector } from '../../helpers';
import { ChatMessageAgentInstance } from '../../network';
import { USER_LOCALSTORAGE_KEY } from '../../constants';
import { addMessage, getMessagesByUsers, sendMessage } from './slice';
import { mapOneMessageToClient } from './helpers';

export const ChatView = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { users } = useAppSelector((state) => state.sidebar);
  const { messages, isLoading } = useAppSelector((state) => state.chat);
  const filteredUser = users?.find((user) => user.id === id);

  useEffect(() => {
    ChatMessageAgentInstance.connect(localStorage.getItem(USER_LOCALSTORAGE_KEY) as string);
    ChatMessageAgentInstance.on('messageCreated', (message) => {
      dispatch(addMessage(message));
    });
    return () => {
      ChatMessageAgentInstance.disconnect();
    };
  }, []);

  useEffect(() => {
    if (id) {
      dispatch(getMessagesByUsers(Number(id)));
    }
  }, [id]);

  const handleSendMessage = (content: string) => {
    if (id) {
      dispatch(
        sendMessage({
          content,
          receiverId: id,
        }),
      );
    }
  };
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
          Выберите чат, чтобы отправить сообщение
        </Typography>
      ) : (
        <StyledBoxMessage>
          {!isLoading &&
            messages.map((message) => {
              if (message.senderId !== filteredUser?.id) {
                return (
                  <MessageSender
                    key={message.id}
                    content={message.content}
                    time={message.createdAt}
                  />
                );
              }
              return (
                <MessageRecipient
                  key={message.id}
                  content={message.content}
                  time={message.createdAt}
                />
              );
            })}
        </StyledBoxMessage>
      )}
      {id && <FooterChatView onSendMessage={handleSendMessage} />}
    </StyledBox>
  );
};
