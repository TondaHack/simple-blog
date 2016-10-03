import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Header } from 'react-mdl';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import PostListContainer from './components/reduxContainers/postListContainer';
import PostDetail from './components/reduxContainers/postDetailContainer';
import store from './stores';
import './index.css';

const App = props => (
  <div>
    <Header>
      <h1> Amazing blog </h1>
    </Header>
    <div className="main">
      {props.children}
    </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={PostListContainer} />
        <Route path="/post/:id" component={PostDetail} />
      </Route>
    </Router>
  </Provider>,
  window.document.getElementById('root')
);
