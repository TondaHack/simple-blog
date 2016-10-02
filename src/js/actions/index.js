import axios from 'axios';
import constants from '../constants/appConstants';
import config from '../../config/config.json';

const getAllUsers = () => {
  const url = `${config.host}/users`;

  return axios.get(url)
    .catch(window.console.error);
};

const getAllComments = () => {
  const url = `${config.host}/comments`;

  return axios.get(url)
    .catch(window.console.error);
};

const getPostsData = dispatch =>
  axios.all([getAllComments(), getAllUsers()])
  .then(axios.spread((comments, users) =>
    dispatch({
      type: constants.SET_POSTS_DATA,
      comments: comments.data,
      users: users.data,
    })
  ))
  .catch(window.console.error);

export const getAllPosts = (dispatch) => {
  const url = `${config.host}/posts`;

  return axios.get(url)
    .then(response =>
      dispatch({
        type: constants.SET_POSTS,
        data: response.data,
      })
    ).then(getPostsData(dispatch))
    .catch(window.console.error);
};

export const getPostComments = (postId) => {
  const url = `${config.host}/posts/${postId}/comments`;

  return axios.get(url)
    .catch(window.console.error);
};

export const getPostUser = (userId) => {
  const url = `${config.host}/users/${userId}`;

  return axios.get(url)
    .catch(window.console.error);
};

export const getPostData = (dispatch, post) =>
  axios.all([getPostComments(post.id), getPostUser(post.userId)])
  .then(axios.spread((comments, user) => {
    dispatch({
      type: constants.SET_POST_DATA,
      comment: comments.data,
      user: user.data,
    });
  }))
  .catch(window.console.error);

export const getSinglePost = (dispatch, postId) => {
  const url = `${config.host}/posts/${postId}`;

  return axios.get(url)
    .then((response) => {
      const { data } = response;

      dispatch({
        type: constants.SET_POST,
        data,
      });

      return data;
    })
    .then(post => getPostData(dispatch, post))
    .catch(window.console.error);
};

export const removePostByIndex = (dispatch, id) => {
  dispatch({
    type: constants.REMOVE_POST,
    id,
  });
};
