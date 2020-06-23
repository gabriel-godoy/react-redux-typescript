import initialState from './../store/initialState/initialState';
import {
  TUserActionTypes,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
} from './../actionTypes/userActionTypes';

export default function (state = initialState.user, action: TUserActionTypes) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        flags: {
          ...state.flags,
          isFetching: true,
          hasError: false,
        },
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        flags: {
          ...state.flags,
          isFetching: false,
          hasError: true,
        },
      };

    case LOGIN_SUCCESS:
      return {
        flags: {
          ...state.flags,
          isFetching: false,
          hasError: false,
        },
        details: {
          ...state.details,
          ...action.payload,
          isLoggedIn: true,
        },
      };

    case LOGOUT:
      return initialState.user;

    default:
      return state;
  }
}
