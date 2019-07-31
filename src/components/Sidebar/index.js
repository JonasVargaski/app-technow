import React, { useState, useEffect } from 'react';

import { MdMenu } from 'react-icons/md';
import { Wrapper, Nav, StyledNavLink } from './styles';

import { getLinks } from '~/routes/appRoutes';

export default function Sidebar() {
  const [toogle, setToogle] = useState(false);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks(getLinks());
  }, []);

  function handleToogle() {
    setToogle(!toogle);
  }

  return (
    <Wrapper toogle={toogle}>
      <div>
        <MdMenu size={40} onClick={handleToogle} />
      </div>

      <Nav>
        {links.map(link => (
          <StyledNavLink key={link.path} to={link.path}>
            <link.icon size={23} /> {link.name}
          </StyledNavLink>
        ))}
      </Nav>
    </Wrapper>
  );
}
