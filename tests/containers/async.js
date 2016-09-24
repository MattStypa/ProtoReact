'use strict';

import React from 'react';
import {Provider} from 'react-redux';
import {mount} from 'enzyme';

import * as WordOfTheDayActions  from 'actions/wordOfTheDay';
import AsyncContainer from 'containers/async.js';
import AsyncComponent from 'components/async.js';

const state = {
    wordOfTheDay: {
        word: 'abc',
        definition: 'xyz'
    }
};

const store = {
    dispatch: jest.fn(),
    getState: () => state,
    subscribe: () => {}
};

let props;

beforeEach(() => {
    props = mount(
        <Provider store={store}>
            <AsyncContainer/>
        </Provider>
    )
        .find(AsyncContainer)
        .find(AsyncComponent)
        .props();

    store.dispatch.mockClear();
});

it('sets props', () => {
    expect(props.word).toEqual(state.wordOfTheDay.word);
    expect(props.definition).toEqual(state.wordOfTheDay.definition);
    expect(typeof props.fetch).toBe('function');
});

it('dispatches actions', () => {
    WordOfTheDayActions.fetch = () => 'test';
    props.fetch();
    expect(store.dispatch).toBeCalledWith('test');
});
