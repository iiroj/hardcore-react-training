import React, { PureComponent } from 'react';
import { List } from 'immutable';
import s from './styles.pcss';

import trollo from '../../assets/trollo.png';
import resourceService from '../../services/resource';
import Button from '../form/Button';
import AddResource from '../AddResource';
import ResourceList from '../ResourceList';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      resources: List([]),
    };
  }

  getResources = async () => {
    const oldResources = this.state.persons;
    const newResources = await resourceService.getResources();
    if (oldResources !== newResources) {
      this.setState({ resources: newResources });
    }
    this.setState({ loading: false });
  };

  loadResources = () => {
    this.setState({ loading: true });
    this.getResources();
  };

  delResource = id => {
    this.setState({
      resources: this.state.resources.filterNot(p => p.id === id),
    });
  };

  addResource = resource => {
    this.setState({
      resources: this.state.resources.push(resource),
    });
  };

  componentWillMount() {
    this.loadResources();
  }

  render() {
    const { loading, resources } = this.state;

    const goodResources = resources.filter(p => p.age < 30 && p.gender === 'm');
    const badResources = resources.filter(p => p.age >= 30 || p.gender === 'f');

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
          <AddResource addResource={this.addResource} />
        </section>
        <section>
          <ResourceList loading={loading} resources={goodResources} title="Hyvät resurssit" delResource={this.delResource} />
          <ResourceList loading={loading} resources={badResources} title="Huonot resurssit" delResource={this.delResource} />
        </section>
      </div>
    );
  }
}
