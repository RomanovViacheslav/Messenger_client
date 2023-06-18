import { UserEntity } from '../../domains';
import { ThemeType } from '../../theme';

export interface StyledBoxProps {
  theme?: ThemeType;
}
interface LastMessages {
  [userId: number]: string;
}

export interface SidebarState {
  status: 'success' | 'error' | 'loading';
  error: string | null;
  users: Pick<UserEntity, 'id' | 'login'>[] | null;
  lastMessages: LastMessages;
  isLastMessage: boolean;
}
