import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdErrorOutline } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';
import { Container } from './styles';

export default function AccountConfirm({ location }) {
  const { email } = location.state;

  if (!email) {
    history.push('/');
  }

  async function sendConfirmation() {
    await api.put('/users/confirmation', { email });
    history.push('/');
  }

  return (
    <Container>
      <div>
        <MdErrorOutline size={45} color="#0062b0" />
        <h3>Confirmação, Quase lá... </h3>
      </div>
      <p>
        Um e-mail de confirmação foi enviado para o endereço <b>{email}.</b>
      </p>
      <p>
        Favor, acesse sua <b>Caixa de Entrada</b> e confirme sua conta.
      </p>
      <span>
        Não recebeu o e-mail de confirmação? <br />
        Clique
        <button onClick={sendConfirmation} type="button">
          aqui
        </button>
        para reenviar.
      </span>

      <Link to="/"> Voltar ao login</Link>
    </Container>
  );
}

AccountConfirm.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape(),
  }).isRequired,
};
