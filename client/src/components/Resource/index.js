import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { pure } from 'recompose';

import s from './styles.pcss';
import Button from '../form/Button';

export const supportedGenders = {
  m: 'mies',
  f: 'nainen',
};

const Resource = props => {
  const { resource, delResource } = props;

  const classNames = cx([
    s.resource,
    {
      [s.blue]: resource.gender === 'm',
      [s.pink]: resource.gender === 'f',
    },
  ]);

  return (
    <article className={classNames}>
      <div className={s.info}>
        <Link className={s.name} to={`/user/${resource.id}`}>
          <strong>{resource.lastName}</strong>, {resource.firstName}
        </Link>
        <p>
          <span>{supportedGenders[resource.gender]}</span>, <span>{resource.age}</span>
        </p>
      </div>
      <footer className={s.footer}>
        <Button onClick={() => delResource(resource.id)} color="red">
          Poista resurssi
        </Button>
      </footer>
    </article>
  );
};

Resource.propTypes = {
  resource: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }),
};

export default pure(Resource);
