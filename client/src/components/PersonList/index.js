import React from 'react';
import PropTypes from 'prop-types';

import s from './styles.pcss';
import Loading from '../Loading';
import Person from '../Person';

const PersonList = props => {
  const { loading, persons, delResource } = props;

  const title = props.title || 'Lista';

  if (loading)
    return (
      <div className={s.list}>
        <h2 className={s.title}>{title}</h2>
        <Loading />
      </div>
    );

  if (persons.length === 0)
    return (
      <div className={s.list}>
        <h2 className={s.title}>{title}</h2>
        <p className={s.empty}>Ei resursseja</p>
      </div>
    );

  const list = persons.map(person => (
    <li key={person.id}>
      <Person person={person} delResource={delResource} />
    </li>
  ));

  const averageAge = persons.reduce((a, b) => a + b.age, 0) / persons.count();

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

PersonList.propTypes = {
  delResource: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  persons: PropTypes.array.isRequired,
};

export default PersonList;
