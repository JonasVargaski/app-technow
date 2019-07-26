import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>{/* <Link to="/dashboard">AA</Link> */}</nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <Link to="/profile">Jonas Vargaski</Link>
              <button type="button">Sair</button>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Jonas"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
