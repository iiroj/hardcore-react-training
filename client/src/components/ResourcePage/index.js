import React from 'react';
import { pure } from 'recompose';

import Header from '../Header';

const ResourcePage = props => {
  const { resources } = props;
  const id = props.match.params.id;
  const resource = resources.find(resource => resource.id === id);

  return (
    <div>
      <Header />
      <article>
        <p>{resource.firstName}</p>
      </article>
    </div>
  );
};

export default pure(ResourcePage);
