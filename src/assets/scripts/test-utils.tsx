import React, { ReactElement, ReactNode } from 'react';
import { Router } from 'react-router-dom';
import history from './history';
import { render as rtlRender } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import rootReducer from './../../redux/reducers/rootReducer';
import reducerInitialState, {
  TInitialState,
} from './../../redux/store/initialState/initialState';

type TRenderOptions = {
  initialState?: TInitialState;
  store?: any;
};

function render(
  ui: ReactElement,
  {
    initialState = reducerInitialState,
    store = createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(reduxThunk))
    ),
    ...renderOptions
  }: TRenderOptions = {}
) {
  function Wrapper({ children }: { children?: ReactNode }) {
    return (
      <Provider store={store}>
        <Router history={history}>{children}</Router>
      </Provider>
    );
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
