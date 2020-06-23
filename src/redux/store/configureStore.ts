import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';
import initialState from './initialState/initialState';

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(reduxThunk))
  );
}
