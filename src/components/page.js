import React from 'react';

import Nav from 'components/nav.js';

const STYLE = {
  color: '#333',
  fontFamily: 'sans-serif',
};

export default class Page extends React.PureComponent {
  static propTypes = {
    children: React.PropTypes.any.isRequired
  }

  render() {
    return (
      <div style={STYLE}>
        {this.props.children}
        <Nav/>
      </div>
    );
  }
}
