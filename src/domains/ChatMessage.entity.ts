export interface ChatMessageSendEntity {
  content: string;
  senderId: string;
  receiverId: string;
}

export interface MessageEntity {
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  createdAt: Date;
}
