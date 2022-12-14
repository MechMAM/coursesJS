import React from 'react';
import { Switch } from 'react-router-dom';
import { toast } from 'react-toastify';

import MyRoute from './MyRoute';
import Login from '../pages/login';
import Page404 from '../pages/page404';

export default function Routes() {
  toast.success('Sucesso!');
  toast.error('Erro!');
  return (
    <Switch>
      <MyRoute exact path="/" component={Login} />
      <MyRoute exact path="*" component={Page404} />
    </Switch>
  );
}
