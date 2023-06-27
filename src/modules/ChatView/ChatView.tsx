import React, { useEffect, memo, useRef } from 'react';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { StyledBox, StyledBoxMessage } from './ChatView.styled';
import { FooterChatView, HeaderChatView, MessageList } from './components';
import { useAppDispatch, useAppSelector } from '../../helpers';
import { ChatMessageAgentInstance } from '../../network';
import { addMessage, getMessagesByUsers, sendMessage } from './slice';

export const ChatView = memo(() => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { users } = useAppSelector((state) => state.sidebar);
  const { messages, isLoading } = useAppSelector((state) => state.chat);
  const filteredUser = users?.find((user) => user.id === id);
  const messageListRef = useRef<HTMLDivElement>(null);
  const isConnected = useAppSelector((state) => state.socket.connected);

  useEffect(() => {
    ChatMessageAgentInstance.on('messageCreated', (message) => {
      if (message.senderId === Number(id) || message.receiverId === Number(id)) {
        dispatch(addMessage(message));
      }
    });
  }, [isConnected, id]);

  useEffect(() => {
    dispatch(getMessagesByUsers(Number(id)));
  }, [id, isConnected]);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

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
        <Typography variant="body1" display="flex" justifyContent="center" marginTop="25%">
          Выберите чат, чтобы отправить сообщение
        </Typography>
      ) : (
        <StyledBoxMessage ref={messageListRef}>
          {!isLoading && <MessageList messages={messages} filteredUser={filteredUser} />}
        </StyledBoxMessage>
      )}
      {id && <FooterChatView onSendMessage={handleSendMessage} />}
    </StyledBox>
  );
});
