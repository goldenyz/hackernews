import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import Main from '../containers/main';
import NewStories from '../containers/newstories';

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRedirect to="/new" />
      <Route path="new" component={NewStories} />
    </Route>
  </Router>
);
