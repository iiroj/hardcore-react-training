import React from 'react';
import PropTypes from 'prop-types';

import s from './styles.pcss';
import Loading from '../Loading';
import Resource from '../Resource';

const ResourceList = props => {
  const { loading, resources, delResource } = props;

  const title = props.title || 'Lista';

  if (loading)
    return (
      <div className={s.list}>
        <h2 className={s.title}>{title}</h2>
        <Loading />
      </div>
    );

  if (resources.length === 0)
    return (
      <div className={s.list}>
        <h2 className={s.title}>{title}</h2>
        <p className={s.empty}>Ei resursseja</p>
      </div>
    );

  const list = resources.map(resource => (
    <li key={resource.id}>
      <Resource resource={resource} delResource={delResource} />
    </li>
  ));

  const averageAge = resources.reduce((a, b) => a + b.age, 0) / resources.count();

  return (
    <div className={s.list}>
      <div className={s.heading}>
        <h2 className={s.title}>{title}</h2>
        <h3 className={s.age}>Keski-ikä: {averageAge.toFixed(0)}</h3>
      </div>
      <ul>{list}</ul>
    </div>
  );
};

ResourceList.propTypes = {
  delResource: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  resources: PropTypes.object.isRequired,
};

export default ResourceList;
