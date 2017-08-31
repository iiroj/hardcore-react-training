import React from 'react';
import { pure } from 'recompose';

import Header from '../Header';
import Loading from '../Loading';

const ResourcePage = props => {
  const { loading, resource } = props;

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
