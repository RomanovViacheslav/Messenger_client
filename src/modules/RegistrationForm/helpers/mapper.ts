import { UserCreationEntity } from '../../../domains';
import { CreateUserRequest } from '../../../http';

export const mapToExternalCreateUser = (data: UserCreationEntity): CreateUserRequest => ({
  email: data.email,
  name: data.name,
  login: data.login,
  phoneNumber: data.phoneNumber,
  lastName: data.lastName,
  password: data.password,
});
