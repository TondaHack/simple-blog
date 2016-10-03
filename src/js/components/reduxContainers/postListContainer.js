import { connect } from 'react-redux';
import ListContainer from '../PostList/index';
import { getAllPosts, removePostById, searchPosts, getUserPosts } from '../../actions/posts';
import { searchByFilters } from '../../helpers/immutable-helpers';

const state = (data, ownProps) => ({
  posts: searchByFilters(data.get('posts'), data.get('filters')),
  filters: data.get('filters'),
  ...ownProps,
});
const dispatchMethods = dispatch => ({
  getPostsList: () => getAllPosts(dispatch),
  removePost: id => removePostById(dispatch, id),
  search: text => searchPosts(dispatch, text),
  clearUserFilter: () => getUserPosts(dispatch, null),
});

export default connect(state, dispatchMethods)(ListContainer);
