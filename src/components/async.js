import React from 'react';

import Page from 'components/page.js';

export default class Async extends React.PureComponent {
  static propTypes = {
    fetch: React.PropTypes.func.isRequired,

    word: React.PropTypes.string.isRequired,
    definition: React.PropTypes.string.isRequired,
  }

  componentWillMount() {
    this.props.fetch();
  }

  render() {
    return (
      <Page>
        <h1>Async</h1>
        <h3>{this.props.word}</h3>
        <p>{this.props.definition}</p>
      </Page>
    );
  }
}
