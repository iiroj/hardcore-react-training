import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';

import s from './styles.pcss';
import Header from '../Header';
import Loading from '../Loading';
import Button from '../form/Button';

import { supportedGenders } from '../Resource';

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
        <p>
          Resurssi-identifikaatiolla <em>{props.match.params.id}</em> ei löytynyt resurssia.
        </p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <article>
        <p>
          <strong>{resource.lastName}</strong>, {resource.firstName}
        </p>
        <p>{supportedGenders[resource.gender]}</p>
        <p>{resource.age}</p>
        <footer className={s.footer}>
          <Button onClick={() => delResource(resource.id)}>Poista resurssi</Button>
        </footer>
      </article>
    </div>
  );
};

ResourcePage.propTypes = {
  loading: PropTypes.bool.isRequired,
  resource: PropTypes.object,
  delResource: PropTypes.func.isRequired,
};

export default pure(ResourcePage);
