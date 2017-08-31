import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router';

import s from './styles.pcss';

import Index from '../container/IndexPageContainer';
import Resource from '../container/ResourcePageContainer';

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
    return (
      <div className={s.app}>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/user/:id" exact component={Resource} />
        </Switch>
      </div>
    );
  }
}
