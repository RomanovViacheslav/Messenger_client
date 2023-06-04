import { ThemeType } from '../../../../theme';

export interface ChatListItemProps {
  userId: string;
  login: string;
  img?: string;
}

export interface StyledLinkProps {
  active?: string;
  theme?: ThemeType;
}
