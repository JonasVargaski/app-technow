import React, { useState, useRef, useEffect } from 'react';
import { MdInput, MdPerson } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import history from '~/services/history';

import { signOut } from '~/store/modules/auth/actions';

import Notifications from '~/components/Notifications';
import { Container, Profile, ProfileInfo, Options } from './styles';

export default function Header() {
  const [dropdown, setDropdown] = useState(false);
  const listActionRef = useRef(null);
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function toogleBoxProfile(e) {
    if (listActionRef && !listActionRef.current.contains(e.target)) {
      setDropdown(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mouseup', toogleBoxProfile, false);
    document.addEventListener('touchend', toogleBoxProfile, false);
    return () => {
      document.removeEventListener('mouseup', toogleBoxProfile, false);
      document.removeEventListener('touchend', toogleBoxProfile, false);
    };
  }, []);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Notifications />
      <Profile ref={listActionRef}>
        <img src={profile.avatar_url} alt="Avatar" />
        <ProfileInfo onClick={() => setDropdown(!dropdown)}>
          <b>{profile.name}</b>
          <span>{profile.acessLabel}</span>
        </ProfileInfo>
        {dropdown && (
          <Options>
            <button type="button" onClick={() => history.push('/profile')}>
              <MdPerson size={20} />
              Perfil
            </button>
            <button type="button" onClick={handleSignOut}>
              <MdInput size={20} />
              Sair
            </button>
          </Options>
        )}
      </Profile>
    </Container>
  );
}
