export interface UserEntity {
  id: string;
  email: string;
  login: string;
  lastName: string;
  name: string;
  phoneNumber: string;
}

export interface UserCreationEntity {
  email: string;
  login: string;
  lastName: string;
  name: string;
  phoneNumber: string;
  password: string;
}

export interface UserLoginEntity {
  email: string;
  password: string;
}
