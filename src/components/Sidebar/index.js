import React, { useState } from 'react';
import {
  MdHome,
  MdContacts,
  MdCompareArrows,
  MdMessage,
  MdPictureAsPdf,
  MdMenu,
} from 'react-icons/md';

import logo from '~/assets/logo-p.png';

import { Wrapper, Header, List, Scroll } from './styles';

export default function Sidebar() {
  const [toogle, setToogle] = useState(true);

  function handleToogle() {
    setToogle(!toogle);
  }

  return (
    <Wrapper toogle={toogle}>
      <Header>
        <img src={logo} alt="Logo" />

        <MdMenu size={35} onClick={handleToogle} />
      </Header>

      <List>
        <Scroll>
          <li>
            <div>
              <MdHome size={23} />
            </div>
            Dashboard
          </li>
          <li>
            <MdContacts size={23} />
            Relatórios
          </li>
          <li>
            <MdCompareArrows size={23} />
            Gráficos
          </li>
          <li>
            <MdMessage size={23} />
            Configurações
          </li>
          <li>
            <MdPictureAsPdf size={23} />
            Controladores
          </li>
          <li>
            <MdMenu size={23} />
            Controladores
          </li>
          <li>
            <MdHome size={23} />
            Dashboard
          </li>
          <li>
            <MdContacts size={23} />
            Relatórios
          </li>
          <li>
            <MdCompareArrows size={23} />
            Gráficos
          </li>
          <li>
            <MdMessage size={23} />
            Configurações
          </li>
          <li>
            <MdPictureAsPdf size={23} />
            Controladores
          </li>
          <li>
            <MdMenu size={23} />
            Controladores
          </li>
          <li>
            <MdHome size={23} />
            Dashboard
          </li>
          <li>
            <MdContacts size={23} />
            Relatórios
          </li>
          <li>
            <MdCompareArrows size={23} />
            Gráficos
          </li>
          <li>
            <MdMessage size={23} />
            Configurações
          </li>
          <li>
            <MdPictureAsPdf size={23} />
            Controladores
          </li>
          <li>
            <MdMenu size={23} />
            Controladores
          </li>
          <li>
            <MdHome size={23} />
            Dashboard
          </li>
          <li>
            <MdContacts size={23} />
            Relatórios
          </li>
          <li>
            <MdCompareArrows size={23} />
            Gráficos
          </li>
          <li>
            <MdMessage size={23} />
            Configurações
          </li>
          <li>
            <MdPictureAsPdf size={23} />
            Controladores
          </li>
          <li>
            <MdMenu size={23} />
            Controladores
          </li>
          <li>
            <MdHome size={23} />
            Dashboard
          </li>
          <li>
            <MdContacts size={23} />
            Relatórios
          </li>
          <li>
            <MdCompareArrows size={23} />
            Gráficos
          </li>
          <li>
            <MdMessage size={23} />
            Configurações
          </li>
          <li>
            <MdPictureAsPdf size={23} />
            Controladores
          </li>
          <li>
            <MdMenu size={23} />
            Controladores
          </li>
          <li>
            <MdHome size={23} />
            Dashboard
          </li>
          <li>
            <MdContacts size={23} />
            Relatórios
          </li>
          <li>
            <MdCompareArrows size={23} />
            Gráficos
          </li>
          <li>
            <MdMessage size={23} />
            Configurações
          </li>
          <li>
            <MdPictureAsPdf size={23} />
            Controladores
          </li>
          <li>
            <MdMenu size={23} />
            Controladores
          </li>
          <li>
            <MdHome size={23} />
            Dashboard
          </li>
          <li>
            <MdContacts size={23} />
            Relatórios
          </li>
          <li>
            <MdCompareArrows size={23} />
            Gráficos
          </li>
          <li>
            <MdMessage size={23} />
            Configurações
          </li>
          <li>
            <MdPictureAsPdf size={23} />
            Controladores
          </li>
          <li>
            <MdMenu size={23} />
            Controladores
          </li>
          <li>
            <MdHome size={23} />
            Dashboard
          </li>
          <li>
            <MdContacts size={23} />
            Relatórios
          </li>
          <li>
            <MdCompareArrows size={23} />
            Gráficos
          </li>
          <li>
            <MdMessage size={23} />
            Configurações
          </li>
          <li>
            <MdPictureAsPdf size={23} />
            Controladores
          </li>
          <li>
            <MdMenu size={23} />
            Controladores
          </li>
        </Scroll>
      </List>
    </Wrapper>
  );
}
