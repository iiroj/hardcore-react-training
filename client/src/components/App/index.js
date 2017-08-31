import React, { PureComponent } from 'react';

import s from './styles.pcss';
import trollo from '../../assets/trollo.png';
import Button from '../form/Button';
import AddResource from '../AddResource';
import ResourceList from '../ResourceList';

export default class App extends PureComponent {
  componentWillMount() {
    const { getResources } = this.props;
    getResources();
  }

  render() {
    const { loading, resources, getResources, addResource, delResource } = this.props;

    const goodResources = resources.filter(p => p.age < 30 && p.gender === 'm');
    const badResources = resources.filter(p => p.age >= 30 || p.gender === 'f');

    return (
      <div className={s.app}>
        <header className={s.header}>
          <img src={trollo} alt="trollo" />
          <h1 className={s.heading}>Fraktio ERP</h1>
          <Button disabled={loading} onClick={getResources}>
            Päivitä
          </Button>
        </header>
        <section>
          <AddResource addResource={addResource} />
        </section>
        <section>
          <ResourceList loading={loading} resources={goodResources} title="Hyvät resurssit" delResource={delResource} />
          <ResourceList loading={loading} resources={badResources} title="Huonot resurssit" delResource={delResource} />
        </section>
      </div>
    );
  }
}
