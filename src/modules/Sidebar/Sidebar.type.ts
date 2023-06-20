import { UserEntity } from '../../domains';
import { ThemeType } from '../../theme';

export interface StyledBoxProps {
  theme?: ThemeType;
}

export interface LastMessage {
  content: string;
  date: Date;
}

interface LastMessages {
  [userId: number]: LastMessage;
}

interface UnreadMessages {
  [userId: number]: number;
}

export interface SidebarState {
  status: 'success' | 'error' | 'loading';
  error: string | null;
  users: Pick<UserEntity, 'id' | 'login'>[];
  lastMessages: LastMessages;
  isLastMessage: boolean;
  unreadMessages: UnreadMessages;
}
