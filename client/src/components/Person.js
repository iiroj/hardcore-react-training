import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const supportedGenders = {
  m: 'mies',
  f: 'nainen',
};

const Article = styled.article`
  background-color: hsla(0, 0%, 100%, 1);
  border-radius: 0.25em;
  box-shadow: inset 0 0 0 2px hsla(0, 0%, 80%, 1);
  margin: 0.5em 0;
  padding: 1em;

  ${props => props.gender === 'm' && css`background-color: hsla(0, 40%, 95%, 1);`};
  ${props => props.gender === 'f' && css`background-color: hsla(210, 40%, 95%, 1);`};
`;

const LastName = styled.strong`font-weight: bold;`;

const Person = props => {
  const { person } = props;

  return (
    <Article gender={person.gender}>
      <p>
        <LastName>{person.lastName}</LastName>, {person.firstName}
      </p>
      <p>
        <span>{supportedGenders[person.gender]}</span>, <span>{person.age}</span>
      </p>
    </Article>
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
