'use strict';

import React from 'react';

import Nav from 'components/nav.js';

const style = {
  color: '#333',
  fontFamily: 'sans-serif',
};

const Page = React.createClass({
  propTypes: {
    children: React.PropTypes.any.isRequired
  },

  render: function() {
    return (
      <div style={style}>
        {this.props.children}
        <Nav/>
      </div>
    );
  },
});

export default Page;
