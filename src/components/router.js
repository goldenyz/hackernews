import React from 'react';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import Main from '../containers/main';
import NewStories from '../containers/newStories';
import ShowStories from '../containers/showStories';
import Jobs from '../containers/jobs';

export default () => (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRedirect to="/new" />
      <Route path="new" component={NewStories} />
      <Route path="show" component={ShowStories} />
      <Route path="jobs" component={Jobs} />
    </Route>
  </Router>
);
