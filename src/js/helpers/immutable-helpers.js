export const findEntityById = (posts, postId) => posts.filter(item => item.get('id') === parseInt(postId, 10)).first();

export const getComments = (comments, postId) => comments.filter(item => item.get('postId') === parseInt(postId, 10));

export const getUser = (data, postId) => {
  const post = findEntityById(data.get('posts'), postId);

  if (post) {
    return findEntityById(data.get('users'), post.get('userId'));
  }

  return undefined;
};

const replaceNewLines = (str = '') => str.replace(/(\r\n|\n|\r)/gm, ' ');

export const searchByFilters = (posts, filters) => {
  const userId = filters.get('userId');
  let filteredPosts = posts;

  if (userId) {
    filteredPosts = posts.filter(item => item.get('userId') === parseInt(userId, 10));
  }

  const search = filters.get('search');
  const regex = new RegExp(search.trim(), 'i');

  return filteredPosts.filter(item => (replaceNewLines(item.get('body')).search(regex) > -1 || replaceNewLines(item.get('title')).search(regex) > -1));
};

export const getUserPosts = (posts, userId) => posts.filter(item => item.get('userId') === parseInt(userId, 10));

