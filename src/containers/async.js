import { connect } from 'react-redux';

import { fetch as fetchWordOfTheDay } from 'actions/wordOfTheDay';
import AsyncComponent from 'components/async.js';

const MAP_STATE_TO_PROPS = (state) => {
  return {
    word: state.wordOfTheDay.word,
    definition: state.wordOfTheDay.definition,
  };
};

const MAP_DISPATCH_TO_PROPS = (dispatch) => {
  return {
    fetch: () => {
      return dispatch(fetchWordOfTheDay());
    },
  };
};

const Async = connect(
  MAP_STATE_TO_PROPS,
  MAP_DISPATCH_TO_PROPS
)(AsyncComponent);

export default Async;
