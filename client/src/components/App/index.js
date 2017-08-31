import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import s from './styles.pcss';

import Index from '../container/IndexPageContainer';

export default class App extends PureComponent {
  static propTypes = {
    getResources: PropTypes.func.isRequired,
    resources: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  componentWillMount() {
    const { getResources } = this.props;
    getResources();
  }

  render() {
    const { loading, getResources, resources } = this.props;

    return (
      <div className={s.app}>
        <Index getResources={getResources} resources={resources} loading={loading} />
      </div>
    );
  }
}
