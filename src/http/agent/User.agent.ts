import { AxiosError } from 'axios';
import { BasicAgent } from './Basic.agent';
import { CreateUserRequest, CreateUserResponseSuccess } from '../model';

const BACKEND_URL = 'http://localhost:8000';

export class UserAgent extends BasicAgent {
  constructor() {
    super(BACKEND_URL as string, {
    });
  }

  async createUser(query: CreateUserRequest): Promise<CreateUserResponseSuccess> {
    try {
      const { data } = await this._http.post('/users/register', query);
      return data;
    } catch (error: unknown) {
      if (
        error instanceof AxiosError &&
        error.response &&
        'ok' in error.response.data &&
        'error' in error.response.data &&
        'error_ui' in error.response.data
      ) {
        throw new Error(error.response.data);
      }
      throw new Error((error as Error).message);
    }
  }
}

export const UserAgentInstance = new UserAgent();
