import React, { PureComponent } from 'react';
import s from './styles.pcss';

import trollo from '../../assets/trollo.png';
import resourceService from '../../services/resource';
import Button from '../form/Button';
import AddResource from '../AddResource';
import PersonList from '../PersonList';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      persons: [],
    };
  }

  getResources = async () => {
    const oldResources = this.state.persons;
    const newResources = await resourceService.getResources();
    if (oldResources !== newResources) {
      this.setState({ persons: newResources });
    }
    this.setState({ loading: false });
  };

  loadResrouces = () => {
    this.setState({ loading: true });
    this.getResources();
  };

  delResrouce = id => {
    this.setState({
      persons: this.state.persons.filter(p => p.id !== id),
    });
  };

  addResource = person => {
    this.setState({
      persons: this.state.persons.concat([person]),
    });
  };

  componentWillMount() {
    this.loadResrouces();
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
        <section>
          <AddResource addPerson={this.addResource} />
        </section>
        <section>
          <PersonList loading={loading} persons={goodPersons} title="Hyvät resurssit" delResource={this.delResource} />
          <PersonList loading={loading} persons={badPersons} title="Huonot resurssit" delResource={this.delResource} />
        </section>
      </div>
    );
  }
}
