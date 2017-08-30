import React from 'react';
import PropTypes from 'prop-types';

const Person = props => {
  const { person } = props;

  return (
    <article>
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
