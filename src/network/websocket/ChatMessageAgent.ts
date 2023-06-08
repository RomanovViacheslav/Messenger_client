import { ChatMessageRequest, ChatMessageResponseSuccess } from '../model';
import { WebSocketAgent } from './WebSocketAgent';

class ChatMessageAgent extends WebSocketAgent {
  public createMessage(message: ChatMessageRequest): Promise<ChatMessageResponseSuccess> {
    return new Promise((resolve, reject) => {
      this.emit('createMessage', message);
      this.on('messageCreated', (result) => {
        resolve(result);
      });
      this.on('error', (error) => {
        reject(error);
      });
    });
  }

  public getMessagesBySenderId(senderId: number): Promise<ChatMessageResponseSuccess[]> {
    return new Promise((resolve, reject) => {
      this.emit('getMessagesBySenderId', senderId);
      this.on('messages', (messages) => {
        resolve(messages);
      });
      this.on('error', (error) => {
        reject(error);
      });
    });
  }

  public getMessagesByReceiverId(receiverId: number): Promise<ChatMessageResponseSuccess[]> {
    return new Promise((resolve, reject) => {
      this.emit('getMessagesByReceiverId', receiverId);
      this.on('messages', (messages) => {
        resolve(messages);
      });
      this.on('error', (error) => {
        reject(error);
      });
    });
  }
}

export const ChatMessageAgentInstance = new ChatMessageAgent();
