import { connect } from 'react-redux';
import ListItem from '../PostList/ListItem/ListItem';
import { getComments, stringify } from '../../helpers/immutable-helpers';

import { getUserPosts } from '../../actions/posts';

const state = (data, ownProps) => ({
  user: data.getIn(['users', stringify(ownProps.post.get('userId'))]),
  commentsCount: getComments(data.get('comments'), ownProps.post.get('id')).size,
  ...ownProps,
});
const dispatchMethods = dispatch => ({
  getUserPosts: userId => getUserPosts(dispatch, userId),
});

export default connect(state, dispatchMethods)(ListItem);
