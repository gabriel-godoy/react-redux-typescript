import axios from 'axios';

import {
  SAVE_COMMENT,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_SUCCESS,
} from './../actionTypes/commentsActionTypes';

import { Dispatch } from 'redux';

export function saveComment(comment: string) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}

export function fetchCommentsRequest() {
  return {
    type: FETCH_COMMENTS_REQUEST,
  };
}

type TCommentsItems = {
  id: number;
  name: string;
};

export function fetchCommentsSuccess(comments: TCommentsItems[]) {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: comments,
  };
}

export function fetchCommentsFailure() {
  return {
    type: FETCH_COMMENTS_FAILURE,
  };
}

export const fetchComments = () => async (dispatch: Dispatch) => {
  dispatch(fetchCommentsRequest());

  try {
    const commentsUrl = 'http://jsonplaceholder.typicode.com/comments';
    const response = await axios.get(commentsUrl);

    dispatch(fetchCommentsSuccess(response.data));
  } catch (error) {
    console.log('error', error);

    dispatch(fetchCommentsFailure());
  }
};
