import { MessageEntity } from '../../domains';
import { ThemeType } from '../../theme';

export interface StyledBoxProps {
  theme?: ThemeType;
}

export interface ChatViewState {
  message: string;
  messagesRecipient: MessageEntity[];
}
