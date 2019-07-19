import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import Sidebar from '~/components/Sidebar';

import { Wrapper, Main } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Sidebar />
      <Main>{children}</Main>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
