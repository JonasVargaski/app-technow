import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  MdHome,
  MdContacts,
  MdCompareArrows,
  MdMessage,
  MdPictureAsPdf,
  MdMenu,
} from 'react-icons/md';

import { Wrapper, Nav } from './styles';

export default function Sidebar() {
  const [toogle, setToogle] = useState(true);

  function handleToogle() {
    setToogle(!toogle);
  }

  return (
    <Wrapper toogle={toogle}>
      <div>
        <MdMenu size={35} onClick={handleToogle} />
      </div>

      <Nav>
        <Link to="/dashboard">
          <MdHome size={23} />
          Dashboard
        </Link>
        <Link to="dashboard">
          <MdContacts size={23} />
          Relatórios
        </Link>
        <Link to="dashboard">
          <MdCompareArrows size={23} />
          Gráficos
        </Link>
        <Link to="dashboard">
          <MdMessage size={23} />
          Configurações
        </Link>
        <Link to="dashboard">
          <MdPictureAsPdf size={23} />
          Controladores
        </Link>
        <Link to="dashboard">
          <MdMenu size={23} />
          Controladores
        </Link>
        <Link to="dashboard">
          <MdHome size={23} />
          Dashboard
        </Link>
        <Link to="dashboard">
          <MdContacts size={23} />
          Relatórios
        </Link>
      </Nav>
    </Wrapper>
  );
}
