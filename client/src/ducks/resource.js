import { Map, List } from 'immutable';

const defaultState = Map({
  loading: false,
  resources: List(),
});

const resourceReducer = (state = defaultState, action) => {
  return state;
};

export default resourceReducer;
