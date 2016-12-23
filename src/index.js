import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Router from './components/router';

import './res/styles/common.less';

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root'));
