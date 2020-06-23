import React from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Redirect,
  RouteComponentProps,
  RouteProps,
} from 'react-router-dom';
import { TInitialState } from './../redux/store/initialState/initialState';
import { TUserState } from './../redux/store/initialState/userState';

type OwnProps = {
  component: React.ComponentType<RouteComponentProps>;
};

type Props = TReduxStateProps & RouteProps & OwnProps;

const ProtectedRoute: React.FC<Props> = ({
  component: Component,
  user,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        user.details.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );
};

type TReduxStateProps = {
  user: TUserState;
};

const mapStateToProps = (state: TInitialState) => ({
  user: state.user,
});

export default connect(mapStateToProps)(ProtectedRoute);
