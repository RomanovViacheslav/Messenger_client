import { UserEntity } from '../../../domains';
import { getAllUserResponseSuccess } from '../../../network';

export const mapAllUsers = (
  users: getAllUserResponseSuccess[],
): Pick<UserEntity, 'id' | 'login'>[] =>
  users.map((user) => ({
    id: String(user.id),
    login: user.login,
  }));
