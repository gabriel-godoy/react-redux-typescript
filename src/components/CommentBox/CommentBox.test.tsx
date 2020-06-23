import React from 'react';
import CommentBox from './CommentBox';
import { render, fireEvent } from './../../assets/scripts/test-utils';
import userEvent from '@testing-library/user-event';
import userState from './../../redux/store/initialState/userState';

describe('Logged out', () => {
  it('should have, if logged out, a message to login', () => {
    const props = {
      fetchComments: jest.fn(),
      saveComment: jest.fn(),
      user: {
        ...userState,
        details: {
          ...userState.details,
          isLoggedIn: false,
        },
      },
    };

    const { getByRole } = render(<CommentBox {...props} />);

    const loginLink = getByRole('link', { name: 'Login to add a comment' });
    expect(loginLink).toBeInTheDocument();
  });
});

describe('Logged in', () => {
  let props, getByTestId, getByRole, textArea, submitButton, fetchButton;

  beforeEach(() => {
    props = {
      fetchComments: jest.fn(),
      saveComment: jest.fn(),
      user: {
        ...userState,
        details: {
          ...userState.details,
          isLoggedIn: true,
        },
      },
    };

    ({ getByTestId, getByRole } = render(<CommentBox {...props} />));

    textArea = getByTestId('comment box');
    submitButton = getByRole('button', { name: 'Submit comment' });
    fetchButton = getByRole('button', {
      name: 'Fetch 10 random comments',
    });
  });

  it('should have, if logged in, a textarea, a submit button, and a fetch button', () => {
    expect(textArea).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(fetchButton).toBeInTheDocument();
  });

  it('should have a textarea that users can type in', async () => {
    await userEvent.type(textArea, 'Hello');
    expect(textArea).toHaveValue('Hello');
  });

  it('should remove all text from textarea when user submit', async () => {
    await userEvent.type(textArea, 'Hello');
    expect(textArea).toHaveValue('Hello');

    fireEvent(submitButton, new MouseEvent('click'));
    expect(textArea).toHaveValue('');
  });
});
