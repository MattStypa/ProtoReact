import React from 'react';
import { shallow } from 'enzyme';

import Async from 'components/async.js';

let fetch;
let component;

beforeEach(() => {
    fetch = jest.fn();
    component = shallow(
        <Async
            fetch={fetch}
            word='abc'
            definition='xyz'
        />
    );
});

it('renders the word', () => {
    expect(component.contains('abc')).toBeTruthy();
});

it('renders the definition', () => {
    expect(component.contains('xyz')).toBeTruthy();
});

it('fetches on mount', () => {
    expect(fetch).toBeCalled();
});
