'use strict';

import React from 'react';
import {Route} from 'react-router';

import Home from 'components/home.js';
import Async from 'containers/async.js';

export default [
    <Route path='/' component={Home}/>,
    <Route path='/async' component={Async}/>
];
