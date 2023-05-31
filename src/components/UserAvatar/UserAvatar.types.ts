import { ThemeType } from '../../theme';

export interface StyledAvatarProps {
  color?: string;
  theme?: ThemeType;
}

export interface UserAvatarProps {
  color?: string;
  login: string;
  src?: string;
}
