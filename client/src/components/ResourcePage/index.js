import React from 'react';
import { pure } from 'recompose';

import Header from '../Header';
import Loading from '../Loading';

const ResourcePage = props => {
  const { loading, resources } = props;
  const id = props.match.params.id;
  console.log(resources, id);
  const resource = resources.find(resource => resource.id === id);

  if (loading)
    return (
      <div>
        <Header />
        <Loading />
      </div>
    );

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
