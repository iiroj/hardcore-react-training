import React from 'react';
import PropTypes from 'prop-types';

import styles from './Person.pcss';

const Person = props => {
  const { person } = props;

  return (
    <article className={styles.person}>
      <p>
        <strong>{person.lastName}</strong>, {person.firstName}
      </p>
    </article>
  );
};

Person.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }),
};

export default Person;
