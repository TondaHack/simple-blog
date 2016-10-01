export const findPost = (posts, id) => posts.filter(item => item.get('id') === parseInt(id, 10)).first();

export default {
  findPost,
};
