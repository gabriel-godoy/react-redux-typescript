import React from 'react';
import { render } from './../../assets/scripts/test-utils';
import commentsState from './../../redux/store/initialState/commentsState';
import CommentList from './CommentList';

let getAllByTestId, getByText;

beforeEach(() => {
  const comments = {
    ...commentsState,
    items: ['Comment 1', 'Comment 2'],
  };

  ({ getAllByTestId, getByText } = render(<CommentList comments={comments} />));
});

it('should create one <li> per comment', () => {
  expect(getAllByTestId('comment-item').length).toEqual(2);
});

it('should show the text for each comment', () => {
  getByText('Comment 1');
  getByText('Comment 2');
});
