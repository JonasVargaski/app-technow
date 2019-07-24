import { MdHome, MdContacts } from 'react-icons/md';

import { store } from '~/store';

const { routes: userRoutes } = store.getState().auth;

const routes = [
  {
    path: '/dashboard',
    name: 'Home',
    private: true,
    icon: MdHome,
  },
  {
    path: '/profile',
    name: 'Profile',
    private: true,
    icon: MdContacts,
  },
];

export function getLinks() {
  return routes.filter(route =>
    userRoutes.find(r => r === route.path || !route.private)
  );
}
