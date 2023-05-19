export interface ButtonCountRequest {
  count: number;
}

export interface ButtonCountResponseSuccess {
  ok: true;
  count: number;
}

export interface ButtonCountResponseError {
  ok: false;
  error: string;
  error_ui: string;
}

export type ButtonCountResponse = ButtonCountResponseSuccess | ButtonCountResponseError;
