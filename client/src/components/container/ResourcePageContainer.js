import { connect } from 'react-redux';

import ResourcePage from '../ResourcePage';

export default connect(state => ({
  loading: state.resource.get('loading'),
  resources: state.resource.get('resources'),
}))(ResourcePage);
