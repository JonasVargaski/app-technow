import React from 'react';
import PropTypes from 'prop-types';

import logo from '~/assets/logo-p.png';
import { Wrapper, Content, Card, Footer } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Card>
        <img src={logo} alt="Logo" />
        <Content>
          <h1>
            Monitoramento <span>Central do Usuário</span>
          </h1>
          {children}
        </Content>
        <Footer>
          © 2019
          <a href="/">Technow Sistemas Embarcados </a>| Desenvolvido por:
          <strong> Jonas Vargaski</strong>
        </Footer>
      </Card>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
