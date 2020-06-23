import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import history from './assets/scripts/history';
import { Provider } from 'react-redux';
import App from './components/App/App';
import configureStore from './redux/store/configureStore';
import './index.scss';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,

  document.querySelector('#root')
);
