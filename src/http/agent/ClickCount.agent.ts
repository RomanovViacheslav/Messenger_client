import { AxiosError } from 'axios';
import { BasicAgent } from './Basic.agent';
import { ButtonCountRequest, ButtonCountResponseSuccess } from '../model';

const BACKEND_URL = 'https://lk.zont-online.ru/api';

export class ClickCountAgent extends BasicAgent {
  constructor() {
    super(BACKEND_URL as string, {
      headers: {
        'X-ZONT-Client': 'kkkk@mail.ru',
        'Content-Type': 'application/json',
      },
    });
  }

  async updateClickCount(query: ButtonCountRequest): Promise<ButtonCountResponseSuccess> {
    try {
      const { data } = await this._http.post('/button_count', query);
      return data;
    } catch (error: unknown) {
      if (
        error instanceof AxiosError &&
        error.response &&
        'ok' in error.response.data &&
        'error' in error.response.data &&
        'error_ui' in error.response.data
      ) {
        throw new Error(error.response.data.error_ui);
      }
      throw new Error((error as Error).message);
    }
  }
}

export const ClickCountAgentInstance = new ClickCountAgent();
