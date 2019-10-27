import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { getDevicesRequest } from '~/store/modules/device/actions';

import Header from '~/components/Header';
import Sidebar from '~/components/Sidebar';

import { Wrapper, Scroll } from './styles';

export default function DefaultLayout({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDevicesRequest());
  }, [dispatch]);

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
