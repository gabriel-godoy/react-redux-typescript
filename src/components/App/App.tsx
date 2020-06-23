import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../../pages/ProtectedRoute';
import ExtraContent from '../../pages/ExtraContent';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Page from '../../pages/Page/Page';
import Header from './../../containers/Header/Header';

const App = () => {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path='/' component={() => <Page component={Home} />} />

        <Route
          exact
          path='/login'
          component={() => <Page component={Login} title='Login' />}
        />

        <ProtectedRoute
          exact
          path='/extra-content'
          component={() => (
            <Page component={ExtraContent} title='Extra content' />
          )}
        />

        <Route
          path='*'
          component={() => <Page component={NotFound} title='Page not found' />}
        />
      </Switch>
    </div>
  );
};

export default App;
