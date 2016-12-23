import React, { PropTypes } from 'react';
import NavBar from './navbar';
import Loading from './widget/loading';
import Status from '../constants/status';

import '../res/styles/main.less';

const Main = props => (
  <div id="main">
    <div id="header">
      <NavBar />
    </div>
    <div id="content">
      { props.status === Status.LOADING && <Loading /> }
      { props.children }
    </div>
  </div>
);

Main.propTypes = {
  status: PropTypes.symbol.isRequired,
  children: PropTypes.node.isRequired,
};

export default Main;
