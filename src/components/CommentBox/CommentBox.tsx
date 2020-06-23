import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CommentBox.module.scss';
import { TUserState } from './../../redux/store/initialState/userState';

type Props = {
  user: TUserState;
  fetchComments: () => void;
  saveComment: (comments: string) => void;
};

const CommentBox: React.FC<Props> = ({ fetchComments, saveComment, user }) => {
  const [stateComment, setStateComment] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setStateComment(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (stateComment.trim()) {
      saveComment(stateComment);
      setStateComment('');
    }
  };

  return (
    <>
      {user.details.isLoggedIn ? (
        <form onSubmit={handleSubmit} className={styles.commentForm}>
          <h3 className={styles.title}>Add a comment</h3>

          <textarea
            id='comment box'
            data-testid='comment box'
            cols={30}
            rows={10}
            value={stateComment}
            onChange={handleChange}
          />

          <div className={styles.formActions}>
            <button type='submit'>Submit comment</button>

            <button type='button' onClick={fetchComments}>
              Fetch 10 random comments
            </button>
          </div>
        </form>
      ) : (
        <Link to='login' className={styles.loginButton}>
          Login to add a comment
        </Link>
      )}
    </>
  );
};

export default CommentBox;
