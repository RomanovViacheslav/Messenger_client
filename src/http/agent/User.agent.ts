import { AxiosError } from 'axios';
import { BasicAgent } from './Basic.agent';
import {
  CreateUserRequest,
  CreateUserResponseSuccess,
  getAllUserResponseSuccess,
  loginUserRequest,
  loginUserResponseSuccess,
} from '../model';

const BACKEND_URL = 'http://localhost:8000';

export class UserAgent extends BasicAgent {
  constructor() {
    super(BACKEND_URL as string, {});
  }

  async createUser(query: CreateUserRequest): Promise<CreateUserResponseSuccess> {
    try {
      const { data } = await this._http.post('/users/register', query);
      return data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response && 'err' in error.response.data) {
        throw new Error(error.response.data.err);
      }
      throw new Error((error as Error).message);
    }
  }

  async loginUser(query: loginUserRequest): Promise<loginUserResponseSuccess> {
    try {
      const { data } = await this._http.post('/users/login', query);
      return data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response && 'err' in error.response.data) {
        throw new Error(error.response.data.err);
      }
      throw new Error((error as Error).message);
    }
  }

  async getAllUser(): Promise<getAllUserResponseSuccess[]> {
    try {
      const { data } = await this._http.get('/users/users');
      return data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response && 'err' in error.response.data) {
        throw new Error(error.response.data.err);
      }
      throw new Error((error as Error).message);
    }
  }
}

export const UserAgentInstance = new UserAgent();
