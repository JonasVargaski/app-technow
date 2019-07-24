import { MdHome, MdContacts } from 'react-icons/md';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

const routes = [
  {
    path: '/',
    isPrivate: false,
    exact: true,
    component: SignIn,
  },
  {
    path: '/register',
    isPrivate: false,
    exact: true,
    component: SignUp,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    isPrivate: true,
    exact: true,
    icon: MdHome,
    navLink: true,
    component: Dashboard,
  },
  {
    path: '/profile',
    name: 'Perfil',
    isPrivate: true,
    exact: true,
    icon: MdContacts,
    navLink: true,
    component: Profile,
  },
];

export default routes;
