import { fromJS, Map } from 'immutable';
import { stringify, arrayToObject } from './../helpers/immutable-helpers';
import constants from '../constants/appConstants';

const defaultTree = {
  posts: {},
  comments: {},
  users: {},
  filters: {
    userId: null,
    user: {},
    search: '',
  },
};

export default (state = new Map(fromJS(defaultTree)), action) => {
  switch (action.type) {
    case constants.SET_POSTS:
      return state.set('posts', fromJS(arrayToObject(action.data)));
    case constants.REMOVE_POST:
      return state.set('posts', state.get('posts').delete(stringify(action.id)));
    case constants.SET_POST:
      return state.setIn(['posts', stringify(action.data.id)], fromJS(action.data));
    case constants.SET_POSTS_DATA:
      return state
        .set('comments', fromJS(arrayToObject(action.comments)))
        .set('users', fromJS(arrayToObject(action.users)));
    case constants.SET_POST_DATA:
      return state
        .set('comments', fromJS(arrayToObject(action.comment)))
        .setIn(['users', stringify(action.user.id)], fromJS(action.user));
    case constants.SEARCH:
      return state.setIn(['filters', 'search'], action.search);
    case constants.USER_SEARCH:
      return state
        .setIn(['filters', 'userId'], action.userId)
        .setIn(
          ['filters', 'user'],
          action.userId ?
            state.getIn(['users', stringify(action.userId)]) :
            fromJS({})
        );
    default:
      return state;
  }
};
