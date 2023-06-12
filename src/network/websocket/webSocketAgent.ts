import { io, Socket } from 'socket.io-client';

export class WebSocketAgent {
  private _socket: Socket | null = null;

  private _token: string | null = null;

  public connect(token: string): void {
    this._token = token;
    this._socket = io('http://localhost:8000', {
      extraHeaders: {
        Authorization: `Bearer ${this._token}`,
      },
    });
  }

  public disconnect(): void {
    if (this._socket) {
      this._socket.disconnect();
      this._socket = null;
    }
  }

  public on(eventName: string, callback: (...args: any[]) => void): void {
    if (this._socket) {
      this._socket.on(eventName, callback);
    }
  }

  public off(eventName: string): void {
    if (this._socket) {
      this._socket.off(eventName);
    }
  }

  public emit(eventName: string, ...args: any[]): void {
    if (this._socket) {
      this._socket.emit(eventName, ...args);
    }
  }
}
