import { connect } from 'react-redux';
import PostDetail from '../PostDetail/index';
import { getSinglePost, getUserPosts } from '../../actions/posts';
import { findEntityById, getUser, getComments } from '../../helpers/immutable-helpers';

const state = (data, ownProps) => ({
  post: findEntityById(data.get('posts'), ownProps.params.id),
  comments: getComments(data.get('comments'), ownProps.params.id),
  user: getUser(data, ownProps.params.id),
  id: ownProps.params.id,
});
const dispatchPost = dispatch => ({
  getPost: id => getSinglePost(dispatch, id),
  getUserPosts: userId => getUserPosts(dispatch, userId),
});

export default connect(state, dispatchPost)(PostDetail);
