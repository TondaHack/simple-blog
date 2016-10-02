import { connect } from 'react-redux';
import React from 'react';
import { Grid } from 'react-mdl';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { getAllPosts, removePostByIndex } from '../../actions/index';
import ListItem from './ListItem';

class ListContainer extends React.Component {
  static propTypes = {
    posts: ImmutablePropTypes.list,
    getPostsList: React.PropTypes.func.isRequired,
    removePost: React.PropTypes.func.isRequired,
  };

  componentWillMount() {
    const { getPostsList, posts } = this.props;

    if (posts.size <= 1) {
      getPostsList();
    }
  }

  render() {
    const { posts, removePost } = this.props;
    const postsList = posts.map((item, index) =>
      <ListItem
        key={item.get('id')}
        post={item}
        removePost={removePost}
        postIndex={index}
      />
    );

    return (
      <Grid>
        {postsList}
      </Grid>
    );
  }
}

const stateTodo = data => ({
  posts: data.get('posts'),
});
const dispatchPosts = dispatch => ({
  getPostsList: () => getAllPosts(dispatch),
  removePost: id => removePostByIndex(dispatch, id),
});

export default connect(stateTodo, dispatchPosts)(ListContainer);
