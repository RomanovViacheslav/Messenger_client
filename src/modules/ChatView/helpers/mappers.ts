import { ChatMessageSendEntity, MessageEntity } from '../../../domains';
import { ChatMessageRequest, ChatMessageResponseSuccess } from '../../../network';

export const mapMessages = (data: ChatMessageResponseSuccess[]): MessageEntity[] =>
  data.map((elem) => ({
    id: String(elem.id),
    content: elem.content,
    senderId: String(elem.senderId),
    receiverId: String(elem.receiverId),
    createdAt: elem.createdAt,
  }));

export const mapOneMessageToServer = (data: ChatMessageSendEntity): ChatMessageRequest => ({
  content: data.content,
  receiverId: Number(data.receiverId),
});

export const mapOneMessageToClient = (data: ChatMessageResponseSuccess): MessageEntity => ({
  id: String(data.id),
  content: data.content,
  senderId: String(data.senderId),
  receiverId: String(data.receiverId),
  createdAt: data.createdAt,
});
