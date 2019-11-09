import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MdMenu } from 'react-icons/md';

import { Wrapper, Nav, StyledNavLink } from './styles';

import { getRoutes } from '~/routes/appRoutes';

export default function Sidebar() {
  const links = useSelector(state => state.auth.routes);

  const [toogle, setToogle] = useState(false);
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    setRoutes(getRoutes(links));
  }, [links]);

  function toogleVisible() {
    if (window.innerWidth < 600) {
      setToogle(false);
    }
  }

  function handleToogle() {
    setToogle(!toogle);
  }

  useEffect(() => {
    document.addEventListener('mouseup', toogleVisible, false);
    document.addEventListener('touchend', toogleVisible, false);
    return () => {
      document.removeEventListener('mouseup', toogleVisible, false);
      document.removeEventListener('touchend', toogleVisible, false);
    };
  }, []);

  return (
    <Wrapper toogle={toogle}>
      <div>
        <MdMenu size={40} onClick={handleToogle} />
      </div>

      <Nav>
        {routes.map(route => (
          <StyledNavLink key={route.path} to={route.path}>
            <route.icon size={23} /> {route.name}
          </StyledNavLink>
        ))}
      </Nav>
    </Wrapper>
  );
}
