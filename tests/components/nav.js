'use strict';

import React from 'react';
import {shallow} from 'enzyme';
import {Link} from 'react-router-dom';

import Nav from 'components/nav.js';

it('renders links', () => {
    expect(shallow(<Nav/>).find(Link).length).toBeGreaterThan(0);
});
