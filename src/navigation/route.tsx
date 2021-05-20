import React, { ComponentType } from 'react';

// route interface
interface IRoute {
  path: string;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  exact: boolean;
}

const loadable = (loader: () => Promise<{ default: ComponentType<any> }>) =>
  React.lazy(loader);

/***
 * * Listing out all the route
 */

export const routes: Array<IRoute> = [
  {
    path: '/',
    component: loadable(() => import('pages/Incident')),
    exact: true,
  },
];
