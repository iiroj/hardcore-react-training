import React from 'react';
import PropTypes from 'prop-types';
import reset from 'css-wipe/js';
import styled, { injectGlobal } from 'styled-components';

import personService from '../services/person';
import Person from './Person';

injectGlobal`
  ${reset}

  html {
    font-family: 'Comic Sans Ms';
  }
`;

const Container = styled.div`margin: 1em;`;

const App = () => {
  const persons = Array(30)
    .fill()
    .map(personService.createPerson);
  const personList = persons.map(person => (
    <li key={person.id}>
      <Person person={person} />
    </li>
  ));
  const renderPersonList = personList.length > 0;

  return (
    <Container>
      <h1>Fraktio ERP</h1>
      {renderPersonList && <ul>{personList}</ul>}
    </Container>
  );
};

App.propTypes = {
  className: PropTypes.string,
};

export default App;
