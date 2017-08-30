import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import s from './styles.pcss';

const supportedGenders = {
  m: 'mies',
  f: 'nainen',
};

const Person = props => {
  const { person } = props;

  const classNames = cx([
    s.person,
    {
      [s.blue]: person.gender === 'm',
      [s.pink]: person.gender === 'f',
    },
  ]);

  return (
    <article className={classNames}>
      <p className={s.name}>
        <strong>{person.lastName}</strong>, {person.firstName}
      </p>
      <p>
        <span>{supportedGenders[person.gender]}</span>, <span>{person.age}</span>
      </p>
    </article>
  );
};

Person.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }),
};

export default Person;
