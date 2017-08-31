import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import s from './styles.pcss';
import trollo from '../../assets/trollo.png';
import Button from '../form/Button';

const Header = props => {
  const { loading, onClick } = props;

  return (
    <header className={s.header}>
      <Link to="/" className={s.link}>
        <img src={trollo} alt="trollo" />
        <h1 className={s.heading}>Fraktio ERP</h1>
      </Link>
      {onClick && (
        <Button disabled={loading} onClick={onClick}>
          Päivitä
        </Button>
      )}
    </header>
  );
};

Header.PropTypes = {
  loading: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

export default Header;
