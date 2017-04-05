'use strict';

import {connect} from 'react-redux';

import {fetch as fetchWordOfTheDay} from 'actions/wordOfTheDay';
import AsyncComponent from 'components/async.js';

const mapStateToProps = (state) => {
  return {
    word: state.wordOfTheDay.word,
    definition: state.wordOfTheDay.definition,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: () => {
      return dispatch(fetchWordOfTheDay());
    },
  };
};

const Async = connect(
  mapStateToProps,
  mapDispatchToProps
)(AsyncComponent);

export default Async;
