'use strict';

import _ from 'lodash';
import * as Redux from 'redux';

import getReducers from 'reducers/reducers.js';

it('combines all reducers', () => {
    Redux.combineReducers = jest.fn(() => 'combined reducers');

    let combinedReducers = getReducers();
    let reducers = Redux.combineReducers.mock.calls[0][0];

    expect(combinedReducers).toEqual('combined reducers');
    expect(_.isObject(reducers)).toBeTruthy();
    expect(_.size(reducers)).toBeGreaterThan(0);
});
