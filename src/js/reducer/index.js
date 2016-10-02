import { fromJS, Map } from 'immutable';
import constants from '../constants/appConstants';

const defaultTree = {
  posts: [],
  comments: [],
  users: [],
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
        .set('comments', state.get('comments').push(fromJS(action.comments)))
        .set('users', state.get('users').push(fromJS(action.users)));
    case constants.SET_POST_DATA:
      return state
        .set('comments', state.get('comments').push(fromJS(action.comments)))
        .set('users', state.get('users').push(fromJS(action.user)));
    default:
      return state;
  }
};
