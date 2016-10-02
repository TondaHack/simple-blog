import { fromJS, Map } from 'immutable';
import constants from '../constants/appConstants';

const defaultTree = {
  posts: [],
  comments: [],
  users: [],
  filters: {
    userId: null,
    user: {},
    search: '',
  },
};

export default (state = new Map(fromJS(defaultTree)), action) => {
  switch (action.type) {
    case constants.SET_POSTS:
      return state.set('posts', fromJS(action.data));
    case constants.REMOVE_POST:
      return state.set('posts', state.get('posts').delete(action.id));
    case constants.SET_POST:
      return state.set('posts', state.get('posts').push(fromJS(action.data)));
    case constants.SET_POSTS_DATA:
      return state
        .set('comments', fromJS(action.comments))
        .set('users', fromJS(action.users));
    case constants.SET_POST_DATA:
      return state
        .set('comments', state.get('comments').concat(fromJS(action.comment)))
        .set('users', state.get('users').push(fromJS(action.user)));
    case constants.SEARCH:
      return state.setIn(['filters', 'search'], action.search);
    case constants.USER_POSTS:
      return state
        .setIn(['filters', 'userId'], action.userId)
        .setIn(
          ['filters', 'user'],
          action.userId ?
            state.get('users').filter(item => item.get('id') === action.userId).first() :
            fromJS({})
        );
    default:
      return state;
  }
};
