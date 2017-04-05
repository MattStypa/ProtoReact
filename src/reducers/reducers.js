'use strict';

import {combineReducers} from 'redux';

import WordOfTheDay from 'reducers/wordOfTheDay.js';

export default function getReducers() {
  return combineReducers({
    wordOfTheDay: WordOfTheDay,
  });
}
