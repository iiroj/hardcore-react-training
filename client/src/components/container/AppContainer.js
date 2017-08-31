import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getResources, addResource, delResource } from '../../ducks/resource';
import App from '../App';

export default connect(
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
)(App);
