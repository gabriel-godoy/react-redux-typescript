export const LOGOUT = 'LOGOUT';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export type TLogoutAction = {
  type: typeof LOGOUT;
};

export type TLoginRequestAction = {
  type: typeof LOGIN_REQUEST;
};

export type TLoginFailureAction = {
  type: typeof LOGIN_FAILURE;
};

type TLoginSuccessPayload = {
  name: string;
  email: string;
  username: string;
  password: string;
};

export type TLoginSuccessAction = {
  type: typeof LOGIN_SUCCESS;
  payload: TLoginSuccessPayload;
};

export type TUserActionTypes =
  | TLogoutAction
  | TLoginRequestAction
  | TLoginFailureAction
  | TLoginSuccessAction;
