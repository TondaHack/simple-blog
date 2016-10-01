import { fromJS, Map } from 'immutable';
import constants from '../constants/appConstants';

const defaultTree = {
  posts: [],
  comments: [],
};

export default (state = new Map(fromJS(defaultTree)), action) => {
  switch (action.type) {
    case constants.SET_POSTS:
      return state.set('posts', fromJS(action.data));
    case constants.REMOVE_POST:
      return state.set('posts', state.get('posts').delete(action.id));
    case constants.SET_POST:
      return state.set('posts', state.get('posts').push(fromJS(action.data)));

    default:
      return state;
  }
};
