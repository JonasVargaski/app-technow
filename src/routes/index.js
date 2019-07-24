import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import routes from './AppRoutes';

export default function Routes() {
  return (
    <Switch>
      {routes.map(route => (
        <Route key={route.path} {...route} />
      ))}
    </Switch>
  );
}
