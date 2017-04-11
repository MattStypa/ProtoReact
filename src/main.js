import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk'

import getReducers from 'reducers/reducers.js';
import routes from 'routes.js';

const STORE = createStore(
  getReducers(),
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

function renderRoute(route, index) {
  return (
    <span key={index}>{route}</span>
  );
}
render(
  <Provider store={STORE}>
    <BrowserRouter>
      <div>
        {routes.map(renderRoute)}
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
