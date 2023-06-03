import { UserEntity } from '../../domains';
import { ThemeType } from '../../theme';

export interface StyledBoxProps {
  theme?: ThemeType;
}

export interface SidebarState {
  status: 'success' | 'error' | 'loading';
  error: string | null;
  users: Pick<UserEntity, 'id' | 'login'>[] | null;
}
