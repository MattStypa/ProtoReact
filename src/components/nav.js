import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.PureComponent {
  render() {
    return (
      <div>
        <Link to='/'>Home</Link> | <Link to='/async'>Async</Link>
      </div>
    );
  }
}
