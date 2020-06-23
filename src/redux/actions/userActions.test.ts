import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import initialState from './../store/initialState/initialState';
import {
  LOGOUT,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from './../actionTypes/userActionTypes';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  login,
} from './userActions';

it('should have correct type and payload, in loginRequest', () => {
  const expectedAction = {
    type: LOGIN_REQUEST,
  };

  expect(loginRequest()).toEqual(expectedAction);
});

it('should have correct type and payload, in loginSuccess', () => {
  const userMock = {
    name: 'Gabriel Godoy',
    email: 'gabrielgodoy@test.com',
    username: 'gabrielgodoy',
    password: '123456',
  };

  const expectedAction = {
    type: LOGIN_SUCCESS,
    payload: userMock,
  };

  expect(loginSuccess(userMock)).toEqual(expectedAction);
});

it('should have correct type and payload, in loginFailure', () => {
  const expectedAction = {
    type: LOGIN_FAILURE,
  };

  expect(loginFailure()).toEqual(expectedAction);
});

it('should have correct type and payload, in logout', () => {
  const expectedAction = {
    type: LOGOUT,
  };

  expect(logout()).toEqual(expectedAction);
});

describe('async actions', () => {
  let userMock;

  beforeEach(() => {
    moxios.install();

    userMock = {
      name: 'Gabriel Godoy',
      email: 'gabrielgodoy@test.com',
      username: 'gabrielgodoy',
      password: '123456',
    };

    // Intercept a resquest
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
      status: 200,
      response: userMock,
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should dispatch the correct actions when fetchComments is dispatched', () => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore(initialState);

    const expectedActions = [
      { type: LOGIN_REQUEST },
      {
        type: LOGIN_SUCCESS,
        payload: userMock,
      },
    ];

    return store.dispatch(login()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
