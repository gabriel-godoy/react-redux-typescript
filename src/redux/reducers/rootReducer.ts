import { combineReducers } from 'redux';
import commentsReducers from './commentsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  comments: commentsReducers,
  user: userReducer,
});

export default rootReducer;
