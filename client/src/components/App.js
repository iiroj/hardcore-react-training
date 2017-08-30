import React from 'react';

import personService from '../services/person';

import Person from './Person';

const persons = Array(30)
  .fill()
  .map(personService.createPerson);

const App = () => {
  const personList = persons.map(person => (
    <li key={person.id}>
      <Person person={person} />
    </li>
  ));

  const renderPersonList = personList.length > 0;

  return (
    <div>
      <h1>Fraktio ERP</h1>
      {renderPersonList && <ul>{personList}</ul>}
    </div>
  );
};

export default App;
