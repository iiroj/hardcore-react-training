import React, { Component } from 'react';
import s from './styles.pcss';

import personService from '../../services/person';
import PersonList from '../PersonList';

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

    return (
      <div className={s.app}>
        <h1 className={s.heading}>Fraktio ERP</h1>
        <PersonList loading={loading} persons={persons} title="Hyvät resurssit" />
        <PersonList loading={loading} persons={persons} title="Huonot resurssit" />
      </div>
    );
  }
}
