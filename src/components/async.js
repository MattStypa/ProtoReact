'use strict';

import React from 'react';

import Page from 'components/page.js';

const Async = React.createClass({
  propTypes: {
    fetch: React.PropTypes.func.isRequired,

    word: React.PropTypes.string.isRequired,
    definition: React.PropTypes.string.isRequired,
  },

  componentWillMount: function() {
    this.props.fetch();
  },

  render: function() {
    return (
      <Page>
        <h1>Async</h1>
        <h3>{this.props.word}</h3>
        <p>{this.props.definition}</p>
      </Page>
    );
  },
});

export default Async;
