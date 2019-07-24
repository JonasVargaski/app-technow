import React, { useState, useEffect } from 'react';

import { MdMenu } from 'react-icons/md';

import appRoutes from '~/routes/AppRoutes';
import { store } from '~/store';

import { Wrapper, Nav, StyledNavLink } from './styles';

export default function Sidebar() {
  const [toogle, setToogle] = useState(true);
  const [links, setLinks] = useState([]);
  const { routes } = store.getState().auth;

  useEffect(() => {
    const acessRoutes = appRoutes
      .filter(route => route.navLink && routes.includes(route.path))
      .map(link => ({
        path: link.path,
        name: link.name,
        icon: link.icon,
      }));

    setLinks(acessRoutes);
  }, [routes]);

  function handleToogle() {
    setToogle(!toogle);
  }

  return (
    <Wrapper toogle={toogle}>
      <div>
        <MdMenu size={35} onClick={handleToogle} />
      </div>

      <Nav>
        {links.map(link => (
          <StyledNavLink key={link.to} to={link.path}>
            <link.icon size={20} /> {link.name}
          </StyledNavLink>
        ))}
      </Nav>
    </Wrapper>
  );
}
