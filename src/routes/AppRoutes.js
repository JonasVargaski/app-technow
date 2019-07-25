import { MdHome, MdContacts } from 'react-icons/md';

import { store } from '~/store';

const { routes: userRoutes, signed } = store.getState().auth;

const routes = [
  {
    path: '/dashboard',
    name: 'Home',
    safe: false,
    icon: MdHome,
  },
  {
    path: '/profile',
    name: 'Profile',
    safe: true,
    icon: MdContacts,
  },
];

export function hasAcess(path) {
  return routes.find(r => r.path === path);
}

export function getDefaultRoute() {
  const route = routes.find(r => !r.safe);
  return route ? route.path : '/404';
}

export function getLinks() {
  return routes.filter(route =>
    userRoutes.find(r => r === route.path || !route.safe)
  );
}
