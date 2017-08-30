import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import personService from '../services/person';

import Person from './Person';

const persons = Array(30)
  .fill()
  .map(personService.createPerson);

const App = props => {
  const { className } = props;

  const personList = persons.map(person => (
    <li key={person.id}>
      <Person person={person} />
    </li>
  ));

  const renderPersonList = personList.length > 0;

  return (
    <div className={className}>
      <h1>Fraktio ERP</h1>
      {renderPersonList && <ul>{personList}</ul>}
    </div>
  );
};

App.propTypes = {
  className: PropTypes.string,
};

export default styled(App)`
  margin: 1em;
`;
