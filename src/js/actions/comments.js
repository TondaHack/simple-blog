import axios from 'axios';
import config from '../../config/config.json';

export const getAllComments = () => {
  const url = `${config.host}/comments`;

  return axios.get(url)
    .catch(window.console.error);
};

export const getPostComments = (postId) => {
  const url = `${config.host}/posts/${postId}/comments`;

  return axios.get(url)
    .catch(window.console.error);
};
