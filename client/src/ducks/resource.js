import { Map, List } from 'immutable';

import resourceService from '../services/resource';

const defaultState = Map({
  loading: false,
  resources: List(),
});

export const getResources = () => ({
  type: 'GET_RESOURCES',
  payload: resourceService.getResources(),
});

export const addResource = resource => ({
  type: 'ADD_RESOURCE',
  payload: resource,
});

export const delResource = id => ({
  type: 'DEL_RESOURCE',
  payload: id,
});

const resourceReducer = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_RESOURCE':
      return state.update('resources', resources => resources.push(payload));

    case 'DEL_RESOURCE':
      return state.update('resources', resources => resources.filterNot(r => r.id === payload));

    case 'GET_RESOURCES_FULFILLED':
      return state.set('resources', payload).set('loading', false);

    default:
      return state;
  }
};

export default resourceReducer;
