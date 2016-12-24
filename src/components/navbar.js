import React from 'react';
import { Link } from 'react-router';

import '../res/styles/navbar.less';

const NavBar = () => (
  <div id="navbar">
    <ul>
      <li>
        <Link to="/new" activeClassName="active">
          New
        </Link>
      </li>
      <li>
        <Link to="/show" activeClassName="active">
          Show
        </Link>
      </li>
      <li>
        <Link to="/jobs" activeClassName="active">
          Jobs
        </Link>
      </li>
    </ul>
  </div>
);

export default NavBar;
