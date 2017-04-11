import React from 'react';
import { Route } from 'react-router-dom';

import Home from 'components/home.js';
import Async from 'containers/async.js';

export default [
  <Route exact path='/' component={Home}/>,
  <Route path='/async' component={Async}/>,
];
