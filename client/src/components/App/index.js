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
  }

  getPersons = () => {
    personService.getPersons().then(persons =>
      this.setState({
        persons,
        loading: false,
      })
    );
  };

  loadPersons = () => {
    this.setState({ loading: true });
    this.getPersons();
  };

  delPerson = id => {
    this.setState({
      persons: this.state.persons.filter(p => p.id !== id),
    });
  };

  componentWillMount() {
    this.loadPersons();
  }

  render() {
    const { loading, persons } = this.state;

    const goodPersons = persons.filter(p => p.age < 30 && p.gender === 'm');
    const badPersons = persons.filter(p => p.age >= 30 || p.gender === 'f');

    return (
      <div className={s.app}>
        <header className={s.header}>
          <img src={trollo} alt="trollo" />
          <h1 className={s.heading}>Fraktio ERP</h1>
          <Button disabled={loading} onClick={() => this.loadPersons()}>
            Päivitä
          </Button>
        </header>
        <PersonList loading={loading} persons={goodPersons} title="Hyvät resurssit" delPerson={this.delPerson} />
        <PersonList loading={loading} persons={badPersons} title="Huonot resurssit" delPerson={this.delPerson} />
      </div>
    );
  }
}
