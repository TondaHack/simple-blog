import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import PostListContainer from './components/PostListContainer/index';
import PostDetail from './components/PostDetailContainer/index';
import store from './stores';
import './index.css';

const App = () => (
  <div className="main">
    <h3> Blog </h3>
    <PostListContainer />
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} />
      <Route path="/post/:id" component={PostDetail} />
    </Router>
  </Provider>,
  window.document.getElementById('root')
);
