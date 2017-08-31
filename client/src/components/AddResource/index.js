import React, { PureComponent } from 'react';

import resourceService from '../../services/resource';
import Button from '../form/Button';

export default class AddResource extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { addResource } = this.props;

    const resource = {
      ...resourceService.createResource(),
      ...this.state,
    };
    addResource(resource);
  };

  render = () => {
    const { firstName, lastName } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="firstName">Etunimi</label>
          <input
            name="firstName"
            type="text"
            value={firstName}
            onChange={e =>
              this.setState({
                firstName: e.target.value,
              })}
          />
        </div>
        <div>
          <label htmlFor="lastName">Sukunimi</label>
          <input
            name="lastName"
            type="text"
            value={lastName}
            onChange={e =>
              this.setState({
                lastName: e.target.value,
              })}
          />
        </div>
        <Button type="submit">Lisää uusi resurssi</Button>
      </form>
    );
  };
}
