import userReducer from './userReducer';
import initialState from './../store/initialState/initialState';
import {
  TUserActionTypes,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
} from './../actionTypes/userActionTypes';

it('should handle LOGIN_REQUEST', () => {
  const action: TUserActionTypes = {
    type: LOGIN_REQUEST,
  };

  const newState = userReducer(initialState.user, action);

  expect(newState).toEqual({
    ...initialState.user,
    flags: {
      isFetching: true,
      hasError: false,
    },
  });
});

it('should handle LOGIN_SUCCESS', () => {
  const userMock = {
    name: 'Gabriel Godoy',
    email: 'gabrielgodoy@test.com',
    username: 'gabrielgodoy',
    password: '123456',
  };

  const action: TUserActionTypes = {
    type: LOGIN_SUCCESS,
    payload: userMock,
  };

  const newState = userReducer(initialState.user, action);

  expect(newState).toEqual({
    flags: {
      isFetching: false,
      hasError: false,
    },
    details: {
      ...userMock,
      isLoggedIn: true,
    },
  });
});

it('should handle LOGIN_FAILURE', () => {
  const action: TUserActionTypes = {
    type: LOGIN_FAILURE,
  };

  const newState = userReducer(initialState.user, action);

  expect(newState).toEqual({
    ...initialState.user,
    flags: {
      hasError: true,
      isFetching: false,
    },
  });
});

it('should handle LOGOUT', () => {
  const action: TUserActionTypes = {
    type: LOGOUT,
  };

  const newState = userReducer(initialState.user, action);

  expect(newState).toEqual(initialState.user);
});
