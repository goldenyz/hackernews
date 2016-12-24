import React, { PropTypes } from 'react';
import NavBar from './navbar';

import '../res/styles/main.less';

const Main = props => (
  <div id="main">
    <div id="header">
      <NavBar />
    </div>
    <div id="content">
      { props.children }
    </div>
  </div>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
