import React from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post/Post';
import CommentList from '../components/CommentList/CommentList';
import CommentBox from '../components/CommentBox/CommentBox';
import { fetchComments, saveComment } from './../redux/actions/commentsActions';
import { TInitialState } from './../redux/store/initialState/initialState';
import { TCommentsState } from './../redux/store/initialState/commentsState';
import { TUserState } from './../redux/store/initialState/userState';

type OwnProps = {};

type Props = TReduxStateProps & TReduxDispatchProps & OwnProps;

const Home: React.FC<Props> = ({
  comments,
  fetchComments,
  saveComment,
  user,
}) => (
  <>
    <Post />
    <CommentList comments={comments} />
    <CommentBox
      fetchComments={fetchComments}
      saveComment={saveComment}
      user={user}
    />
  </>
);

type TReduxStateProps = {
  comments: TCommentsState;
  user: TUserState;
};

type TReduxDispatchProps = {
  fetchComments: () => void;
  saveComment: (comments: string) => void;
};

const mapStateToProps = (state: TInitialState): TReduxStateProps => ({
  comments: state.comments,
  user: state.user,
});

export default connect(mapStateToProps, { fetchComments, saveComment })(Home);
