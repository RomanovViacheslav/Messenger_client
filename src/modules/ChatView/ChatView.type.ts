import { MessageEntity } from '../../domains';
import { ThemeType } from '../../theme';

export interface StyledBoxProps {
  theme?: ThemeType;
}

export interface ChatViewState {
  messages: MessageEntity[];
  isLoading: boolean;

}
