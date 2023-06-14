import { MessageEntity, UserEntity } from '../../../../domains';

export interface MessageListProps {
  messages: MessageEntity[];
  filteredUser?: Pick<UserEntity, 'id' | 'login'>;
}
