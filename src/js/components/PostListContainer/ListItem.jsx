import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Link } from 'react-router';
import { Button } from 'react-mdl';

export default class ListItem extends React.Component {
  static propTypes = {
    post: ImmutablePropTypes.map,
    removePost: React.PropTypes.func.isRequired,
    postIndex: React.PropTypes.number.isRequired,
  };

  remove = () => {
    const { postIndex, removePost } = this.props;

    removePost(postIndex);
  };

  render() {
    const { post } = this.props;

    return (
      <div>
        <Link to={`/post/${post.get('id')}`}>
          {post.get('title')}
        </Link>
        <Button onClick={this.remove}> Remove </Button>
      </div>
    );
  }
}
