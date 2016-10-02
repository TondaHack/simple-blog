import axios from 'axios';
import config from '../../config/config.json';

export const getPostUser = (userId) => {
  const url = `${config.host}/users/${userId}`;

  return axios.get(url)
    .catch(window.console.error);
};

export const getAllUsers = () => {
  const url = `${config.host}/users`;

  return axios.get(url)
    .catch(window.console.error);
};
