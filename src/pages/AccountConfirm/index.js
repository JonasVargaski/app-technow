import React from 'react';
import PropTypes from 'prop-types';

import history from '~/services/history';

import { Container } from './styles';

export default function AccountConfirm({ location }) {
  const { email } = location.state;
  if (!email) {
    history.push('/');
  }
  return (
    <Container>
      <p>
        Um e-mail de confirmação foi enviado para o endereço <b>{email}</b>
      </p>
      <p>Favor, acesse sua caixa de entrada e confirme sua conta.</p>
    </Container>
  );
}

AccountConfirm.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape(),
  }).isRequired,
};
