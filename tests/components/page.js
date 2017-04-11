import React from 'react';
import { shallow } from 'enzyme';

import Page from 'components/page.js';
import Nav from 'components/nav.js';

it('renders a nav', () => {
    expect(shallow(
        <Page>test</Page>
    ).contains(<Nav/>)).toBeTruthy();
});

it('renders its children', () => {
    expect(shallow(
        <Page>test</Page>
    ).contains('test')).toBeTruthy();
});
