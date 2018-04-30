import * as React from 'react';
import { Route } from 'react-router';
import { routes} from './common/constants/routes';
import { App } from './app';

export const Routes = (
  <Route path={routes.default} component={App}>
  </Route>
);
