import React, { Component } from 'react';
import s from './styles.pcss';

import personService from '../../services/person';
import Person from '../Person';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
    };
  }

  componentWillMount() {
    personService.getPersons().then(persons => {
      this.setState({ persons });
    });
  }

  render() {
    const { persons } = this.state;

    const personList = persons.map(person => (
      <li key={person.id}>
        <Person person={person} />
      </li>
    ));
    const renderPersonList = personList.length > 0;

    return (
      <div className={s.app}>
        <h1 className={s.heading}>Fraktio ERP</h1>
        {renderPersonList && <ul>{personList}</ul>}
      </div>
    );
  }
}
