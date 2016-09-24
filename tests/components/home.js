'use strict';

import React from 'react';
import {shallow} from 'enzyme';

import Home from 'components/home.js';

it('renders a page', () => {
    expect(shallow(<Home/>).contains('Welcome')).toBeTruthy();
});
