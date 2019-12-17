import React from 'react';

import { Switch, Redirect } from 'react-router-dom';

import Route from './Route';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import AccountConfirm from '~/pages/AccountConfirm';
import Monitoring from '~/pages/Monitoring';
import Profile from '~/pages/Profile';
import Device from '~/pages/Device';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" exact component={SignUp} />
      <Route path="/confirm" exact component={AccountConfirm} />

      <Route path="/monitoring" exact component={Monitoring} isPrivate />
      <Route path="/profile" exact component={Profile} isPrivate />
      <Route path="/device" exact component={Device} isPrivate />
      <Route path="/*" component={() => <Redirect to="/" />} />
    </Switch>
  );
}
