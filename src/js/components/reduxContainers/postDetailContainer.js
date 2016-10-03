import { connect } from 'react-redux';
import PostDetail from '../PostDetail/index';
import { getSinglePost, getUserPosts, removePostById } from '../../actions/posts';
import { getUser, getComments } from '../../helpers/immutable-helpers';

const state = (data, ownProps) => ({
  post: data.getIn(['posts', ownProps.params.id]),
  comments: getComments(data.get('comments'), ownProps.params.id),
  user: getUser(data, ownProps.params.id),
  id: ownProps.params.id,
});
const dispatchMethods = dispatch => ({
  getPost: id => getSinglePost(dispatch, id),
  getUserPosts: userId => getUserPosts(dispatch, userId),
  removePost: id => removePostById(dispatch, id),
});

export default connect(state, dispatchMethods)(PostDetail);
