export interface CreateUserRequest {
  email: string;
  password: string;
  name: string;
  lastName: string;
  login: string;
  phoneNumber: string;
}

export interface CreateUserResponseSuccess {
  id: number;
  email: string;
  name: string;
  lastName: string;
  login: string;
  phoneNumber: string;
}

export interface CreateUserResponseError {
  err: string;
}
