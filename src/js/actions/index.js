import axios from 'axios';
import constants from '../constants/appConstants';
import config from '../../config/config.json';

export const getDefaultData = (dispatch) => {
  const url = `${config.host}/posts`;

  axios.get(url)
    .then(response =>
      dispatch({
        type: constants.SET_POSTS,
        data: response.data,
      })
    )
    .catch(window.console.error);
};

export const getSinglePost = (dispatch, postId) => {
  const url = `${config.host}/posts/${postId}`;

  axios.get(url)
    .then(response =>
      dispatch({
        type: constants.SET_POST,
        data: response.data,
      })
    )
    .catch(window.console.error);
};

export const removePostByIndex = (dispatch, id) => {
  dispatch({
    type: constants.REMOVE_POST,
    id,
  });
};
