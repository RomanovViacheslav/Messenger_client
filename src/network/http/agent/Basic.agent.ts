import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class BasicAgent {
  protected _http: AxiosInstance;

  protected _token: string | null = null;

  constructor(baseURL: string, config?: AxiosRequestConfig) {
    this._http = axios.create({
      baseURL,
      ...config,
    });
  }

  public setToken(token: string | null) {
    this._token = token;
    this.setAuthorizationHeader();
  }

  protected setAuthorizationHeader() {
    if (this._token) {
      this._http.defaults.headers.common.Authorization = `Bearer ${this._token}`;
    } else {
      delete this._http.defaults.headers.common.Authorization;
    }
  }
}
