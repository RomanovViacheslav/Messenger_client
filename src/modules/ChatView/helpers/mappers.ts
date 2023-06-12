import { MessageEntity } from '../../../domains';
import { ChatMessageResponseSuccess } from '../../../network';

export const mapMessages = (data: ChatMessageResponseSuccess[]): MessageEntity[] =>
  data.map((elem) => ({
    id: String(elem.id),
    content: elem.content,
    senderId: String(elem.senderId),
    receiverId: String(elem.receiverId),
    createdAt: elem.createdAt,
  }));
