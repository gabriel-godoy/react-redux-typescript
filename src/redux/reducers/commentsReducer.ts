import { TCommentsState } from './../store/initialState/commentsState';
import initialState from './../store/initialState/initialState';
import {
  TCommentsActionTypes,
  SAVE_COMMENT,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_SUCCESS,
} from './../actionTypes/commentsActionTypes';

export default function (
  state: TCommentsState = initialState.comments,
  action: TCommentsActionTypes
): TCommentsState {
  switch (action.type) {
    case SAVE_COMMENT:
      return {
        flags: {
          ...state.flags,
          isFetching: false,
          hasError: false,
        },
        items: [...state.items, action.payload],
      };

    case FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        flags: {
          ...state.flags,
          isFetching: true,
          hasError: false,
        },
      };

    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        flags: {
          ...state.flags,
          isFetching: false,
          hasError: true,
        },
      };

    case FETCH_COMMENTS_SUCCESS:
      const formattedComments = action.payload
        .filter((comment) => comment.id <= 10)
        .map((comment) => comment.name);

      return {
        items: [...state.items, ...formattedComments],
        flags: {
          ...state.flags,
          isFetching: false,
          hasError: false,
        },
      };

    default:
      return state;
  }
}
