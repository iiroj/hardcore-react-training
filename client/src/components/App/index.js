import React from 'react';
import { pure } from 'recompose';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router';

import s from './styles.pcss';

import Index from '../container/IndexPageContainer';
import Resource from '../container/ResourcePageContainer';

const App = props => (
  <div className={s.app}>
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/user/:id" component={Resource} />
    </Switch>
  </div>
);

App.propTypes = {
  getResources: PropTypes.func.isRequired,
  resources: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default pure(App);
