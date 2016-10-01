import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import { Grid } from 'react-mdl';
import { Map, List } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { getSinglePost } from '../../actions';
import { findPost } from '../../helpers/immutable-helpers';


class PostDetail extends React.Component {
  componentWillMount() {
    const { getPost, id, post } = this.props;

    if (post.isEmpty()) {
      getPost(id);
    }
  }
  render() {
    const { post } = this.props;

    return (
      <Grid>
        <div>
          {post.get('title')}
        </div>
        {post.get('body')}
      </Grid>
    );
  }
}

PostDetail.propTypes = {
  post: ImmutablePropTypes.map,
  getPost: PropTypes.func,
  id: PropTypes.string,
};

PostDetail.defaultProps = {
  post: new Map(),
  posts: new List(),
};

const stateTodo = (data, ownProps) => ({
  post: findPost(data.get('posts'), ownProps.params.id),
  posts: data.get('posts'),
  id: ownProps.params.id,
});
const dispatchTodo = dispatch => ({
  getPost: id => getSinglePost(dispatch, id),
});

export default connect(stateTodo, dispatchTodo)(PostDetail);
