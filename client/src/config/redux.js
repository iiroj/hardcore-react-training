/* global __DEVELOPMENT__ */

import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import * as reducers from '../ducks';

export function getInitialState() {
  return undefined;
}

export function getMiddlewares() {
  let middlewares = [thunk, promiseMiddleware()];

  if (__DEVELOPMENT__) {
    middlewares = middlewares.concat([logger]);
  }

  return middlewares;
}

export function getReducers() {
  return reducers;
}

export function getEnhancers() {
  return [];
}
