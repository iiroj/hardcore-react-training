import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import ResourcePage from '../ResourcePage';

export default withRouter(
  connect((state, props) => {
    const id = props.match.params.id;

    return {
      loading: state.resource.get('loading'),
      resource: state.resource.get('resources').find(resource => resource.id === id),
    };
  })(ResourcePage)
);
