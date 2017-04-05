'use strict';

import React from 'react';
import {Link} from 'react-router-dom';

const Nav = React.createClass({
  render: function() {
    return (
      <div>
        <Link to='/'>Home</Link> | <Link to='/async'>Async</Link>
      </div>
    );
  },
});

export default Nav;
