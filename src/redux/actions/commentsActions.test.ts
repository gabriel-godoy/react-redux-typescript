import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import initialState from './../store/initialState/initialState';

import {
  SAVE_COMMENT,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_SUCCESS,
} from './../actionTypes/commentsActionTypes';

import {
  saveComment,
  fetchCommentsRequest,
  fetchCommentsSuccess,
  fetchCommentsFailure,
  fetchComments,
} from './commentsActions';

it('should have correct type and payload, in saveComment', () => {
  const expectedAction = {
    type: SAVE_COMMENT,
    payload: 'New comment',
  };

  expect(saveComment('New comment')).toEqual(expectedAction);
});

it('should have correct type and payload, in fetchCommentsRequest', () => {
  const expectedAction = {
    type: FETCH_COMMENTS_REQUEST,
  };

  expect(fetchCommentsRequest()).toEqual(expectedAction);
});

it('should have correct type and payload, in fetchCommentsSuccess', () => {
  const expectedAction = {
    type: FETCH_COMMENTS_SUCCESS,
    payload: [],
  };

  expect(fetchCommentsSuccess([])).toEqual(expectedAction);
});

it('should have correct type and payload, in fetchCommentsFailure', () => {
  const expectedAction = {
    type: FETCH_COMMENTS_FAILURE,
  };

  expect(fetchCommentsFailure()).toEqual(expectedAction);
});

describe('async actions', () => {
  beforeEach(() => {
    moxios.install();

    // Intercept a resquest
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
      status: 200,
      response: [
        { name: 'Comment 1', id: 1 },
        { name: 'Comment 2', id: 2 },
      ],
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should dispatch the correct actions when fetchComments is dispatched', () => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore(initialState);

    const expectedActions = [
      { type: FETCH_COMMENTS_REQUEST },
      {
        type: FETCH_COMMENTS_SUCCESS,
        payload: [
          { name: 'Comment 1', id: 1 },
          { name: 'Comment 2', id: 2 },
        ],
      },
    ];

    return store.dispatch(fetchComments()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
