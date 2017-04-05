'use strict';

import React from 'react';

import Nav from 'components/nav.js';

const style = {
  color: '#333',
  fontFamily: 'sans-serif',
};

export default class Page extends React.PureComponent {
  static propTypes = {
    children: React.PropTypes.any.isRequired
  }

  render() {
    return (
      <div style={style}>
        {this.props.children}
        <Nav/>
      </div>
    );
  }
}
