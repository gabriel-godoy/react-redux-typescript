import commentsState, { TCommentsState } from './commentsState';
import userState, { TUserState } from './userState';

const initialState: TInitialState = {
  comments: commentsState,
  user: userState,
};

export type TInitialState = {
  comments: TCommentsState;
  user: TUserState;
};

export default initialState;
