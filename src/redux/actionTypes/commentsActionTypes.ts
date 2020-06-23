export const SAVE_COMMENT = 'SAVE_COMMENT';

export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';

export type TSaveCommentsAction = {
  type: typeof SAVE_COMMENT;
  payload: string;
};

export type TFetchCommentsRequestAction = {
  type: typeof FETCH_COMMENTS_REQUEST;
};

export type TFetchCommentsFailureAction = {
  type: typeof FETCH_COMMENTS_FAILURE;
};

type TFetchCommentsSuccessPayload = {
  id: number;
  name: string;
};

export type TFetchCommentsSuccessAction = {
  type: typeof FETCH_COMMENTS_SUCCESS;
  payload: TFetchCommentsSuccessPayload[];
};

export type TCommentsActionTypes =
  | TSaveCommentsAction
  | TFetchCommentsRequestAction
  | TFetchCommentsFailureAction
  | TFetchCommentsSuccessAction;
