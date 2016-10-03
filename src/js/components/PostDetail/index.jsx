import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';
import { Grid, Cell } from 'react-mdl';
import { Map, List } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PostHeader from '../post/PostHeader';
import CommentDetail from './CommentDetail/index';
import './style.css';

class PostDetail extends React.Component {
  static propTypes = {
    post: ImmutablePropTypes.map.isRequired,
    user: ImmutablePropTypes.map.isRequired,
    comments: ImmutablePropTypes.map.isRequired,
    getPost: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    getUserPosts: PropTypes.func.isRequired,
    removePost: PropTypes.func.isRequired,
    router: React.PropTypes.shape({
      push: React.PropTypes.func,
    }),
  };

  static defaultProps = {
    post: new Map(),
    comments: new List(),
    user: new Map(),
  };

  componentWillMount() {
    const { getPost, id, post } = this.props;

    if (post.isEmpty()) {
      getPost(id);
    }
  }

  removePost = () => {
    const { post, removePost } = this.props;

    removePost(post.get('id'));
    this.props.router.push('/');
  };

  render() {
    const { post, comments, user, getUserPosts } = this.props;
    const commentsList = comments.valueSeq().map(comment => (
      <CommentDetail key={comment.get('id')} comment={comment} />
    ));

    return (
      <Grid className="post-detail">
        <PostHeader
          post={post}
          user={user}
          commentsCount={comments.size}
          getUserPosts={getUserPosts}
          remove={this.removePost}
        />

        <Cell col={12}>
          {post.get('body')}
        </Cell>
        <Cell col={12}>
          <h2> Comments</h2>
          {commentsList}
        </Cell>
      </Grid>
    );
  }
}

export default withRouter(PostDetail);
