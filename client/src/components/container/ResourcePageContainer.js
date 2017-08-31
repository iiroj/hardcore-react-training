import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { delResource } from '../../ducks/resource';
import ResourcePage from '../ResourcePage';

export default connect(
  (state, props) => {
    const id = props.match.params.id;

    return {
      loading: state.resource.get('loading'),
      resource: state.resource.get('resources').find(resource => resource.id === id),
    };
  },
  dispatch =>
    bindActionCreators(
      {
        delResource,
      },
      dispatch
    )
)(ResourcePage);
