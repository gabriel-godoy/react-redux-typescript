import React from 'react';
import moxios from 'moxios';
import userEvent from '@testing-library/user-event';
import { render } from './../assets/scripts/test-utils';
import initialState from './../redux/store/initialState/initialState';
import App from './../components/App/App';

beforeEach(() => {
  moxios.install();

  // Intercept a resquest
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [
      { name: 'Comment 1', id: 1 },
      { name: 'Comment 2', id: 2 },
      { name: 'Comment 3', id: 3 },
      { name: 'Comment 4', id: 4 },
      { name: 'Comment 5', id: 5 },
      { name: 'Comment 6', id: 6 },
      { name: 'Comment 7', id: 7 },
      { name: 'Comment 8', id: 8 },
      { name: 'Comment 9', id: 9 },
      { name: 'Comment 10', id: 10 },
      { name: 'Comment 11', id: 11 },
    ],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('should, if logged in, fetch comments but display only first 10', (done) => {
  const state = {
    ...initialState,
    user: {
      ...initialState.user,
      details: {
        ...initialState.user.details,
        isLoggedIn: true,
      },
    },
  };

  const { getAllByTestId, getByRole } = render(<App />, {
    initialState: state,
  });

  const fetchButton = getByRole('button', {
    name: 'Fetch 10 random comments',
  });

  userEvent.click(fetchButton);

  moxios.wait(() => {
    expect(getAllByTestId('comment-item').length).toEqual(10);
    done();
  });
});
