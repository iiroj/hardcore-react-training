import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import s from './styles.pcss';
import Header from '../Header';
import AddResource from '../AddResource';
import ResourceList from '../ResourceList';

export default class Index extends PureComponent {
  static propTypes = {
    addResource: PropTypes.func.isRequired,
    getResources: PropTypes.func.isRequired,
    delResource: PropTypes.func.isRequired,
    resources: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  render() {
    const { loading, resources, getResources, addResource, delResource } = this.props;

    const goodResources = resources.filter(p => p.age < 30 && p.gender === 'm');
    const badResources = resources.filter(p => p.age >= 30 || p.gender === 'f');

    return (
      <div className={s.app}>
        <Header loading={loading} onClick={getResources} />
        <section>
          <AddResource addResource={addResource} />
        </section>
        <section>
          <ResourceList loading={loading} resources={goodResources} title="Hyvät resurssit" delResource={delResource} />
          <ResourceList loading={loading} resources={badResources} title="Huonot resurssit" delResource={delResource} />
        </section>
      </div>
    );
  }
}
