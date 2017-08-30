import React, { PureComponent } from 'react';
import s from './styles.pcss';

import personService from '../../services/person';
import Button from '../form/Button';
import PersonList from '../PersonList';
import trollo from '../../assets/trollo.png';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      persons: [],
    };

    this.getPersons = this.getPersons.bind(this);
  }

  getPersons() {
    this.setState({ loading: true });
    personService.getPersons().then(persons => {
      this.setState({ persons, loading: false });
    });
  }

  componentWillMount() {
    this.getPersons();
  }

  render() {
    const { loading, persons } = this.state;

    const goodPersons = persons.filter(p => p.age < 30 && p.gender === 'm');
    const badPersons = persons.filter(p => p.age >= 30);

    return (
      <div className={s.app}>
        <header className={s.header}>
          <img src={trollo} alt="trollo" />
          <h1 className={s.heading}>Fraktio ERP</h1>
          <Button disabled={loading} onClick={() => this.getPersons()}>
            Päivitä
          </Button>
        </header>
        <PersonList loading={loading} persons={goodPersons} title="Hyvät resurssit" />
        <PersonList loading={loading} persons={badPersons} title="Huonot resurssit" />
      </div>
    );
  }
}
