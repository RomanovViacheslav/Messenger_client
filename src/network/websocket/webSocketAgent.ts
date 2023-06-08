import { io, Socket } from 'socket.io-client';

export class WebSocketAgent {
  private socket: Socket | null = null;

  public connect(): void {
    this.socket = io('http://localhost:8000');
  }

  public disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  public on(eventName: string, callback: (...args: any[]) => void): void {
    if (this.socket) {
      this.socket.on(eventName, callback);
    }
  }

  public off(eventName: string): void {
    if (this.socket) {
      this.socket.off(eventName);
    }
  }

  public emit(eventName: string, ...args: any[]): void {
    if (this.socket) {
      this.socket.emit(eventName, ...args);
    }
  }
}
