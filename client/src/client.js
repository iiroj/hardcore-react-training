/* global document, __DEVELOPMENT__, window */
/* eslint global-require: "off" */

import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Redbox from 'redbox-react';

import Root from './Root';
import { createStore } from './utils/redux';
import { getMiddlewares, getReducers, getEnhancers, getInitialState } from './config/redux';

if (__DEVELOPMENT__) {
  const Perf = require('react-addons-perf');
  window.Perf = Perf;
}

const initialState = getInitialState();
const store = createStore(getReducers(), getMiddlewares(), getEnhancers(), initialState);

function render(Component, rootElement) {
  if (__DEVELOPMENT__) {
    try {
      ReactDOM.render(<Component store={store} />, rootElement);
    } catch (e) {
      ReactDOM.render(<Redbox error={e} />, rootElement);
    }
  } else {
    ReactDOM.render(<Component store={store} />, rootElement);
  }
}

const rootElement = document.getElementById('app');
render(Root, rootElement);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const NextRoot = require('./Root').default;
    render(NextRoot, rootElement);
  });
}
