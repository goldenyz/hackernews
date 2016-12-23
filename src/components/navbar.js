import React from 'react';
import { Link } from 'react-router';

import '../res/styles/navbar.less';

const NavBar = () => (
  <div id="navbar">
    <ul>
      <li>
        <Link to="/new">
          New
        </Link>
      </li>
    </ul>
  </div>
);

export default NavBar;
