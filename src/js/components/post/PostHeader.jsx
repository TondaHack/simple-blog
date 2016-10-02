import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Link, withRouter } from 'react-router';
import { Icon, Button } from 'react-mdl';
import { Map } from 'immutable';
import './postHeader.css';

class PostHeader extends React.Component {
  filterPostsByUser = () => {
    const { user, getUserPosts } = this.props;

    getUserPosts(user.get('id'));
    this.props.router.push('/');
  };

  render() {
    const { post, user, remove, commentsCount } = this.props;

    return (
      <header className="post-header">
        <h1>
          <Link to={`/post/${post.get('id')}`}>
            {post.get('title')}
          </Link>
        </h1>
        <div className="meta-data">
          <Button
            className="username"
            onClick={this.filterPostsByUser}
          >
            {user.get('name')}
          </Button>
          <Icon
            name="comment"
            className={'comment-icon'}
            title={`${commentsCount}`}
          />
          <Icon
            name="delete"
            onClick={remove}
            className="remove-post"
            title="Remove"
          />
        </div>
      </header>
    );
  }
}

PostHeader.propTypes = {
  post: ImmutablePropTypes.map,
  user: ImmutablePropTypes.map,
  remove: React.PropTypes.func.isRequired,
  commentsCount: React.PropTypes.number.isRequired,
  getUserPosts: React.PropTypes.func.isRequired,
  router: React.PropTypes.shape({
    push: React.PropTypes.func,
  }),
};

PostHeader.defaultProps = {
  user: new Map(),
};

export default withRouter(PostHeader);
