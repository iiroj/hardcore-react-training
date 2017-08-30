import React from 'react';

import s from './styles.pcss';
import Loading from '../Loading';
import Person from '../Person';

const PersonList = props => {
  const { loading, persons } = props;

  const title = props.title || 'Lista';

  if (loading)
    return (
      <div>
        <h2 className={s.title}>{title}</h2>
        <Loading />
      </div>
    );

  if (persons.length === 0)
    return (
      <div>
        <h2 className={s.title}>{title}</h2>
        <p>Ei resursseja</p>
      </div>
    );

  const list = persons.map(person => (
    <li key={person.id}>
      <Person person={person} />
    </li>
  ));

  return (
    <div>
      <h2 className={s.title}>{title}</h2>
      <ul>{list}</ul>
    </div>
  );
};

export default PersonList;
