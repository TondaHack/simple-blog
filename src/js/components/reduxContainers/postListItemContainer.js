import { connect } from 'react-redux';
import ListItem from '../PostList/ListItem';
import { findEntityById, getComments } from '../../helpers/immutable-helpers';

import { getUserPosts } from '../../actions/posts';

const state = (data, ownProps) => ({
  user: findEntityById(data.get('users'), ownProps.post.get('userId')),
  commentsCount: getComments(data.get('comments'), ownProps.post.get('id')).size,
  ...ownProps,
});
const dispatchPosts = dispatch => ({
  getUserPosts: userId => getUserPosts(dispatch, userId),
});

export default connect(state, dispatchPosts)(ListItem);
