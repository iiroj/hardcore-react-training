import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addResource, delResource } from '../../ducks/resource';
import IndexPage from '../IndexPage';

export default connect(
  state => ({
    loading: state.resource.get('loading'),
    resources: state.resource.get('resources'),
  }),
  dispatch =>
    bindActionCreators(
      {
        addResource,
        delResource,
      },
      dispatch
    )
)(IndexPage);
