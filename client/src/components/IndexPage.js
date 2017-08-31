import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';

import Header from './Header';
import AddResource from './AddResource';
import ResourceList from './ResourceList';

const Index = props => {
  const { loading, resources, getResources, addResource, delResource } = props;

  const goodResources = resources.filter(p => p.age < 30 && p.gender === 'm');
  const badResources = resources.filter(p => p.age >= 30 || p.gender === 'f');

  return (
    <div>
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
};

Index.propTypes = {
  addResource: PropTypes.func.isRequired,
  getResources: PropTypes.func.isRequired,
  delResource: PropTypes.func.isRequired,
  resources: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default pure(Index);
