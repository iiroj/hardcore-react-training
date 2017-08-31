import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router';

import { getResources, addResource, delResource } from '../../ducks/resource';
import App from '../App';

export default compose(
  withRouter,
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
  )
)(App);
