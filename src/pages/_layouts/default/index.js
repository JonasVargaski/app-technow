import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import Sidebar from '~/components/Sidebar';

import { Wrapper, Scroll } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Sidebar />
      <Scroll>{children}</Scroll>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
