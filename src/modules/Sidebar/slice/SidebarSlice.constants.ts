import { SidebarState } from '../Sidebar.type';

export const initialState: SidebarState = {
  status: 'loading',
  error: '',
  users: [],
  lastMessages: {},
  isLastMessage: false,
  unreadMessages: {},
};
