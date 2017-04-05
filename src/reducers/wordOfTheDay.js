'use strict';

import _ from 'lodash';

import {SET_WORD_OF_THE_DAY} from 'actions/wordOfTheDay';

const initialState = {
  word: '',
  definition: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_WORD_OF_THE_DAY:
      return _.assign({}, state, {
        word: action.word,
        definition: action.definition,
      });

    default:
      return state;
  }
};
