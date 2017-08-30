import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cx from 'classnames';

const Person = props => {
  const { className, person } = props;

  const classes = cx(className, {
    male: person.gender === 'm',
    female: person.gender === 'f',
  });

  return (
    <article className={classes}>
      <p className="name">
        <strong>{person.lastName}</strong>, {person.firstName}
      </p>
      <p>
        <span>{person.gender}</span>, <span>{person.age}</span>
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

export default styled(Person)`
  background-color: hsla(0, 0%, 100%, 1);
  border-radius: 0.5em;
  border: 3px solid hsla(0, 0%, 80%, 1);
  margin: 0.5em 0;
  padding: 1em;

  &.male {
    background-color: hsla(0, 40%, 95%, 1);
  }

  &.female {
    background-color: hsla(210, 40%, 95%, 1);
  }

  .name {
    strong {
      font-weight: bold;
    }
  }
`;
