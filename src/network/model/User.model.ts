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

export interface loginUserRequest {
  email: string;
  password: string;
}

export interface loginUserResponseSuccess {
  jwt: string;
}

export interface getAllUserResponseSuccess {
  id: number;
  login: string;
}
