import React from 'react';
import styles from './CommentList.module.scss';
import { TCommentsState } from './../../redux/store/initialState/commentsState';

type Props = {
  comments: TCommentsState;
};

const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Comments</h3>
      <ul>
        {comments.items.length > 0
          ? comments.items.map((comment, index) => (
              <li key={index} data-testid='comment-item'>
                {comment}
              </li>
            ))
          : 'No comments yet'}
      </ul>
    </div>
  );
};

export default CommentList;
