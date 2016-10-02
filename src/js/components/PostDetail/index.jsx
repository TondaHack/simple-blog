import React, { PropTypes } from 'react';
import { Grid } from 'react-mdl';
import { Map, List } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PostHeader from '../post/PostHeader';

export default class PostDetail extends React.Component {
  componentWillMount() {
    const { getPost, id, post } = this.props;

    if (post.isEmpty()) {
      getPost(id);
    }
  }
  render() {
    const { post, comments, user, getUserPosts } = this.props;
    const commentsList = comments.map(comment => (
      <div key={comment.get('id')}>name {comment.get('name')} body {comment.get('body')}</div>
    ));

    return (
      <Grid>
        <PostHeader
          post={post}
          user={user}
          commentsCount={comments.size}
          getUserPosts={getUserPosts}
        />

        <div>
          {post.get('body')}
        </div>
        <div>
          {post.get('userId')}
        </div>
        {user.get('name')}
        <h1> Comments</h1>
        {commentsList}
      </Grid>
    );
  }
}

PostDetail.propTypes = {
  post: ImmutablePropTypes.map.isRequired,
  user: ImmutablePropTypes.map.isRequired,
  comments: ImmutablePropTypes.list.isRequired,
  getPost: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  getUserPosts: PropTypes.func.isRequired,
};

PostDetail.defaultProps = {
  post: new Map(),
  comments: new List(),
  user: new Map(),
};

