import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import { getResources, addResource, delResource } from '../../ducks/resource';
import App from '../App';

export default withRouter(
  connect(
    state => ({
      loading: state.resource.get('loading'),
      resources: state.resource.get('resources'),
    }),
    dispatch =>
      bindActionCreators(
        {
          getResources,
          addResource,
          delResource,
        },
        dispatch
      )
  )(App)
);
