import React from 'react';
import { Grid, Textfield, Cell, Icon } from 'react-mdl';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ListItem from './../reduxContainers/postListItemContainer';
import './style.css';

export default class ListContainer extends React.Component {
  static propTypes = {
    posts: ImmutablePropTypes.list,
    getPostsList: React.PropTypes.func.isRequired,
    removePost: React.PropTypes.func.isRequired,
    search: React.PropTypes.func.isRequired,
    filters: ImmutablePropTypes.map.isRequired,
    clearUserFilter: React.PropTypes.func.isRequired,
  };

  componentWillMount() {
    const { getPostsList, posts } = this.props;

    if (posts.size <= 1) {
      getPostsList();
    }
  }

  searchPosts = (e) => {
    const { search } = this.props;
    const value = e.target.value;

    search(value);
  };

  renderListItem = (item, index) => {
    const { removePost } = this.props;

    return (
      <ListItem
        key={item.get('id')}
        post={item}
        removePost={removePost}
        postIndex={index}
      />
    );
  };

  render() {
    const { posts, filters, clearUserFilter } = this.props;
    const postsList = posts.map(this.renderListItem);

    return (
      <Grid>
        <Cell col={12}>
          <Textfield
            value={filters.get('search')}
            onChange={this.searchPosts}
            label="Search"
            expandable
            expandableIcon="search"
            className="search-input"
          />
        </Cell>
        {filters.get('userId') &&
          <Cell col={12} className="user-filter">
            <span>{filters.getIn(['user', 'name'])}</span>
            <Icon
              name="clear"
              onClick={clearUserFilter}
            />
          </Cell>
        }
        {postsList}
      </Grid>
    );
  }
}
