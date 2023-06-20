import { ThemeType } from '../../../../theme';

export interface ChatListItemProps {
  userId: string;
  login: string;
  img?: string;
  lastMessage?: string;
  date?: Date;
  unreadMessages?: number;
}

export interface StyledLinkProps {
  active?: string;
  theme?: ThemeType;
}
