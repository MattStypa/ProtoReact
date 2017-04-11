jest.mock('components/page.js');

import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import * as WordOfTheDayActions  from 'actions/wordOfTheDay';
import AsyncContainer from 'containers/async.js';
import AsyncComponent from 'components/async.js';

const STATE = {
    wordOfTheDay: {
        word: 'abc',
        definition: 'xyz'
    }
};

const STORE = {
    dispatch: jest.fn(),
    getState: () => STATE,
    subscribe: () => {}
};

let props;

beforeEach(() => {
    props = mount(
        <Provider store={STORE}>
            <AsyncContainer/>
        </Provider>
    )
        .find(AsyncContainer)
        .find(AsyncComponent)
        .props();

    STORE.dispatch.mockClear();
});

it('sets props', () => {
    expect(props.word).toEqual(STATE.wordOfTheDay.word);
    expect(props.definition).toEqual(STATE.wordOfTheDay.definition);
    expect(typeof props.fetch).toBe('function');
});

it('dispatches actions', () => {
    WordOfTheDayActions.fetch = () => 'test';
    props.fetch();
    expect(STORE.dispatch).toBeCalledWith('test');
});
