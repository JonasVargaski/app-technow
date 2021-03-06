import {
  MdDashboard,
  MdContacts,
  MdDeviceHub,
  MdExtension,
} from 'react-icons/md';

import { store } from '~/store';

const { routes: userRoutes } = store.getState().auth;

const routes = [
  {
    path: '/monitoring',
    name: 'Monitoramento',
    default: true,
    icon: MdDashboard,
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
  {
    path: '/device-register',
    name: 'Cadastro de Controladores',
    icon: MdExtension,
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

export function getRoutes(links) {
  if (links) {
    return routes.filter(route =>
      links.find(r => r === route.path || route.default)
    );
  }
  return [];
}
