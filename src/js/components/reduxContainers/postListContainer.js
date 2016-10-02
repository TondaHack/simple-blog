import { connect } from 'react-redux';
import ListContainer from '../PostList/index';
import { getAllPosts, removePostByIndex, searchPosts, getUserPosts } from '../../actions/posts';
import { searchByFilters } from '../../helpers/immutable-helpers';

const state = (data, ownProps) => ({
  posts: searchByFilters(data.get('posts'), data.get('filters')),
  filters: data.get('filters'),
  ...ownProps,
});
const dispatchPosts = dispatch => ({
  getPostsList: () => getAllPosts(dispatch),
  removePost: id => removePostByIndex(dispatch, id),
  search: text => searchPosts(dispatch, text),
  clearUserFilter: () => getUserPosts(dispatch, null),
});

export default connect(state, dispatchPosts)(ListContainer);
