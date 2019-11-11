import React, { useState, useRef, useEffect } from 'react';
import { MdInput, MdPerson } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import history from '~/services/history';

import { signOut } from '~/store/modules/auth/actions';

import Notifications from '~/components/Notifications';
import { Container, Profile, ProfileInfo, Options } from './styles';
import avatar from '~/assets/boy.svg';

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

  function handleNavigate(path) {
    setDropdown(false);
    history.push(path);
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container ref={listActionRef}>
      <Notifications />
      <Profile>
        <img src={profile.avatar ? profile.avatar.url : avatar} alt="avatar" />
        <ProfileInfo onClick={() => setDropdown(!dropdown)}>
          <b>{profile.name}</b>
          <span>{profile.acessLevel}</span>
        </ProfileInfo>
        {dropdown && (
          <Options>
            <button type="button" onClick={() => handleNavigate('/profile')}>
              <MdPerson size={20} />
              Perfil
            </button>
            <hr />
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
