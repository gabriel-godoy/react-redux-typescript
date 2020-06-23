import initialState from '../store/initialState/initialState';
import commentsReducer from './commentsReducer';
import {
  TCommentsActionTypes,
  SAVE_COMMENT,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_SUCCESS,
} from '../actionTypes/commentsActionTypes';

it('should handle SAVE_COMMENT', () => {
  const action: TCommentsActionTypes = {
    type: SAVE_COMMENT,
    payload: 'New comment',
  };

  const newState = commentsReducer(initialState.comments, action);

  expect(newState).toEqual({
    flags: {
      isFetching: false,
      hasError: false,
    },
    items: ['New comment'],
  });
});

it('should handle FETCH_COMMENTS_REQUEST', () => {
  const action: TCommentsActionTypes = {
    type: FETCH_COMMENTS_REQUEST,
  };

  const newState = commentsReducer(initialState.comments, action);

  expect(newState).toEqual({
    flags: {
      isFetching: true,
      hasError: false,
    },
    items: [],
  });
});

it('should handle FETCH_COMMENTS_SUCCESS', () => {
  const action: TCommentsActionTypes = {
    type: FETCH_COMMENTS_SUCCESS,
    payload: [
      { id: 1, name: 'Comment 1' },
      { id: 2, name: 'Comment 2' },
    ],
  };

  const newState = commentsReducer(initialState.comments, action);

  expect(newState).toEqual({
    flags: {
      isFetching: false,
      hasError: false,
    },
    items: ['Comment 1', 'Comment 2'],
  });
});

it('should handle FETCH_COMMENTS_FAILURE', () => {
  const action: TCommentsActionTypes = {
    type: FETCH_COMMENTS_FAILURE,
  };

  const newState = commentsReducer(initialState.comments, action);

  expect(newState).toEqual({
    flags: {
      isFetching: false,
      hasError: true,
    },
    items: [],
  });
});

it('should not handle action with unknown type', () => {
  const newState = commentsReducer(initialState.comments, {
    // @ts-ignore
    type: 'UNKNOWN_TYPE',
  });

  expect(newState).toEqual(initialState.comments);
});
