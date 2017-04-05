'use strict';

import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router-dom';
import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk'

import getReducers from 'reducers/reducers.js';
import routes from 'routes.js';

const store = createStore(
  getReducers(),
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

render(
  <Provider store={store}>
    <Router
      history={browserHistory}
      routes={routes}
    />
  </Provider>,
  document.getElementById('app')
);
