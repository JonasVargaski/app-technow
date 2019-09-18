import { MdHome, MdContacts, MdDeviceHub } from 'react-icons/md';

import { store } from '~/store';

const { routes: userRoutes } = store.getState().auth;

const routes = [
  {
    path: '/dashboard',
    name: 'Inicio',
    default: true,
    icon: MdHome,
  },
  {
    path: '/profile',
    name: 'Perfil',
    icon: MdContacts,
  },
  {
    path: '/device',
    name: 'Controladores',
    icon: MdDeviceHub,
  },
];

export function hasAcess(path) {
  return routes.find(
    route =>
      (route.path === path && userRoutes.find(r => r === path)) || route.default
  );
}

export function getDefaultRoute() {
  return routes.find(r => r.default).path;
}

export function getLinks() {
  return routes.filter(route =>
    userRoutes.find(r => r === route.path || route.default)
  );
}
