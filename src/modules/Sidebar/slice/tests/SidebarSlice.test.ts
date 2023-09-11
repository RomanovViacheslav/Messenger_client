import { AnyAction } from '@reduxjs/toolkit';
import { MessageEntity } from '../../../../domains';
import SidebarSlice, {
  resetUnreadMessages,
  setLastMessage,
  setUnreadMessage,
} from '../SidebarSlice';
import { initialState } from '../SidebarSlice.constants';

describe('sidebar', () => {
  test('should return default state', () => {
    const result = SidebarSlice(undefined, { type: '' });
    expect(result).toEqual(initialState);
  });
  test('test action setLastMessage, should return lastMessages', () => {
    const action = {
      type: setLastMessage.type,
      payload: { userId: 666, lastMessage: 'message test', date: 843783844 },
    };
    const result = SidebarSlice(initialState, action);
    expect(result.lastMessages).toEqual({ 666: { content: 'message test', date: 843783844 } });
  });
});

describe('unread message', () => {
  let userMessage: AnyAction;

  beforeAll(() => {
    userMessage = {
      type: setUnreadMessage.type,
      payload: { userId: 666 },
    };
  });
  test('set unread message user one', () => {
    let result = SidebarSlice(initialState, userMessage);
    expect(result.unreadMessages).toEqual({ 666: 1 });

    result = SidebarSlice(result, userMessage);
    expect(result.unreadMessages).toEqual({ 666: 2 });
  });
  test('reset unread message', () => {
    SidebarSlice(initialState, userMessage);
    const resetMessage = {
      type: resetUnreadMessages.type,
      payload: 666,
    };
    const reset = SidebarSlice(initialState, resetMessage);
    expect(reset.unreadMessages).toEqual({ 666: 0 });
  });
});
