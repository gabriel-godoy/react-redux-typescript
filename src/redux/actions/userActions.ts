import { Dispatch } from 'redux';
import {
  LOGOUT,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from './../actionTypes/userActionTypes';
import history from './../../assets/scripts/history';

export function loginRequest() {
  return {
    type: LOGIN_REQUEST,
  };
}

type TUserDetails = {
  name: string;
  email: string;
  username: string;
  password: string;
};

export function loginSuccess(userDetails: TUserDetails) {
  return {
    type: LOGIN_SUCCESS,
    payload: userDetails,
  };
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

type TLogindetails = {
  login: string;
  password: string;
};

export const login = (loginDetails: TLogindetails) => async (
  dispatch: Dispatch
) => {
  dispatch(loginRequest());

  try {
    const userMock = {
      name: 'Gabriel Godoy',
      email: 'gabrielgodoy@test.com',
      username: 'gabrielgodoy',
      password: '123456',
    };

    // Simulate API request
    const response = await new Promise<TUserDetails>((resolve) =>
      setTimeout(() => resolve(userMock), 1000)
    );

    dispatch(loginSuccess(response));
    history.push('/');
  } catch (error) {
    console.log('error', error);

    dispatch(loginFailure());
  }
};
