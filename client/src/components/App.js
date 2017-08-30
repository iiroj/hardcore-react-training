import React from 'react';

import personService from '../services/person';

import Person from './Person';

const persons = Array(30)
  .fill()
  .map(personService.createPerson);

const App = () => {
  return (
    <div>
      <h1>Fraktio ERP</h1>
      <ul>
        {persons.map(person => (
          <li key={person.id}>
            <Person person={person} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
