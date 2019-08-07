import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import Notifications from '~/components/Notifications';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>{/* <Link to="/dashboard">AA</Link> */}</nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <Link to="/profile">Jonas Vargaski</Link>
              <button type="button" onClick={handleSignOut}>
                Sair
              </button>
            </div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Kg7BKJdSzqGnnf72cLJu_Jei5dp8TwWcmVIXkuN2e1rhLiuW"
              alt="Jonas"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
