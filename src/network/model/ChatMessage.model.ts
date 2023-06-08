export interface ChatMessageResponseSuccess {
  id: number;
  content: string;
  senderId: number;
  receiverId: number;
  createdAt: Date;
}

export interface ChatMessageRequest {
  content: string;
  senderId: number;
  receiverId: number;
}
