import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pure } from 'recompose';

import s from './styles.pcss';
import Button from '../form/Button';

const supportedGenders = {
  m: 'mies',
  f: 'nainen',
};

const Person = props => {
  const { person, delPerson } = props;

  const classNames = cx([
    s.person,
    {
      [s.blue]: person.gender === 'm',
      [s.pink]: person.gender === 'f',
    },
  ]);

  return (
    <article className={classNames}>
      <div className={s.info}>
        <p className={s.name}>
          <strong>{person.lastName}</strong>, {person.firstName}
        </p>
        <p>
          <span>{supportedGenders[person.gender]}</span>, <span>{person.age}</span>
        </p>
      </div>
      <footer className={s.footer}>
        <Button onClick={() => delPerson(person.id)} color="red">
          Poista resurssi
        </Button>
      </footer>
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

export default pure(Person);
