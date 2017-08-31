import React from 'react';
import { pure } from 'recompose';

import Header from '../Header';
import Loading from '../Loading';
import Button from '../form/Button';

const ResourcePage = props => {
  const { loading, resource, delResource } = props;

  if (loading) {
    return (
      <div>
        <Header />
        <Loading />
      </div>
    );
  }

  if (!loading && !resource) {
    return (
      <div>
        <Header />
        <p>Resurssi-identifikaatiolla {props.match.params.id} ei löytynyt resurssia.</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <article>
        <p>
          {resource.firstName} {resource.lastName}
        </p>
        <Button onClick={() => delResource(resource.id)}>Poista resurssi</Button>
      </article>
    </div>
  );
};

export default pure(ResourcePage);
