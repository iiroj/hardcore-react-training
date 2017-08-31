import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import ResourcePage from '../ResourcePage';

export default withRouter(
  connect(state => ({
    loading: state.resource.get('loading'),
    resources: state.resource.get('resources'),
  }))(ResourcePage)
);
