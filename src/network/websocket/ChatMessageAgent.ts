import { ChatMessageRequest, ChatMessageResponseSuccess } from '../model';
import { WebSocketAgent } from './WebSocketAgent';

class ChatMessageAgent extends WebSocketAgent {
  public connect(token: string): void {
    super.connect(token);
  }

  public createMessage(message: ChatMessageRequest): void {
    this.emit('createMessage', message);
  }

  public getLastMessages(): void {
    this.emit('getLastMessages');
  }

  public getMessagesByUsers(
    receiverId: number,
    callback?: (messages: ChatMessageResponseSuccess[]) => void,
  ): void {
    this.emit('getMessagesByUsers', receiverId);
    if (callback) {
      this.on('messages', callback);
    }
  }
}

export const ChatMessageAgentInstance = new ChatMessageAgent();
