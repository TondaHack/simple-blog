import { connect } from 'react-redux';
import React from 'react';
import { Grid } from 'react-mdl';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { getDefaultData, removePostByIndex } from '../../actions/index';
import ListItem from './ListItem';

class ListContainer extends React.Component {
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


ListContainer.propTypes = {
  posts: ImmutablePropTypes.list,
  getPostsList: React.PropTypes.func.isRequired,
  removePost: React.PropTypes.func.isRequired,
};

const stateTodo = data => ({
  posts: data.get('posts'),
});
const dispatchPosts = dispatch => ({
  getPostsList: () => getDefaultData(dispatch),
  removePost: id => removePostByIndex(dispatch, id),
});

export default connect(stateTodo, dispatchPosts)(ListContainer);
