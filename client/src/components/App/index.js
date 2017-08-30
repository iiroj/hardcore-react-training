import React, { Component } from 'react';
import s from './styles.pcss';

import personService from '../../services/person';
import Person from '../Person';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      persons: [],
    };
  }

  componentWillMount() {
    personService.getPersons().then(persons => {
      this.setState({ persons, loading: false });
    });
  }

  render() {
    const { loading, persons } = this.state;

    const personList = persons.map(person => (
      <li key={person.id}>
        <Person person={person} />
      </li>
    ));
    const renderPersonList = personList.length > 0;

    return (
      <div className={s.app}>
        <h1 className={s.heading}>Fraktio ERP</h1>
        {loading && <p>Loading...</p>}
        {renderPersonList && <ul>{personList}</ul>}
      </div>
    );
  }
}
